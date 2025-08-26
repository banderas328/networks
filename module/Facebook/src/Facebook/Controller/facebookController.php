<?php
namespace Facebook\Controller;
include "FacebookRequest.php";
include "GraphUser.php";
include "FacebookRequestException.php";
include "FacebookSession.php";
include "FacebookRedirectLoginHelper.php";
use Facebook\Controller\FacebookRedirectLoginHelper;
use Zend\Mvc\Controller\AbstractActionController;
use Zend\Stdlib\RequestInterface as Request;
use Zend\Session\Container;
use Preloader;
use Preloader\Controller;
use Zend\View\Model\ViewModel;
use Zend\I18n\Translator\Translator;
use Facebook\Controller\FacebookRequest;
use Facebook\Controller\GraphUser;
use Facebook\Controller\FacebookRequestException;
use Facebook\Controller\FacebookSession;
//use Facebook\FacebookSession;


class  facebookController extends AbstractActionController {


    function __construct() {
        //not

    }


    public function indexAction(){
        //require_once 'cgi/facebook/src/facebook.php';
//        include_once "facebookApiController.php";
//        include_once "basefacebookController.php";
//        $facebook = new FacebookApi(array(
//            'appId'  => '1421006771545109',
//            'secret' => '86b7fb92856f8b35eeb190814153a22e',
//        ));
        FacebookSession::setDefaultApplication('1421006771545109', '86b7fb92856f8b35eeb190814153a22e');
// If you already have a valid access token:
        $session = new FacebookSession('access-token');
// If you're making app-level requests:
        $session = FacebookSession::newAppSession();
// To validate the session:
        try {
            $session->validate();
        } catch (FacebookRequestException $ex) {
            // Session not valid, Graph API returned an exception with the reason.
            echo $ex->getMessage();
        } catch (\Exception $ex) {
            // Graph API returned info, but it may mismatch the current app or have expired.
            echo $ex->getMessage();
        }


        if($session) {
            try {

                $user_profile = (new FacebookRequest(
                    $session, 'GET', '/100002460515272'
                ))->execute()->getGraphObject(GraphUser::className());
                echo "Name: " . $user_profile->getName();

            } catch(FacebookRequestException $e) {

                echo "Exception occured, code: " . $e->getCode();
                echo " with message: " . $e->getMessage();
            }
            try {
                $friendsList = (new FacebookRequest(
                    $session->getAccessToken(), 'GET', '/100002460515272/friendlists'
                ))->execute()->getGraphObject(GraphUser::className());

            } catch(FacebookRequestException $e) {
                echo "Exception occured, code: " . $e->getCode();
                echo " with message: " . $e->getMessage();

            }

        }
    }


    public function loginAction(){
        session_start();
        $actual_link = urlencode("http://".$_SERVER['HTTP_HOST']);
        $scopes = urlencode(
            'public_profile,user_friends,email,user_about_me,user_actions.books,user_actions.fitness
            ,user_actions.music,user_actions.news,user_actions.video,user_birthday,user_education_history,user_events,user_groups,
            ,user_games_activity,user_hometown,user_likes,user_location,user_photos,user_posts,user_relationships,user_relationship_details,
            user_religion_politics,user_status,user_tagged_places,user_videos,user_website,user_work_history,read_insights,read_mailbox,
            read_page_mailboxes,read_stream,manage_notifications,publish_actions'

        ) ;
        $url = 'https://www.facebook.com/v2.3/dialog/oauth?client_id=612215468881429&redirect_uri='.$actual_link."&scope=".$scopes;
            header('Location:'.$url  );
        die();
      }




























}