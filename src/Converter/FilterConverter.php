<?php

namespace App\Converter;

use App\Repository\NewsRepository;
use App\Repository\TagRepository;
use App\Repository\UserRepository;
use App\ValueObject\Filter;

class FilterConverter implements Converter
{
    /** @var NewsRepository */
    protected $newsRepository;

    /** @var TagRepository */
    protected $tagRepository;

    /** @var UserRepository  */
    private $userRepository;

    /**
     * FilterConverter constructor.
     * @param NewsRepository $newsRepository
     * @param TagRepository $tagRepository
     * @param UserRepository $userRepository
     */
    public function __construct(NewsRepository $newsRepository, TagRepository $tagRepository, UserRepository $userRepository)
    {
        $this->newsRepository = $newsRepository;
        $this->tagRepository = $tagRepository;
        $this->userRepository = $userRepository;
    }

    /**
     * @param array $entity
     *
     * @return Filter
     *
     * @throws \Exception
     */
    public function convert($entity)
    {
        [
            'id' => $id,
            'dates' => $dates,
            'author' => $author,
            'tags'  => $tags
        ] = array_merge(
            ['id' => null, 'dates' => [], 'author' => null, 'tags' => []],
            json_decode($entity, true) ?? []
        );

        $news = null;
        if (null !== $id) {
            $news = $this->newsRepository->find($id);
        }

        $dateObject[0] = null;
        $dateObject[1] = null;
        if (isset($dates[0]) && isset($dates[1])) {
            $dateObject = [
                new \DateTime($dates[0]),
                new \DateTime($dates[1]),
            ];
            usort($dateObject, function(\DateTime $date1, \DateTime $date2) {
                return ($date1->format('U') - $date2->format('U')) > 0;
            });
        }

        $authorEntity = null;
        if (null !== $author) {
            $authorEntity = $this->userRepository->findOneByUsername($author);
        }

        $tagsEntity = [];
        if (!empty($tags)) {
            $tagsEntity = array_map(function($tag) {
                return $this->tagRepository->findOneBySlug($tag);
            }, $tags);
        }

        return new Filter($news, $dateObject[0], $dateObject[1], $authorEntity, $tagsEntity);
    }
}
