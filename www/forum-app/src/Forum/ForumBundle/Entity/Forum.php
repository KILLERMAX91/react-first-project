<?php


namespace Forum\ForumBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Forum\ForumBundle\Parent\EntityParent;
use Forum\UserBundle\Entity\User;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * Class Forum
 * @package ForumBundle\Entity
 * @ORM\Entity
 * @ORM\Table(name="forum")
 */
class Forum extends EntityParent
{
    public function __construct()
    {
        $this->commentaires = new ArrayCollection();
    }

    /**
     * @ORM\Column(name="sujet", type="string", length=50)
     */
    private $sujet;


    /**
     * @ORM\OneToMany(targetEntity="Commentaire", mappedBy="forum")
     * @var ArrayCollection
     */
    private $commentaires;

    /**
     * @ORM\ManyToOne(targetEntity="Forum\UserBundle\Entity\User", inversedBy="forums")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     * @var User
     */
    private $user;

    /**
     * @return User
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * @param User $user
     */
    public function setUser(User $user)
    {
        $this->user = $user;
    }

    /**
     * @return mixed
     */
    public function getSujet()
    {
        return $this->sujet;
    }

    /**
     * @param mixed $sujet
     */
    public function setSujet($sujet)
    {
        $this->sujet = $sujet;
    }

    /**
     * @return mixed
     */
    public function getCommentaires()
    {
        return $this->commentaires;
    }

    /**
     * @param mixed $commentaires
     */
    public function setCommentaires($commentaires)
    {
        $this->commentaires = $commentaires;
    }



}