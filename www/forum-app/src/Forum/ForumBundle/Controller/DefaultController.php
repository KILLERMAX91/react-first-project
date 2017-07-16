<?php

namespace Forum\ForumBundle\Controller;


use Forum\ForumBundle\Parent\ControllerParent;

/**
 * Class DefaultController
 * @package Forum\ForumBundle\Controller
 */
class DefaultController extends ControllerParent
{

    public function getApiAnonymousDemosAction(){

        $data = array("hello" => "world");
        $view = $this->view($data);
        return $this->handleView($view);
    }

    public function getDemosAction()
    {
        $data = array("hello" => "world");
        $view = $this->view($data);
        return $this->handleView($view);
    }
}
