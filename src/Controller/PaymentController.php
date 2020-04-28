<?php

namespace App\Controller;

use App\Entity\Payment;
use App\Repository\PaymentRepository;
use App\Repository\UserRepository;
use App\Response\PaymentResponse;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;

/**
 * @Route("/payment", name="payment")
 * @IsGranted("ROLE_USER")
 */
class PaymentController extends AbstractController
{
    /** @var PaymentResponse */
    private $paymentResponse;

    /**
     * PaymentController constructor.
     *
     * @param PaymentResponse $paymentResponse
     */
    public function __construct(PaymentResponse $paymentResponse)
    {
        $this->paymentResponse = $paymentResponse;
    }

    /**
     * @Route(methods={"POST"})
     *
     * @param Request $request
     * @param ValidatorInterface $validator
     * @param EntityManagerInterface $em
     *
     * @return JsonResponse
     * @throws \Exception
     */
    public function create(Request $request,
                           ValidatorInterface $validator,
                           EntityManagerInterface $em,
                           UserRepository $userRepository)
    {
        [
            'year' => $year,
            'sum' => $sum,
            'note' => $note,
            'uid' => $uid
        ] = json_decode($request->getContent(), true);

        $user = $userRepository->find($uid) ?? $this->getUser();

        $payment = new Payment();
        $payment->setYear($year);
        $payment->setSum($sum);
        $payment->setNote($note ?? null);
        $payment->setDate(new \DateTime());
        $payment->setUser($user);

        $violations = $validator->validate($payment);
        $messages = [];
        if (0 !== count($violations)) {
            foreach ($violations as $violation) {
                $messages[] = $violation->getMessage();
            }
        } else {
            $em->persist($payment);
            $em->flush();
        }

        $response = $this->paymentResponse->getResponse(
            $user->getPayments()->toArray(),
            $this->getUser() !== null,
            []
        );

        return $this->json($response);
    }

    /**
     * @Route(methods={"GET"})
     *
     * @param Request $request
     * @param PaymentRepository $repository
     * @param UserRepository $userRepository
     *
     * @return JsonResponse
     */
    public function read(Request $request, PaymentRepository $repository, UserRepository $userRepository)
    {
        $filters = json_decode($request->query->get('filter', ''), true);

        if (isset($filters['uid'])) {
            $user = $userRepository->find($filters['uid']);
            $payments = $repository->findByUser($user) ?? null;
        } else if (isset($filters['year'])) {
            $payments = $repository->findByUserAndYear($this->getUser(), $filters['year']) ?? null;
        } else {
            $payments = $repository->findByUser($this->getUser()) ?? null;
        }
        $isLogged = $this->getUser() !== null;
        $response = $this->paymentResponse->getResponse($payments, $isLogged, [], []);

        return $this->json($response);
    }

    /**
     * @Route(methods={"PUT"})
     *
     * @param Request $request
     * @param PaymentRepository $paymentRepository
     * @param ValidatorInterface $validator
     * @param EntityManagerInterface $em
     *
     * @return JsonResponse
     *
     * @throws \Exception
     */
    public function update(
        Request $request,
        PaymentRepository $paymentRepository,
        ValidatorInterface $validator,
        EntityManagerInterface $em)
    {
        [
            'id' => $id, 'year' => $year, 'sum' => $sum, 'note' => $note, 'date' => $date,
        ] = array_merge(
            ['id' => null, 'year' => null, 'sum' => null, 'note' => null, 'date' => null],
            json_decode($request->getContent(), true)
        );

        $payment = $paymentRepository->find($id);
        if (null === $payment) {
            $response = $this->paymentResponse->getResponse(
                [],
                $this->getUser() !== null,
                [],
                [sprintf('Payment (%s) not found', $id)]
            );

            return $this->json($response);
        }

        $payment->setYear($year ?? $payment->getYear());
        $payment->setSum($sum ?? $payment->getSum());
        $payment->setNote($note ?? $payment->getNote());
        $payment->setDate(new \DateTime($date) ?? $payment->getDate());

        $violations = $validator->validate($payment);
        $messages = [];
        if (0 !== count($violations)) {
            foreach ($violations as $violation) {
                $messages[] = $violation->getMessage();
            }
        } else {
            $em->persist($payment);
            $em->flush();
        }
        $payment->getUser()->getPayments();
        $response = $this->paymentResponse->getResponse(
            $payment->getUser()->getPayments()->toArray(),
            $this->getUser() !== null,
            []);

        return $this->json($response);
    }

    /**
     * @Route(methods={"DELETE"})
     *
     * @param Request $request
     * @param PaymentRepository $paymentRepository
     * @param EntityManagerInterface $em
     *
     * @return JsonResponse
     */
    public function delete(Request $request, PaymentRepository $paymentRepository, EntityManagerInterface $em)
    {
        ['id' => $id] = json_decode($request->getContent(), true);

        $payment = $paymentRepository->find($id);
        if (null === $payment) {
            $response = $this->paymentResponse->getResponse(
                [],
                $this->getUser() !== null,
                [],
                [sprintf('News (%s) not found', $id)]
            );

            return $this->json($response);
        }

        $em->remove($payment);
        $em->flush();

        $response = $this->paymentResponse->getResponse(
            $payment->getUser()->getPayments()->toArray(),
            $this->getUser() !== null,
            []);

        return $this->json($response);
    }
}
