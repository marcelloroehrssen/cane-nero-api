<?php

namespace App\Security;

use Symfony\Component\Security\Core\Encoder\PasswordEncoderInterface;

/**
 * @method bool needsRehash(string $encoded)
 */
class PasswordEncoder implements PasswordEncoderInterface
{

    public function encodePassword($raw, $salt)
    {
        return sha1($raw);
    }

    public function isPasswordValid($encoded, $raw, $salt)
    {
        return $encoded === sha1($raw);
    }

    public function __call($name, $arguments)
    {
        return false;
    }
}