<?php

namespace App\Repository;

use App\Entity\Event;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Event|null find($id, $lockMode = null, $lockVersion = null)
 * @method Event|null findOneBy(array $criteria, array $orderBy = null)
 * @method Event[]    findAll()
 * @method Event[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EventRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Event::class);
    }

    /**
     * @param $month
     * @param $chronicle
     * @return Event[] Returns an array of Event objects
     *
     * @throws \Exception
     */
    public function findByMonth($month, $chronicle)
    {
        $date = new \DateTime(
            sprintf('%s-%s-01 00:00:00', date('Y'), $month)
        );

        $a = $this->createQueryBuilder('e')
            ->andWhere('e.date >= :date1')
            ->andWhere('e.date <= :date2')
            ->setParameter('date1', $date)
            ->setParameter('date2', new \DateTime($date->format('Y-m-t 00:00:00')))
            ->orderBy('e.date', 'ASC')
        ;

        if (null !== $chronicle) {
            $a->andWhere('e.chronicle = :chronicle')
                ->setParameter('chronicle', $chronicle);
        }

        return $a->getQuery()->getResult();
    }

    /*
    public function findOneBySomeField($value): ?Event
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
