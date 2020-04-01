<?php

namespace App\Response;

use App\Converter\UserConverter;

class UserResponse
{
    /** @var UserConverter */
    private $userConverter;

    /**
     * UseResponse constructor.
     *
     * @param UserConverter $userConverter
     */
    public function __construct(UserConverter $userConverter)
    {
        $this->userConverter = $userConverter;
    }

    /**
     * @param $user
     * @param int $isLogged
     * @param array $filters
     * @param array $messages
     *
     * @return array
     */
    public function getResponse($user, $isLogged = 0, $filters = [], $messages = [])
    {
        return [
            'isLogged' => $isLogged,
            'user' => $this->userConverter->convert($user),
            'filter' => $filters,
            'errors' => $messages,
        ];
    }
}