<?php

namespace App\Response;

use App\Converter\TagConverter;

class TagResponse
{
    /**
     * @var TagConverter
     */
    private $tagConverter;

    /**
     * TagResponse constructor.
     * @param TagConverter $tagConverter
     */
    public function __construct(TagConverter $tagConverter)
    {
        $this->tagConverter = $tagConverter;
    }

    /**
     * @param $tags
     * @param int $isLogged
     * @param array $filters
     * @param array $errors
     *
     * @return array
     */
    public function getResponse($tags, $isLogged = 0, $filters = [], $errors = [])
    {
        return [
            'isLogged' => $isLogged,
            'tags' => array_map(function($tag) {
                return $this->tagConverter->convert($tag);
            }, $tags),
            'filter' => $filters,
            'errors' => $errors,
        ];
    }
}
