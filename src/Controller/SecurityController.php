<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use App\Response\LoginResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class SecurityController extends AbstractController
{
    /** @var LoginResponse */
    private $loginResponse;

    /** @var UserRepository  */
    private $userRepository;

    /**
     * UserController constructor.
     * @param LoginResponse $loginResponse
     * @param UserRepository $userRepository
     */
    public function __construct(LoginResponse $loginResponse, UserRepository $userRepository)
    {
        $this->loginResponse = $loginResponse;
        $this->userRepository = $userRepository;
    }

    /**
     * @Route("/login", name="login", methods={"POST"})
     * @param Request $request
     * @param UserPasswordEncoderInterface $passwordEncoder
     * @return JsonResponse
     */
    public function login(Request $request, UserPasswordEncoderInterface $passwordEncoder)
    {
        ['username' => $username, 'password' => $password] = json_decode($request->getContent(), true);

        /** @var User $user */
        $user = $this->userRepository->findOneByUsername($username);
        if (null === $user) {
            return new JsonResponse(null, Response::HTTP_UNAUTHORIZED);
        }

        if ($passwordEncoder->encodePassword($user, $password) !== $user->getPassword()) {
            return new JsonResponse(null, Response::HTTP_UNAUTHORIZED);
        }

        return $this->json($this->loginResponse->getResponse($user, 1));
    }
}