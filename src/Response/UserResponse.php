<?php

namespace App\Response;

use App\Converter\UserConverter;
use App\Entity\User;

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
        $users = [];
        if (null !== $user) {
            if ($user instanceof User) {
                $users = $this->userConverter->convert($user);
            } else {
                $users = array_map(function ($u) {
                    return $this->userConverter->convert($u);
                }, $user);
            }
        }
        return [
            'isLogged' => $isLogged,
            'user' => $users,
            'filter' => $filters,
            'errors' => $messages,
        ];
    }
}