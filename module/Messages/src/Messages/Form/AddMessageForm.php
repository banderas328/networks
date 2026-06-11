<?php
namespace  Messages\Form;

use Zend\Form\Form;
use Zend\Form\Element;

class MessagesForm extends Form
{
    public  $adapter;
    public function __construct($name = null)
    {
        // we want to ignore the name passed
        parent::__construct('message');
        $this->setAttribute('method', 'post');
		$this->add(array(
			'name' => 'text',
			'attributes' => array(
				'type' => 'text',
			),
			'options' => array(
				'label' => 'Message',
			),
		));
        $this->add(array(
            'name' => 'submit',
            'attributes' => array(
                'type' => 'submit',
                'value' => 'Send Message',
                'class' => "send_message"
            ),
        ));

    }
}