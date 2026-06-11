<?php
// # GetPaymentSample
// This sample code demonstrate how you can
// retrieve a list of all Payment resources
// you've created using the Payments API.
// Note various query parameters that you can
// use to filter, and paginate through the
// payments list.
// API used: GET /v1/payments/payments

/** @var Payment $createdPayment */
use PayPal\Api\Payment;

@session_start();

require __DIR__ . '/bootstrap.php';

// ### Retrieve payment
// Retrieve the payment object by calling the
// static `get` method
// on the Payment class by passing a valid
// Payment ID
// (See bootstrap.php for more on `ApiContext`)
//var_dump($_SESSION);
try {
    $payment = Payment::get($_SESSION['payment_id'], $apiContext);
    $_SESSION["get_payment"]['state'] = $payment->state;
    $_SESSION["get_payment"]['total'] = $payment->transactions[0]->amount->total;
    $_SESSION['get_payment']['error'] = false;
    return;
} catch (Exception $ex) {
    $_SESSION['get_payment']['error'] = true;
    return;
}
