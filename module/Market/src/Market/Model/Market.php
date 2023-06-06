<?php
namespace Market\Model;

use Zend\InputFilter\Factory as InputFactory;     // <-- Add this import
use Zend\InputFilter\InputFilter;                 // <-- Add this import
use Zend\InputFilter\InputFilterAwareInterface;   // <-- Add this import
use Zend\InputFilter\InputFilterInterface;

class Market
{
    public $id;
    public $user_id;
    public $file_id;
    protected $cost;
    protected $date;

    public function exchangeArray($data)
    {
        $this->id     = (isset($data['id'])) ? $data['id'] : null;
        $this->user_id = (isset($data['user_id'])) ? $data['user_id'] : null;
        $this->file_id  = (isset($data['file_id'])) ? $data['file_id'] : null;
        $this->cost  = (isset($data['cost'])) ? $data['cost'] : null;
        $this->date  = (isset($data['date'])) ? $data['date'] : null;
    }
    public function getArrayCopy()
    {
        return get_object_vars($this);
    }

    public function setInputFilter(InputFilterInterface $inputFilter)
    {
        throw new \Exception("Not used");
    }

    public function getInputFilter()
    {



        return $this->inputFilter;
    }
}