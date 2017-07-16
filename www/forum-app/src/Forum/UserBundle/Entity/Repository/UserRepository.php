<?php

namespace Forum\UserBundle\Entity\Repository;

use Doctrine\ORM\EntityRepository;
class UserRepository extends EntityRepository
{
    /**
     * Cette méthode retourne le nombre d'utilisateur
     * @return int
     */
    public function countUser(){

        $qb = $this->createQueryBuilder('u');
        $qb->select('count(u)');

        return $qb->getQuery()->getSingleScalarResult();
    }
}