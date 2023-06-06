<?php
namespace  Paypal\Form;

use Zend\Form\Form;
use Zend\Form\Element;

class PaymentForm extends Form
{
    public  $adapter;
    public function __construct($name = null)
    {
        // we want to ignore the name passed
        parent::__construct('payment');
        $this->setAttribute('method', 'post');


        $this->add(array(
            'name' => 'address_line1',
            'attributes' => array(
                'type' => 'text',
            ),
            'options' => array(
                'label' => 'Adress Line 1',
            ),
        ));
        $this->add(array(
            'name' => 'address_line2',
            'attributes' => array(
                'type' => 'text',
            ),
            'options' => array(
                'label' => 'Adress Line 2',
            ),
        ));

        $this->add(array(
            'name' => 'city',
            'attributes' => array(
                'type' => 'text',
            ),
            'options' => array(
                'label' => 'City',
            ),
        ));
        $this->add(array(
            'name' => 'state',
            'attributes' => array(
                'type' => 'text',
            ),
            'options' => array(
                'label' => 'State',
            ),
        ));
        $this->add(array(
            'name' => 'postal_code',
            'attributes' => array(
                'type' => 'text',
            ),
            'options' => array(
                'label' => 'Postal Code',
            ),
        ));
        $this->add(array(
            'name' => 'phone',
            'attributes' => array(
                'type' => 'text',
            ),
            'options' => array(
                'label' => 'Phone',
            ),
        ));
        $this->add(array(
            'name' => 'country',
            'attributes' => array(
                'type' => 'text',
            ),
            'options' => array(
                'label' => 'Country Code',
            ),
        ));

        $this->add(array(
            'name' => 'card_number',
            'attributes' => array(
                'type' => 'text',
            ),
            'options' => array(
                'label' => 'Card Number',
            ),
        ));

        $this->add(array(
            'name' => 'expire_month',
            'attributes' => array(
                'type' => 'text',
            ),
            'options' => array(
                'label' => 'Expire Month',
            ),
        ));
        $this->add(array(
            'name' => 'expire_year',
            'attributes' => array(
                'type' => 'text',
            ),
            'options' => array(
                'label' => 'Expire Year',
            ),
        ));

        $this->add(array(
            'name' => 'cvv',
            'attributes' => array(
                'type' => 'text',
            ),
            'options' => array(
                'label' => 'Cvv2',
            ),
        ));
        $this->add(array(
            'name' => 'first_name',
            'attributes' => array(
                'type' => 'text',
            ),
            'options' => array(
                'label' => 'First Name',
            ),
        ));

        $this->add(array(
            'name' => 'last_name',
            'attributes' => array(
                'type' => 'text',
            ),
            'options' => array(
                'label' => 'Last Name',
            ),
        ));
        $this->add(array(
            'name' => 'quantity',
            'attributes' => array(
                'type' => 'text',
            ),
            'options' => array(
                'label' => 'Quantity',
            ),
        ));

        $selectSex = new Element\Select('card');
        $selectSex->setLabel('Cord Type');
        $selectSex->setValueOptions(array(
            'visa' => 'Visa',
            'mastercard' => 'Master Card',

        ));
        $this->add($selectSex);


        $this->add(array(
            'name' => 'submit',
            'attributes' => array(
                'type' => 'submit',
                'value' => 'save payment',
                'id' => 'save_payment',
            ),
        ));

    }
}