<?php

namespace App\Converter;

use App\Entity\Payment;
use App\Entity\User;

class UserConverter implements Converter
{
    /**
     * @param User $entity
     *
     * @return array
     */
    public function convert($entity)
    {
        if (null === $entity) {
            return [];
        }
        return [
            'id' => $entity->getId(),
            'avatar' => $entity->getAvatar(),
            'username' => $entity->getUsername(),
            'firstName' => $entity->getFirstName(),
            'lastName' => $entity->getLastName(),
            'email' => $entity->getEmail(),
            'roles' => $entity->getRoles(),
            'hasProblem' => $this->checkProblems($entity)
        ];
    }

    /**
     * @param User $entity
     *
     * @return array
     */
    public function checkProblems($entity)
    {
        return [
            'payments' => $entity->getPayments()->filter(
                function (Payment $el) {
                    return $el->getYear().'' === date('Y').'';
                })->count() === 0
        ];
    }
}