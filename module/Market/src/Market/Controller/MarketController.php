<?php
namespace Market\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;
use Market\Model\Market;


class MarketController extends AbstractActionController
{
    protected $marketTable;

    public function getMarketTable()
    {
        if (!$this->marketTable) {
            $sm = $this->getServiceLocator();
            $this->marketTable = $sm->get('Market\Model\MarketTable');
        }
        return $this->marketTable;
    }
}