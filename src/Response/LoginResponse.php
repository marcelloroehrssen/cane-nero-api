<?php

namespace App\Response;

use App\Converter\JwtConverter;
use App\Converter\UserConverter;

class LoginResponse
{
    /** @var UserConverter */
    private $userConverter;

    /** @var JwtConverter  */
    private $jwtConverter;

    /**
     * LoginResponse constructor.
     *
     * @param UserConverter $userConverter
     * @param JwtConverter $jwtConverter
     */
    public function __construct(UserConverter $userConverter, JwtConverter $jwtConverter)
    {
        $this->userConverter = $userConverter;
        $this->jwtConverter = $jwtConverter;
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
            'token' => $this->jwtConverter->convert($user),
            'user' => $this->userConverter->convert($user),
            'filter' => $filters,
            'errors' => $messages,
        ];
    }
}