<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use App\Response\UserResponse;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\NonUniqueResultException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

/**
 * @Route("/user", name="user")
 */
class UserController extends AbstractController
{
    /** @var UserResponse */
    private $userResponse;

    /**
     * UserController constructor.
     * @param UserResponse $userResponse
     */
    public function __construct(UserResponse $userResponse)
    {
        $this->userResponse = $userResponse;
    }

    /**
     * @Route(methods={"POST"})
     *
     * @param Request $request
     * @param EntityManagerInterface $em
     * @param UserPasswordEncoderInterface $passwordEncoder
     * @param ValidatorInterface $validator
     *
     * @return Response
     */
    public function create(
        Request $request,
        EntityManagerInterface $em,
        UserPasswordEncoderInterface $passwordEncoder,
        ValidatorInterface $validator
    )
    {
        $content = json_decode($request->getContent(), true);
        [
            'username' => $username,
            'email' => $email,
            'firstName' => $firstName,
            'lastName' => $lastName,
            'password' => $password,
        ] = $content;

        $user = new User();
        $user->setFirstName($firstName);
        $user->setLastName($lastName);
        $user->setUsername($username);
        $user->setEmail($email);
        $user->setPassword($passwordEncoder->encodePassword($user, $password));

        $violations = $validator->validate($user);
        $messages = [];
        if (0 !== count($violations)) {
            foreach ($violations as $violation) {
                $messages[] = $violation->getMessage();
            }
        } else {
            $em->persist($user);
            $em->flush();
        }

        $response = $this->userResponse->getResponse($user, 0, [], $messages);
        return $this->json($response);
    }

    /**
     * @Route(methods={"GET"})
     *
     * @param Request $request
     * @param UserRepository $repository
     *
     * @return Response
     *
     * @throws NonUniqueResultException
     */
    public function read(Request $request, UserRepository $repository)
    {
        $filters = json_decode($request->query->get('filter', ''), true);

        if (!empty($filters)) {
            ['field' => $filterField, 'value' => $filterValue] = $filters;

            if ($filterField === 'all') {
                $user = $repository->findAll();
            } else if ($filterField === 'news') {
                $user = $repository->findByField($filterField, $filterValue) ?? null;
            } else {
                $userFromDb = $repository->findByField($filterField, $filterValue) ?? null;
                $user = ($this->getUser() !== null ? $this->getUser()->getId() : null) === ($userFromDb instanceof User ? $userFromDb->getId() : null) ? null : $userFromDb;
            }

        } else {
            $user = $this->getUser();
        }
        $isLogged = $this->getUser() !== null;
        $response = $this->userResponse->getResponse($user, $isLogged, [], $filters);

        return $this->json($response);
    }

    /**
     * @Route(methods={"PUT"})
     *
     * @param Request $request
     * @param EntityManagerInterface $em
     * @param UserPasswordEncoderInterface $passwordEncoder
     * @param ValidatorInterface $validator
     *
     * @return Response
     */
    public function update(
        Request $request,
        EntityManagerInterface $em,
        UserPasswordEncoderInterface $passwordEncoder,
        ValidatorInterface $validator
    )
    {
        [
            'username' => $username, 'email' => $email, 'firstName' => $firstName, 'lastName' => $lastName, 'avatar' => $avatar
        ] = array_merge(
            ['username' => null, 'email' => null, 'firstName' => null, 'lastName' => null, 'avatar' => null],
            json_decode($request->getContent(), true)
        );


        /** @var User $user */
        $user = $this->getUser();
        $user->setUsername($username ?? $user->getUsername());
        $user->setFirstName($firstName ?? $user->getFirstName());
        $user->setLastName($lastName ?? $user->getLastName());
        $user->setEmail($email ?? $user->getEmail());
        $user->setAvatar($avatar ?? $user->getAvatar());

        $violations = $validator->validate($user);
        $messages = [];
        if (0 !== count($violations)) {
            foreach ($violations as $violation) {
                $messages[] = $violation->getMessage();
            }
        } else {
            $em->persist($user);
            $em->flush();
        }

        $response = $this->userResponse->getResponse(
            $user,
            $this->getUser() !== null,
            []);


        return $this->json($response);
    }

    /**
     * @Route(methods={"DELETE"})
     *
     * @param EntityManagerInterface $em
     *
     * @return Response
     */
    public function delete(EntityManagerInterface $em)
    {
        /** @var  User */
        $user = $this->getUser();

        $em->remove($user);
        $em->flush();

        return $this->json([]);
    }
}
