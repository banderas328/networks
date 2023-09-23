<?php

namespace Payment\Controller;
use Payment\Model\Payment;
use Payment\Model\PaymentTable;
use Payment\Model\Wallet;
use Payment\Model\WalletTable;
use Paypal\Model\Paypal;
use Paypal\Model\PaypalTable;
use Preloader;
use Preloader\Controller;
use Zend\Session\Container;
use Zend\View\Model\ViewModel;



class  paymentController extends Controller\preloaderController
{

    protected $paypalTable;
    protected $walletTable;

    public function __construct(){

    }

    public function getFinishedPaymentsAction(){

        $this->layout('layout/only_form');
        session_start();        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $payments = $this->getPaypalTable()->getUserPayments(array('user_id'=>$userId,'payment_status' => "approved"));

        return array('payments' => $payments);


    }

    public function finishPaymentAction(){
        $this->layout('layout/only_form');
        $id = $this->getRequest()->getPost()->payment_id;
        session_start();        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $paypal =  new Paypal();
        $payment = $this->getPaypalTable()->getPayment(array('id' => $id,'user_id' => $userId ,'payment_status' => 'approved'),$paypal->getAdapter());
        if(!empty($payment)) {
            @session_start();
            $paymentId = $payment[0]['payment_id'];
            $total= $payment[0]['total'];
            $wallet =  $this->getWalletTable()->getWallet(array('user_id' => $userId));
            if(isset($wallet->current()->id)) {

                $walletId = $wallet->current()->id;
                $walletBalance = $wallet->current()->balance;
                $walletBalance = $total + $walletBalance;
                $this->getWalletTable()->updateWallet(array('user_id' => $userId , 'balance' => $walletBalance ,'id' => $walletId ));
                $this->getPaypalTable()->updatePayment(array('payment_id' => $paymentId,'payment_status' => 'finished'),$paypal->getAdapter());
            }
            else {
                $walletBalance = $total;
                $this->getWalletTable()->saveWallet(array('user_id' => $userId , 'balance' => $walletBalance ));
                $this->getPaypalTable()->updatePayment(array('payment_id' => $paymentId,'payment_status' => 'finished'),$paypal->getAdapter());

            }
        }
        die();
    }

    public function getWalletAction(){
        session_start();        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $data = array("user_id" => $userId);
        $wallet =   $this->getWalletTable()->getWallet($data);
        echo $wallet;
        die();
    }

    public function getPaypalTable()
    {
        if (!$this->paypalTable) {
            $sm = $this->getServiceLocator();
            $this->paypalTable = $sm->get('Paypal\Model\PaypalTable');
        }
        return $this->paypalTable;
    }

    public function getWalletTable()
    {
        if (!$this->walletTable) {
            $sm = $this->getServiceLocator();
            $this->walletTable = $sm->get('Payment\Model\WalletTable');
        }
        return $this->walletTable;
    }




}
