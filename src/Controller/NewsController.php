<?php

namespace App\Controller;

use App\Converter\FilterConverter;
use App\Entity\News;
use App\Repository\NewsRepository;
use App\Repository\TagRepository;
use App\Response\NewsResponse;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;

/**
 * @Route("/news", name="user")
 */
class NewsController extends AbstractController
{
    /** @var NewsResponse */
    protected $newsResponse;

    /**
     * NewsController constructor.
     * @param NewsResponse $newsResponse
     */
    public function __construct(NewsResponse $newsResponse)
    {
        $this->newsResponse = $newsResponse;
    }

    /**
     * @Route(methods={"POST"})
     * @IsGranted("ROLE_ADMIN")
     *
     * @param Request $request
     * @param ValidatorInterface $validator
     * @param EntityManagerInterface $em
     * @param TagRepository $tagRepository
     *
     * @return Response
     */
    public function create(
        Request $request,
        ValidatorInterface $validator,
        EntityManagerInterface $em,
        TagRepository $tagRepository)
    {
        [
            'title' => $title,
            'image' => $image,
            'text' => $text,
            'tags' => $tags,
        ] = json_decode($request->getContent(), true);

        $news = new News();

        foreach ($tags as $tag) {
            if (null !== ($tagEntity = $tagRepository->find($tag['id']))) {
                $news->addTag($tagEntity);
            }
        }
        $news->setTitle($title);
        $news->setImage($image);
        $news->setText($text);
        $news->setAuthor($this->getUser());

        $violations = $validator->validate($news);
        $messages = [];
        if (0 !== count($violations)) {
            foreach ($violations as $violation) {
                $messages[] = $violation->getMessage();
            }
        } else {
            $em->persist($news);
            $em->flush();
        }

        $response = $this->newsResponse->getResponse(
            [$news],
            $this->getUser() !== null,
            []
        );

        return $this->json($response);
    }

    /**
     * @Route(methods={"GET"})
     *
     * @param Request $request
     * @param NewsRepository $repository
     * @param FilterConverter $filterConverter
     *
     * @return Response
     *
     * @throws \Exception
     */
    public function read(Request $request, NewsRepository $repository, FilterConverter $filterConverter)
    {
        $filters = $filterConverter->convert($request->query->get('filter', ''));
        $maxResult = $request->query->get('maxresult');
        $offset = $request->query->get('offset');

        $news = $repository->search($filters, $maxResult, $offset);

        $response = $this->newsResponse->getResponse(
            $news,
            $this->getUser() !== null,
            json_decode($request->query->get('filter', ''), true)
        );

        return $this->json($response);
    }

    /**
     * @Route(methods={"PUT"})
     *
     * @param Request $request
     * @param NewsRepository $newsRepository
     * @param TagRepository $tagRepository
     * @param ValidatorInterface $validator
     * @param EntityManagerInterface $em
     *
     * @return Response
     */
    public function update(
        Request $request,
        NewsRepository $newsRepository,
        TagRepository $tagRepository,
        ValidatorInterface $validator,
        EntityManagerInterface $em)
    {
        [
            'id' => $id, 'title' => $title, 'image' => $image, 'text' => $text, 'tags' => $tags
        ] = array_merge(
            ['id' => null, 'title' => null, 'image' => null, 'text' => null, 'tags' => null],
            json_decode($request->getContent(), true)
        );

        $news = $newsRepository->find($id);
        if (null === $news) {
            $response = $this->newsResponse->getResponse(
                [],
                $this->getUser() !== null,
                [],
                [sprintf('News (%s) not found', $id)]
            );

            return $this->json($response);
        }
        $tagsEntities = [];
        if (null !== $tags) {
            $tagsEntities = array_map(
                function($tag) use ($tagRepository) {
                    return $tagRepository->find($tag['id']);
                },
                $tags
            );
        }

        $news->setTitle($title ?? $news->getTitle());
        $news->setImage($image ?? $news->getImage());
        $news->setText($text ?? $news->getText());
        foreach ($tagsEntities as $tagsEntity) {
            $news->addTag($tagsEntity);
        }

        $violations = $validator->validate($news);
        $messages = [];
        if (0 !== count($violations)) {
            foreach ($violations as $violation) {
                $messages[] = $violation->getMessage();
            }
        } else {
            $em->persist($news);
            $em->flush();
        }

        $response = $this->newsResponse->getResponse(
            [$news],
            $this->getUser() !== null,
            []);

        return $this->json($response);
    }

    /**
     * @Route(methods={"DELETE"})
     *
     * @param Request $request
     * @param NewsRepository $newsRepository
     * @param EntityManagerInterface $em
     *
     * @return Response
     */
    public function delete(Request $request, NewsRepository $newsRepository, EntityManagerInterface $em)
    {
        ['id' => $id] = json_decode($request->getContent(), true);

        $news = $newsRepository->find($id);
        if (null === $news) {
            $response = $this->newsResponse->getResponse(
                [],
                $this->getUser() !== null,
                [],
                [sprintf('News (%s) not found', $id)]
            );

            return $this->json($response);
        }

        $em->remove($news);
        $em->flush();

        return $this->json([]);
    }
}
