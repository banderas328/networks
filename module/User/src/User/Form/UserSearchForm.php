<?php
namespace User\Form;

use Zend\Form\Form;
use Zend\Form\Element;

class UserSearchForm extends Form
{
    public $adapter;

    public function __construct($name = null)
    {
        // we want to ignore the name passed
        parent::__construct('user_search_form');
        $this->setAttribute('method', 'post');

//        $selectSex = new Element\Select('sex');
//        $selectSex->setLabel('Sex');
//        $selectSex->setValueOptions(array(
//            '0' => 'Male',
//            '1' => 'Female',
//
//        ));
//        $this->add($selectSex);



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
            'name' => 'second_name',
            'attributes' => array(
                'type' => 'text',
            ),
            'options' => array(
                'label' => 'Second Name',
            ),
        ));
        $this->add(array(
            'name' => 'job',
            'attributes' => array(
                'type' => 'text',
            ),
            'options' => array(
                'label' => 'job',
            ),
        ));
        $this->add(array(
            'name' => 'country',
            'attributes' => array(
                'type' => 'text',
            ),
            'options' => array(
                'label' => 'Country',
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
            'name' => 'phone',
            'attributes' => array(
                'type' => 'text',
            ),
            'options' => array(
                'label' => 'Phone',
            ),
        ));
        $this->add(array(
            'name' => 'site',
            'attributes' => array(
                'type' => 'text',
            ),
            'options' => array(
                'label' => 'Site',
            ),
        ));
        $selectSex = new Element\Select('visibility');
        $selectSex->setLabel('Visibility');
        $selectSex->setValueOptions(array(
            '0' => 'Visible',
            '1' => 'Closed',

        ));
        $this->add($selectSex);
        $this->add(array(
            'name' => 'submit',
            'attributes' => array(
                'type' => 'submit',
                'value' => 'Search',
                'id' => 'user_search',
            ),
        ));

    }
}