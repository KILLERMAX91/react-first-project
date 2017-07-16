<?php


namespace Forum\ForumBundle\Parent;

use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\View\View;
use Doctrine\ORM\EntityManagerInterface;

class ControllerParent extends FOSRestController
{
    /**
     * @return EntityManagerInterface
     */
    public function getEm(){
        return $this->get('doctrine')->getManager();
    }
    /**
     * @param View $view
     * @return View|\Symfony\Component\HttpFoundation\Response
     */
    protected function handleView(View $view){

        $view = parent::handleView($view);

        return $view;
    }
}