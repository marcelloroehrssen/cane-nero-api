<?php

namespace App\Controller;

use App\Repository\ChronicleRepository;
use App\Response\ChronicleResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/chronicle", name="user")
 */
class ChronicleController extends AbstractController
{
    /** @var ChronicleResponse */
    protected $chronicleResponse;

    /**
     * ChronicleController constructor.
     * @param ChronicleResponse $chronicleResponse
     */
    public function __construct(ChronicleResponse $chronicleResponse)
    {
        $this->chronicleResponse = $chronicleResponse;
    }

    /**
     * @Route(methods={"GET"})
     *
     * @param ChronicleRepository $chronicleRepository
     *
     * @return JsonResponse
     */
    public function read(ChronicleRepository $chronicleRepository)
    {
        $chronicles = $chronicleRepository->findAll();
        $response = $this->chronicleResponse->getResponse(
            $chronicles,
            $this->getUser() !== null,
            [],
            []
        );
        return $this->json($response);
    }

    /**
     * @Route(methods={"POST"})
     *
     * @return JsonResponse
     */
    public function create()
    {
        $response = $this->chronicleResponse->getResponse(
            [],
            $this->getUser() !== null,
            [],
            [
                'You can\'t insert a new Chronicle'
            ]
        );

        return $this->json($response);
    }

    /**
     * @Route(methods={"PUT"})
     *
     * @return JsonResponse
     */
    public function update()
    {
        $response = $this->chronicleResponse->getResponse(
            [],
            $this->getUser() !== null,
            [],
            [
                'You can\'t update a new Chronicle'
            ]
        );

        return $this->json($response);
    }

    /**
     * @Route(methods={"DELETE"})
     *
     * @return JsonResponse
     */
    public function delete()
    {
        $response = $this->chronicleResponse->getResponse(
            [],
            $this->getUser() !== null,
            [],
            [
                'You can\'t delete a new Chronicle'
            ]
        );

        return $this->json($response);
    }
}
