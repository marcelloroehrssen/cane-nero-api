<?php

namespace App\Controller;

use App\Entity\Event;
use App\Repository\ChronicleRepository;
use App\Repository\EventRepository;
use App\Response\EventResponse;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;

/**
 * @Route("/event", name="events")
 */
class EventsController extends AbstractController
{
    /** @var EventResponse */
    protected $eventResponse;

    /**
     * EventsController constructor.
     *
     * @param EventResponse $eventResponse
     */
    public function __construct(EventResponse $eventResponse)
    {
        $this->eventResponse = $eventResponse;
    }

    /**
     * @Route(methods={"GET"})
     *
     * @param Request $request
     * @param EventRepository $eventRepository
     * @param ChronicleRepository $chronicleRepository
     *
     * @return JsonResponse
     *
     * @throws \Exception
     */
    public function read(Request $request, EventRepository $eventRepository, ChronicleRepository $chronicleRepository)
    {
        $filters = json_decode($request->query->get('filter', ''), true);

        $chronicle = null;
        if (isset($filters['chronicle'])) {
            $chronicle = $chronicleRepository->find($filters['chronicle']);
        }
        $events = $eventRepository->findByMonth($filters['month'], $chronicle);

        $response = $this->eventResponse->getResponse(
            $events,
            $this->getUser() !== null,
            $filters);

        return $this->json($response);
    }

    /**
     * @Route(methods={"POST"})
     * @IsGranted("ROLE_ADMIN")
     *
     * @param Request $request
     * @param ChronicleRepository $chronicleRepository
     * @param ValidatorInterface $validator
     * @param EntityManagerInterface $em
     *
     * @return JsonResponse
     *
     * @throws \Exception
     */
    public function create(
        Request $request,
        ChronicleRepository $chronicleRepository,
        ValidatorInterface $validator,
        EntityManagerInterface $em
    )
    {
        [
            'name' => $name,
            'chronicle' => $chronicleId,
            'location' => $location,
            'date' => $date,
        ] = json_decode($request->getContent(), true);

        $chronicle = $chronicleRepository->find($chronicleId);
        if (null === $chronicle) {
            $response = $this->eventResponse->getResponse(
                [],
                $this->getUser() !== null,
                [],
                [
                    sprintf('Chronicle (%s) not found', $chronicleId)
                ]
            );

            return $this->json($response);
        }

        $event = new Event();
        $event->setName($name);
        $event->setDate(new \DateTime($date));
        $event->setLocation($location);
        $event->setChronicle($chronicle);
        $event->setCreator($this->getUser());

        $violations = $validator->validate($event);
        $messages = [];
        if (0 !== count($violations)) {
            foreach ($violations as $violation) {
                $messages[] = $violation->getMessage();
            }
        } else {
            $em->persist($event);
            $em->flush();
        }

        $response = $this->eventResponse->getResponse(
            [$event],
            $this->getUser() !== null,
            []);

        return $this->json($response);
    }

    /**
     * @Route(methods={"PUT"})
     * @IsGranted("ROLE_ADMIN")
     *
     * @param Request $request
     * @param EventRepository $eventRepository
     * @param ChronicleRepository $chronicleRepository ,
     * @param ValidatorInterface $validator
     * @param EntityManagerInterface $em
     *
     * @return JsonResponse
     * @throws \Exception
     */
    public function update(
        Request $request,
        EventRepository $eventRepository,
        ChronicleRepository $chronicleRepository,
        ValidatorInterface $validator,
        EntityManagerInterface $em
    )
    {
        [
            'id' => $id, 'name' => $name, 'chronicle' => $chronicleId, 'location' => $location, 'date' => $date,
        ] = array_merge(
            ['id' => null, 'name' => null, 'chronicle' => null, 'location' => null, 'date' => null],
            json_decode($request->getContent(), true)
        );

        $event = $eventRepository->find($id);
        if (null === $event) {
            $response = $this->eventResponse->getResponse(
                [],
                $this->getUser() !== null,
                [],
                [sprintf('Event (%s) not found', $id)]
            );

            return $this->json($response);
        }
        if (null !== $chronicleId) {
            $chronicle = $chronicleRepository->find($chronicleId);
            if (null === $chronicle) {
                $response = $this->eventResponse->getResponse(
                    [],
                    $this->getUser() !== null,
                    [],
                    [
                        sprintf('Chronicle (%s) not found', $chronicleId)
                    ]
                );

                return $this->json($response);
            }
        }

        $event->setName($name ?? $event->getName());
        $event->setLocation($location ?? $event->getLocation());
        $event->setDate($date ? new \DateTime($date) : $event->getDate());
        $event->setChronicle($chronicleId ? $chronicle : $event->getChronicle());

        $violations = $validator->validate($event);
        $messages = [];
        if (0 !== count($violations)) {
            foreach ($violations as $violation) {
                $messages[] = $violation->getMessage();
            }
        } else {
            $em->persist($event);
            $em->flush();
        }

        $response = $this->eventResponse->getResponse(
            [$event],
            $this->getUser() !== null,
            []);

        return $this->json($response);
    }

    /**
     * @Route(methods={"DELETE"})
     * @IsGranted("ROLE_ADMIN")
     *
     * @param Request $request
     * @param EventRepository $eventRepository
     * @param EntityManagerInterface $em
     *
     * @return JsonResponse
     */
    public function delete(Request $request, EventRepository $eventRepository, EntityManagerInterface $em)
    {
        ['id' => $id] = json_decode($request->getContent(), true);

        $event = $eventRepository->find($id);
        if (null === $event) {
            $response = $this->eventResponse->getResponse(
                [],
                $this->getUser() !== null,
                [],
                [sprintf('Event (%s) not found', $id)]
            );

            return $this->json($response);
        }

        $em->remove($event);
        $em->flush();

        return $this->json([]);
    }
}
