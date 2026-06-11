<?php
namespace  Files\Form;

use Zend\Form\Form;
use Zend\Form\Element;

class FilesForm extends Form
{
    public  $adapter;
    public function __construct($name = null)
    {
        // we want to ignore the name passed
        parent::__construct('user');
        $this->setAttribute('method', 'post');
        $file = new Element\File('file');
        $file->setLabel('File Upload')
            ->setAttribute('id', 'file');
        $this->add($file);
		$this->add(array(
			'name' => 'file_title',
			'attributes' => array(
				'type' => 'text',
			),
			'options' => array(
				'label' => 'File Title',
			),
		));
        $this->add(array(
            'name' => 'submit',
            'attributes' => array(
                'type' => 'submit',
                'value' => 'SaveSettings',
                'id' => 'general_settings_button',
            ),
        ));

    }
}