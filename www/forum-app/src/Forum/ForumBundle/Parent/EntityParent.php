<?php
namespace Forum\ForumBundle\Parent;

use Doctrine\ORM\Mapping as ORM;

class EntityParent
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     *
     * @var integer
     */
    protected $id;

    /**
     * @ORM\Column(name="date_created", type="datetime")
     * @var \DateTime
     */
    protected $dateCreated;

    /**
     * @ORM\Column(name="date_updated", type="datetime")
     * @var \DateTime
     */
    protected $dateUpdated;

    /**
     *
     * @ORM\PrePersist
     * @ORM\PreUpdate
     */
    public function updatedTimestamps()
    {


        if($this->dateCreated == null)
        {
            $this->dateCreated = new \DateTime();
        }

        $this->dateUpdated = new \DateTime();

    }

    /**
     * @return integer
     */
    public function getId(){
        return $this->id;
    }

}