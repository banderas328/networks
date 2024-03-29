<?php
// # Authorize Payment
// This sample code demonstrates how you can authorize a payment.
// API used: /v1/payments/authorization
// https://developer.paypal.com/webapps/developer/docs/integration/direct/capture-payment/#authorize-the-payment

require __DIR__ . '/bootstrap.php';

use PayPal\Api\Address;
use PayPal\Api\CreditCard;
use PayPal\Api\FundingInstrument;
use PayPal\Api\Payer;
use PayPal\Api\Amount;
use PayPal\Api\Transaction;
use PayPal\Api\Payment;

// The biggest difference between creating a payment, and authorizing a payment is to set the intent of payment
// to correct setting. In this case, it would be 'authorize'
$addr = new Address();
$addr->setLine1("Voloha Street")
    ->setLine2("House 6 flat 5")
    ->setCity("Moskov")
    ->setState("MOSKOV")
    ->setPostalCode("220036")
    ->setCountryCode("RU")
    ->setPhone("716-298-1822");

$card = new CreditCard();
$card->setType("visa")
    ->setNumber("4485522697893005")
    ->setExpireMonth("11")
    ->setExpireYear("2019")
    ->setCvv2("012")
    ->setFirstName("Joe")
    ->setLastName("Shopper")
    ->setBillingAddress($addr);

$fi = new FundingInstrument();
$fi->setCreditCard($card);

$payer = new Payer();
$payer->setPaymentMethod("credit_card")
    ->setFundingInstruments(array($fi));

$amount = new Amount();
$amount->setCurrency("USD")
    ->setTotal(1);

$transaction = new Transaction();
$transaction->setAmount($amount)
    ->setDescription("Payment description.");

$payment = new Payment();

// Setting intent to authorize creates a payment
// authorization. Setting it to sale creates actual payment
$payment->setIntent("authorize")
    ->setPayer($payer)
    ->setTransactions(array($transaction));

// For Sample Purposes Only.
$request = clone $payment;

// ### Create Payment
// Create a payment by calling the payment->create() method
// with a valid ApiContext (See bootstrap.php for more on `ApiContext`)
// The return object contains the state.
try {
    $payment->create($apiContext);
} catch (Exception $ex) {
    ResultPrinter::printError('Authorize a Payment', 'Authorized Payment', $payment->getId(), $request, $ex);
    exit(1);
}

ResultPrinter::printResult('Authorize a Payment', 'Authorized Payment', $payment->getId(), $request, $payment);

$transactions = $payment->getTransactions();

$relatedResources = $transactions[0]->getRelatedResources();
$authorization = $relatedResources[0]->getAuthorization();
die();
return $authorization;
