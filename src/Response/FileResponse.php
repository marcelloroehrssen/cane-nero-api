<?php

namespace App\Response;

class FileResponse
{
    /** @var string */
    protected $newsDestinationFiles;

    /** @var string */
    protected $cdnUrl;

    /** @var string */
    protected $cdnUser;

    /** @var string */
    protected $cdnNews;

    /**
     * FileResponse constructor.
     *
     * @param string $newsDestinationFiles
     * @param string $cdnUrl
     * @param string $cdnUser
     * @param string $cdnNews
     */
    public function __construct(string $newsDestinationFiles, string $cdnUrl, string $cdnUser, string $cdnNews)
    {
        $this->newsDestinationFiles = $newsDestinationFiles;
        $this->cdnUrl = $cdnUrl;
        $this->cdnUser = $cdnUser;
        $this->cdnNews = $cdnNews;
    }

    /**
     * @param $name
     * @param $resource
     * @param int $isLogged
     * @param array $filters
     * @param array $errors
     *
     * @return array
     */
    public function getResponse($name, $resource,  $isLogged = 0, $filters = [], $errors = [])
    {
        $path = '';
        if ($resource === 'user') {
            $path = $this->cdnUser;
        } elseif ($resource === 'news') {
            $path = $this->cdnNews;
        }

        return [
            'isLogged' => $isLogged,
            'file' => [
                'path' => $this->cdnUrl . $path . $name
            ],
            'filter' => $filters,
            'errors' => $errors,
        ];
    }
}