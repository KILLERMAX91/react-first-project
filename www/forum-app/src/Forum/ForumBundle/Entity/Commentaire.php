<?php
namespace Forum\ForumBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Forum\UserBundle\Entity\User;
use Forum\ForumBundle\Parent\EntityParent;

/**
 * Class Commentaire
 * @package ForumBundle\Entity
 * @ORM\Entity
 * @ORM\Table(name="commentaire")
 */
class Commentaire extends EntityParent
{
    /**
     * @ORM\Column(name="comment", type="string", length=255)
     * @var String
     */
    private $comment;

    /**
     * @ORM\ManyToOne(targetEntity="Forum", inversedBy="commentaires")
     * @ORM\JoinColumn(name="forum_id", referencedColumnName="id")
     * @var Forum
     */
    private $forum;




    /**
     * @return String
     */
    public function getComment()
    {
        return $this->comment;
    }

    /**
     * @param String $comment
     */
    public function setComment($comment)
    {
        $this->comment = $comment;
    }

    /**
     * @return mixed
     */
    public function getForum()
    {
        return $this->forum;
    }

    /**
     * @param mixed $forum
     */
    public function setForum($forum)
    {
        $this->forum = $forum;
    }



}