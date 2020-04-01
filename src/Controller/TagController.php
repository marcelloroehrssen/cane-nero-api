<?php

namespace App\Controller;

use App\Entity\Tag;
use App\Repository\TagRepository;
use App\Response\TagResponse;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;

/**
 * @Route("/tag", name="tag")
 */
class TagController extends AbstractController
{
    /**
     * @var TagResponse
     */
    protected $tagResponse;

    /**
     * TagController constructor.
     * @param TagResponse $tagResponse
     */
    public function __construct(TagResponse $tagResponse)
    {
        $this->tagResponse = $tagResponse;
    }

    /**
     * @Route(methods={"POST"})
     *
     * @param Request $request
     * @param ValidatorInterface $validator
     * @param EntityManagerInterface $em
     *
     * @return JsonResponse
     */
    public function create(Request $request, ValidatorInterface $validator, EntityManagerInterface $em)
    {
        ['name' => $name,] = json_decode($request->getContent(), true);
        $tag = new Tag();
        $tag->setName($name);

        $violations = $validator->validate($tag);
        $messages = [];
        if (0 !== count($violations)) {
            foreach ($violations as $violation) {
                $messages[] = $violation->getMessage();
            }
        } else {
            $em->persist($tag);
            $em->flush();
        }

        $response = $this->tagResponse->getResponse(
            [$tag],
            $this->getUser() !== null,
            []);

        return $this->json($response);
    }

    /**
     * @Route(methods={"GET"})
     *
     * @param TagRepository $tagRepository
     *
     * @return JsonResponse
     */
    public function read(TagRepository $tagRepository)
    {
        $tags = $tagRepository->findAll();
        $response = $this->tagResponse->getResponse(
            $tags,
            $this->getUser() !== null,
            [],
            []
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
        $response = $this->tagResponse->getResponse(
            [],
            $this->getUser() !== null,
            [],
            [
                'You can\'t update a tag'
            ]
        );
        return $this->json($response);
    }

    /**
     * @Route(methods={"DELETE"})
     *
     * @param Request $request
     * @param TagRepository $tagRepository
     * @param EntityManagerInterface $em
     *
     * @return JsonResponse
     */
    public function delete(Request $request, TagRepository $tagRepository, EntityManagerInterface $em)
    {
        ['id' => $id] = json_decode($request->getContent(), true);

        $tag = $tagRepository->find($id);
        if (null === $tag) {
            $response = $this->tagResponse->getResponse(
                [],
                $this->getUser() !== null,
                [],
                [sprintf('Tag (%s) not found', $id)]
            );

            return $this->json($response);
        }

        $em->remove($tag);
        $em->flush();

        return $this->json([]);
    }
}
