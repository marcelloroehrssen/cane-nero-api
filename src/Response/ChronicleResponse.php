<?php

namespace App\Response;

use App\Converter\ChronicleConverter;

class ChronicleResponse
{
    /** @var ChronicleConverter */
    private $chronicleConverter;

    /**
     * ChronicleResponse constructor.
     * @param ChronicleConverter $chronicleConverter
     */
    public function __construct(ChronicleConverter $chronicleConverter)
    {
        $this->chronicleConverter = $chronicleConverter;
    }

    /**
     * @param $chronicles
     * @param int $isLogged
     * @param array $filters
     * @param array $errors
     *
     * @return array
     */
    public function getResponse($chronicles, $isLogged = 0, $filters = [], $errors = [])
    {
        return [
            'isLogged' => $isLogged,
            'chronicles' => array_map(function($chronicle) {
                return $this->chronicleConverter->convert($chronicle);
            }, $chronicles),
            'filter' => $filters,
            'errors' => $errors,
        ];
    }
}