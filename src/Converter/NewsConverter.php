<?php

namespace App\Converter;

use App\Entity\News;
use App\Entity\Tag;

class NewsConverter implements Converter
{
    /** @var TagConverter */
    protected $tagConverter;

    /** @var UserConverter */
    protected $userConverter;

    /**
     * NewsConverter constructor.
     * @param TagConverter $tagConverter
     * @param UserConverter $userConverter
     */
    public function __construct(TagConverter $tagConverter, UserConverter $userConverter)
    {
        $this->tagConverter = $tagConverter;
        $this->userConverter = $userConverter;
    }

    /**
     * @param News $entity
     * @return array
     */
    public function convert($entity)
    {
        if (null === $entity) {
            return [];
        }

        $convertedTags = [];
        foreach ($entity->getTags() as $tag) {
            $convertedTags[] = $this->tagConverter->convert($tag);
        }

        return [
            'id' => $entity->getId(),
            'title' => $entity->getTitle(),
            'image' => $entity->getImage(),
            'text' => $entity->getText(),
            'published' => $entity->getPublished(),
            'date' => $entity->getDate()->format('Y-m-d H:i:s'),
            'author' => $this->userConverter->convert($entity->getAuthor()),
            'tags' => $convertedTags
        ];
    }
}
