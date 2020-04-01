<?php

namespace App\Converter;

use App\Entity\User;
use Firebase\JWT\JWT;

class JwtConverter implements Converter
{
    /** @var string */
    private $secretKey;

    /**
     * JwtConverter constructor.
     * @param string $secretKey
     */
    public function __construct(string $secretKey)
    {
        $this->secretKey = $secretKey;
    }

    /**
     * @param User $entity
     *
     * @return string
     */
    public function convert($entity)
    {
        if (null === $entity) {
            return '';
        }
        $payload = [
            'iat' => time(),
            'user' => $entity->getId()
        ];

        return JWT::encode($payload, $this->secretKey);
    }
}