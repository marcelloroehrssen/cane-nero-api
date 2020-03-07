<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/user", name="user")
 */
class UserController extends AbstractController
{
    /**
     * @Route(methods={"POST"})
     *
     * @return Response
     */
    public function create()
    {
        return $this->render('user/index.html.twig', [
            'controller_name' => 'UserController',
        ]);
    }

    /**
     * @Route(methods={"GET"})
     *
     * @return Response
     */
    public function read()
    {
        $data = [
            'data' => [
                ['id' => 1, 'username' => 'Marcello1', 'email' => 'asd@asd.ads'],
                ['id' => 2, 'username' => 'marcello2', 'email' => 'asd@asd.ads'],
                ['id' => 3, 'username' => 'Marcello3', 'email' => 'asd@asd.ads'],
                ['id' => 4, 'username' => 'mArcello4', 'email' => 'asd@asd.ads'],
            ]
        ];
        return $this->json($data);
    }

    /**
     * @Route(methods={"PUT"})
     *
     * @return Response
     */
    public function update()
    {
        return $this->render('user/index.html.twig', [
            'controller_name' => 'UserController',
        ]);
    }

    /**
     * @Route(methods={"DELETE"})
     *
     * @return Response
     */
    public function delete()
    {
        return $this->render('user/index.html.twig', [
            'controller_name' => 'UserController',
        ]);
    }
}
