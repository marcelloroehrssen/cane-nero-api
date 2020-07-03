<?php

namespace App\Response;

use App\Converter\NewsConverter;
use App\Entity\News;

class NewsResponse
{
    /** @var NewsConverter */
    protected $newsConverter;

    /**
     * NewsResponse constructor.
     * @param NewsConverter $newsConverter
     */
    public function __construct(NewsConverter $newsConverter)
    {
        $this->newsConverter = $newsConverter;
    }

    /**
     * @param News[] $news
     * @param int $isLogged
     * @param array $filters
     * @param array $errors
     *
     * @return array
     */
    public function getResponse($news, $isLogged = 0, $filters = [], $errors = [])
    {
        return [
            'isLogged' => $isLogged,
            'news' => array_map(function($news) {
                return $this->newsConverter->convert($news);
            }, $news),
            'filter' => $filters,
            'errors' => $errors,
        ];
    }
}
