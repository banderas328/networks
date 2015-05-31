<?php

namespace Paypal\Controller;
use Paypal\Model\Paypal;
use Paypal\Model\PaypalTable;
use Paypal\Form\PaymentForm;
use Preloader;
use Preloader\Controller;
use Zend\Session\Container;
use Zend\View\Model\ViewModel;



class  paypalController extends Controller\preloaderController
{

    protected $paypalTable;

    public function makePaymentAction(){

        $this->layout('layout/only_form');
        @session_start();
        $_SESSION['payment'] = $_POST;
        include $_SERVER["DOCUMENT_ROOT"]."/../module/Paypal/src/Paypal/PayPalLib/production/CreatePayment.php";
        unset($_SESSION['payment']);
        if($_SESSION['last_payment']['error']){
            echo $_SESSION['last_payment']['text'];
            unset($_SESSION['last_payment']);
            die();
        }
        $user_session = new Container('user');
        $userId = $user_session->user->id;
        $data = array (
            'payment_id' => $_SESSION['last_payment']['id'],
            'user_id' => $userId,
            'payment_status' => "started"

        );
        $this->getPaypalTable()->savePayment($data);
        echo "payment with id ".$_SESSION['last_payment']['id']." registred";
        unset($_SESSION['last_payment']);
        die();

    }

    public function paymentFormAction () {
        $this->layout('layout/only_form');
        $form = new PaymentForm();
        return array('form' => $form);
    }

    //как же меня это все заебало но надо дописать. ладно буду говнокодить

    public function showPaymentsAction(){
        $this->layout('layout/only_form');
        $user_session = new Container('user');
        $userId = $user_session->user->id;
        $payments = $this->getPaypalTable()->getUserPayments(array('user_id'=>$userId));
        return array('payments' => $payments);
    }

    public function getPaymentAction(){
        $this->layout('layout/only_form');
        $id = $this->getRequest()->getPost()->payment_id;
        $user_session = new Container('user');
        $userId = $user_session->user->id;
        $paypal =  new Paypal();
        $payment = $this->getPaypalTable()->getPayment(array('id' => $id,'user_id' => $userId),$paypal->getAdapter());
         if(!empty($payment)) {
             @session_start();
            // var_dump($payment);
             $_SESSION['payment_id'] = $payment[0]['payment_id'];
             $paymentId = $_SESSION['payment_id'];
             include $_SERVER["DOCUMENT_ROOT"]."/../module/Paypal/src/Paypal/PayPalLib/production/GetPayment.php";
             //unset($_SESSION['payment_id']);
             $state = $_SESSION['get_payment']['state'];
             $total = $_SESSION['get_payment']['total'];
             if(!$_SESSION['get_payment']['error']) {
                 $data = array ('payment_id' =>  $_SESSION['payment_id'],'total' => $total,'payment_status' => $state);
                 $this->getPaypalTable()->updatePayment($data);
             }
             unset($_SESSION['payment_id']);
             unset($_SESSION['get_payment']);
             return array("state" => $state,"payment_id" => $paymentId, 'total' => $total);
         }
        return array("state" => "error","payment_id" => "unknown payment", 'total' => 0);

    }

    public function getPaypalTable()
    {
        if (!$this->paypalTable) {
            $sm = $this->getServiceLocator();
            $this->paypalTable = $sm->get('Paypal\Model\PaypalTable');
        }
        return $this->paypalTable;
    }


}