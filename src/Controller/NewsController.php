<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/news", name="user")
 */
class NewsController extends AbstractController
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
        sleep(2);
        $data = [
            [
                'id' => 1,
                'title' => 'Titolo molto bello',
                'image' => 'https://picsum.photos/id/'.rand(0,100).'/800/800',
            ],
            [
                'id' => 2,
                'title' => 'Titolo molto bello 2',
                'image' => 'https://picsum.photos/id/'.rand(0,100).'/800/800',
            ],
            [
                'id' => 3,
                'title' => 'Titolo molto bello 3',
                'image' => 'https://picsum.photos/id/'.rand(0,100).'/800/800',

            ],
            [
                'id' => 4,
                'title' => 'Titolo molto bello 4',
                'image' => 'https://picsum.photos/id/'.rand(0,100).'/800/800',
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
