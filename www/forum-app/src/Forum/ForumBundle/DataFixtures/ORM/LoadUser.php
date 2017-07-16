<?php
namespace Forum\ForumBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use Forum\UserBundle\Entity\User;

class LoadUser extends AbstractFixture implements  OrderedFixtureInterface
{

    const MAIL = 'mail';
    const PASSWORD = 'password';
    const USERNAME = 'username';
    /**
     * Load data fixtures with the passed EntityManager
     *
     * @param ObjectManager $manager
     */
    public function load(ObjectManager $manager)
    {
        $datas = array(
            array(
                self::MAIL=>'admin@admin.fr',
                self::USERNAME=>'admin',
                self::PASSWORD=>'admin'
            ),
            array(
                self::MAIL=>'test@test.fr',
                self::PASSWORD=>'123456'
            ),
            array(
                self::MAIL=>'test2@test.fr',
                self::PASSWORD=>'123456'
            )
        );

        foreach($datas as $data){
            $user = new User();
            $user->setPlainPassword($data[self::PASSWORD]);
            $user->setEmail($data[self::MAIL]);

            if(!isset($data[self::USERNAME])){
                $user->setUsername($data[self::MAIL]);
            }else{
                $user->setUsername($data[self::USERNAME]);
            }

            $user->setEnabled(true);

            $manager->persist($user);
            $this->addReference($data[self::MAIL], $user);
        }
        $manager->flush();
    }

    /**
     * Get the order of this fixture
     *
     * @return integer
     */
    public function getOrder()
    {
        return 1;
    }
}