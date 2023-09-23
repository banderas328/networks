<?php
namespace  User\Form;

use Zend\Form\Form;

class UserRegisterForm extends Form
{
    public  $adapter;
    public function __construct($name = null)
    {
        // we want to ignore the name passed
        parent::__construct('user');
        $this->setAttribute('method', 'post');
        $this->add(array(
            'name' => 'login',
            'attributes' => array(
                'type' => 'text',
            ),
            'options' => array(
                'label' => 'Login',
            ),
        ));
        $this->add(array(
            'name' => 'email',
            'attributes' => array(
                'type' => 'text',
            ),
            'options' => array(
                'label' => 'Email',
            ),
        ));
        $this->add(array(
            'name' => 'password',
            'attributes' => array(
                'type' => 'password',
            ),
            'options' => array(
                'label' => 'Password',
            ),
        ));
        $this->add(array(
            'name' => 'confirm_password',
            'attributes' => array(
                'type' => 'password',
            ),
            'options' => array(
                'label' => 'Repeat Password',
            ),
        ));
        $this->add(array(
            'name' => 'submit',
            'attributes' => array(
                'type' => 'submit',
                'value' => 'Go',
                'id' => 'submitbutton',
            ),
        ));
    }
}