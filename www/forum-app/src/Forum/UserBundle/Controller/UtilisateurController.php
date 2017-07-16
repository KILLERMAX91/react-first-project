<?php
namespace Forum\UserBundle\Controller;

use Forum\UserBundle\Entity\User;
use Forum\ForumBundle\Parent\ControllerParent;
use FOS\RestBundle\Controller\Annotations\Route;
use OAuth2\OAuth2;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class UtilisateurController
 * @package Forum\ForumBundle\Controller
 */
class UtilisateurController extends ControllerParent
{

    public function getApiAnonymousNbrUtilisateurAction(){
        $userRepo = $this->getEm()->getRepository(User::class);

        $data = array("total" => $userRepo->countUser()."");
        $view = $this->view($data);
        return $this->handleView($view);
    }

    /**
     * @param Request $request
     * @return \FOS\RestBundle\View\View|\Symfony\Component\HttpFoundation\Response
     */
    public function postDeconnectAction(Request $request){
        //$clientManager = $this->container->get('fos_oauth_server.client_manager.default');
        //$clientManager->findClientBy(array());

        $view = $this->view(array('hello'=>'rrr'));
        return $this->handleView($view);
    }

    public function getApiAnonymousConnectClientAction(Request $request){
        $clientManager = $this->container->get('fos_oauth_server.client_manager.default');
        $client = $clientManager->createClient();

        $client->setAllowedGrantTypes(
            array(
                OAuth2::GRANT_TYPE_USER_CREDENTIALS
            )
        );

        $clientManager->updateClient($client);

        $data = array(
            'client_id'     => $client->getPublicId(),
            'client_secret' => $client->getSecret(),
            'username'      => $request->query->get('username', null),
            'password'      => $request->query->get('password', null),
            'grant_type'    => OAuth2::GRANT_TYPE_USER_CREDENTIALS,
        );

        $view = $this->view(array('redirect'=>$this->generateUrl('fos_oauth_server_token', $data)));
        return $this->handleView($view);

        //return $this->redirect($this->generateUrl('fos_oauth_server_token', $data));
    }

}