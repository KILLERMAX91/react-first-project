<?php

namespace Forum\UserBundle\Entity;
use Forum\ForumBundle\Entity\Forum;
use Forum\ForumBundle\Entity\Commentaire;
use FOS\UserBundle\Model\User as BaseUser;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * Class User
 * @package UserBundle\Entity
 * @ORM\Entity(repositoryClass="Forum\UserBundle\Entity\Repository\UserRepository")
 * @ORM\Table(name="user")
 */
class User extends BaseUser
{
    public function __construct(){
        parent::__construct();

        $this->commentaires = new ArrayCollection();
        $this->forums = new ArrayCollection();
    }
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @ORM\OneToMany(targetEntity="Forum\ForumBundle\Entity\Commentaire", mappedBy="user")
     * @var ArrayCollection
     */
    private $commentaires;

    /**
     * @ORM\OneToMany(targetEntity="Forum\ForumBundle\Entity\Forum", mappedBy="user")
     * @var ArrayCollection
     */
    private $forums;

    /**
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }




}