<?php

namespace App\Repository;

use App\Entity\Payment;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Doctrine\ORM\NonUniqueResultException;

/**
 * @method Payment|null find($id, $lockMode = null, $lockVersion = null)
 * @method Payment|null findOneBy(array $criteria, array $orderBy = null)
 * @method Payment[]    findAll()
 * @method Payment[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @method Payment[]    findByUser(User $user)
 */
class PaymentRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Payment::class);
    }

    /**
     * @param User $user
     * @param string $year
     *
     * @return mixed
     */
    public function findByUserAndYear(User $user, string $year)
    {
        return $this->createQueryBuilder('p')
            ->join('p.user', 'u')
            ->where('u = :user')
            ->andWhere('p.year = :year')
            ->orderBy('p.year', 'desc')
            ->setParameter('user', $user)
            ->setParameter('year', $year)
            ->getQuery()
            ->getResult()
        ;
    }
}
