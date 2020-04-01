<?php

namespace App\Repository;

use App\Entity\News;
use App\ValueObject\Filter;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\Criteria;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method News|null find($id, $lockMode = null, $lockVersion = null)
 * @method News|null findOneBy(array $criteria, array $orderBy = null)
 * @method News[]    findAll()
 * @method News[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class NewsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, News::class);
    }

    /**
     * @param Filter $filter
     *
     * @return News[]|null
     */
    public function search(Filter $filter)
    {
        $qb = $this->createQueryBuilder('n')
            ->join('n.author', 'a')
            ->join('n.tags', 't')
        ;

        if (null !== ($news = $filter->news)) {
            $qb->andWhere('n.id = :id')
                ->setParameter('id', $news->getId())
            ;
        }
        if (null !== ($dateMin = $filter->dateMin)) {
            $qb->andWhere('n.date > :dateMin')
                ->setParameter('dateMin', $dateMin)
            ;
        }
        if (null !== ($dateMax = $filter->dateMax)) {
            $qb->andWhere('n.date < :dateMax')
                ->setParameter('dateMax', $dateMax)
            ;
        }
        if (null !== ($user = $filter->user)) {
            $qb->andWhere('a = :user')
                ->setParameter('user', $user)
            ;
        }
        if (null !== ($tags = $filter->tags)) {
            $qb->andWhere('t IN (:tags)')
                ->setParameter('tags', $tags)
            ;
        }

        return $qb->getQuery()->getResult();
    }
}
