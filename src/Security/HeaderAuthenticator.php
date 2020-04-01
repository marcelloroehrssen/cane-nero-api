<?php

namespace App\Security;

use App\Repository\UserRepository;
use Firebase\JWT\JWT;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\UserProviderInterface;
use Symfony\Component\Security\Guard\AbstractGuardAuthenticator;

class HeaderAuthenticator extends AbstractGuardAuthenticator
{
    /** @var UserRepository */
    protected $userRepository;

    /** @var string */
    protected $secretKey;

    /** @var int */
    protected $jwtSessionValidity;

    /**
     * HeaderAuthenticator constructor.
     *
     * @param UserRepository $userRepository
     * @param string $secretKey
     * @param int $jwtSessionValidity
     */
    public function __construct(UserRepository $userRepository, string $secretKey, int $jwtSessionValidity)
    {
        $this->userRepository = $userRepository;
        $this->secretKey = $secretKey;
        $this->jwtSessionValidity = $jwtSessionValidity;
    }

    public function start(Request $request, AuthenticationException $authException = null)
    {
        $data = [
            'message' => 'Authentication Required'
        ];

        return new JsonResponse($data, Response::HTTP_UNAUTHORIZED);
    }

    public function supports(Request $request)
    {
        return $request->headers->has('client-security-token');
    }

    public function getCredentials(Request $request)
    {
        return $request->headers->get('client-security-token');
    }

    public function getUser($credentials, UserProviderInterface $userProvider)
    {
        if (null === $credentials) {
            return null;
        }

        $data = JWT::decode($credentials, $this->secretKey, ['HS256']);
        if (($data->iat + $this->jwtSessionValidity) < time()) {
            return null;
        }

        return $this->userRepository->find($data->user);
    }

    public function checkCredentials($credentials, UserInterface $user)
    {
        return true;
    }

    public function onAuthenticationFailure(Request $request, AuthenticationException $exception)
    {
        $data = [
            'message' => strtr($exception->getMessageKey(), $exception->getMessageData())
        ];

        return new JsonResponse($data, Response::HTTP_UNAUTHORIZED);
    }

    public function onAuthenticationSuccess(Request $request, TokenInterface $token, $providerKey)
    {
        return null;
    }

    public function supportsRememberMe()
    {
        return false;
    }
}