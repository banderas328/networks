<?php

// # CreatePaymentSample
//
// This sample code demonstrate how you can process
// a direct credit card payment. Please note that direct 
// credit card payment and related features using the 
// REST API is restricted in some countries.
// API used: /v1/payments/payment
@session_start();
require __DIR__ . '/bootstrap.php';
use PayPal\Api\Address;
use PayPal\Api\Amount;
use PayPal\Api\Details;
use PayPal\Api\Item;
use PayPal\Api\ItemList;
use PayPal\Api\CreditCard;
use PayPal\Api\Payer;
use PayPal\Api\Payment;
use PayPal\Api\FundingInstrument;
use PayPal\Api\Transaction;

// ### CreditCard
// A resource representing a credit card that can be
// used to fund a payment.
$addr = new Address();
$addr->setLine1($_SESSION['payment']['address_line1'])
    ->setLine2($_SESSION['payment']['address_line2'])
    ->setCity($_SESSION['payment']['city'])
    ->setState($_SESSION['payment']['state'])
    ->setPostalCode($_SESSION['payment']['postal_code'])
    ->setCountryCode($_SESSION['payment']['country'])
    ->setPhone($_SESSION['payment']['phone']);

$card = new CreditCard();
$card->setType($_SESSION['payment']['card'])
    ->setNumber($_SESSION['payment']['card_number'])
    ->setExpireMonth($_SESSION['payment']['expire_month'])
    ->setExpireYear($_SESSION['payment']['expire_year'])
    ->setCvv2($_SESSION['payment']['cvv'])
    ->setFirstName($_SESSION['payment']['first_name'])
    ->setLastName($_SESSION['payment']['last_name'])
    ->setBillingAddress($addr);

// ### FundingInstrument
// A resource representing a Payer's funding instrument.
// For direct credit card payments, set the CreditCard
// field on this object.
$fi = new FundingInstrument();
$fi->setCreditCard($card);

// ### Payer
// A resource representing a Payer that funds a payment
// For direct credit card payments, set payment method
// to 'credit_card' and add an array of funding instruments.
$payer = new Payer();
$payer->setPaymentMethod("credit_card")
    ->setFundingInstruments(array($fi));

// ### Itemized information
// (Optional) Lets you specify item wise
// information
$item1 = new Item();
$item1->setName('netwroks coins')
    ->setDescription('networks service coins')
    ->setCurrency('USD')
    ->setQuantity($_SESSION['payment']['quantity'])
    ->setTax(0)
    ->setPrice(1);

$itemList = new ItemList();
$itemList->setItems(array($item1));





// ### Transaction
// A transaction defines the contract of a
// payment - what is the payment for and who
// is fulfilling it.
$details = new Details();
$details->setShipping(0)
    ->setTax(0)
    ->setSubtotal($_SESSION['payment']['quantity']);

// ### Amount
// Lets you specify a payment amount.
// You can also specify additional details
// such as shipping, tax.
$amount = new Amount();
$amount->setCurrency("USD")
    ->setTotal($_SESSION['payment']['quantity'])
    ->setDetails($details);

$transaction = new Transaction();
$transaction->setAmount($amount)
    ->setItemList($itemList)
    ->setDescription("Payment description")
    ->setInvoiceNumber(uniqid());

// ### Payment
// A Payment Resource; create one using
// the above types and intent set to sale 'sale'
$payment = new Payment();
$payment->setIntent("sale")
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
  //  ResultPrinter::printError('Create Payment Using Credit Card. If 500 Exception, try creating a new Credit Card using <a href="https://ppmts.custhelp.com/app/answers/detail/a_id/750">Step 4, on this link</a>, and using it.', 'Payment', null, $request, $ex);
    $_SESSION["last_payment"]['error'] = true;
    $_SESSION["last_payment"]['text'] = 'please check youre data';
    return;
}

//ResultPrinter::printResult('Create Payment Using Credit Card', 'Payment', $payment->getId(), $request, $payment);
$_SESSION["last_payment"]['error'] = false;
$_SESSION["last_payment"]['id'] = $payment->getId();



