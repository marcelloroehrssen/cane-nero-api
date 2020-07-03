<?php

namespace App\Response;

use App\Converter\EventConverter;

class EventResponse
{
    /** @var EventConverter */
    private $eventConverter;

    /**
     * ChronicleResponse constructor.
     * @param EventConverter $eventConverter
     */
    public function __construct(EventConverter $eventConverter)
    {
        $this->eventConverter = $eventConverter;
    }

    /**
     * @param $chronicles
     * @param int $isLogged
     * @param array $filters
     * @param array $errors
     *
     * @return array
     */
    public function getResponse($events, $isLogged = 0, $filters = [], $errors = [])
    {
        return [
            'isLogged' => $isLogged,
            'events' => array_map(function($event) {
                return $this->eventConverter->convert($event);
            }, $events),
            'filter' => $filters,
            'errors' => $errors,
        ];
    }
}