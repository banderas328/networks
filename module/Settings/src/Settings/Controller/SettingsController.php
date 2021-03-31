<?php
namespace Settings\Controller;


use Settings\Form\SettingsForm;
//use Zend\Mvc\Controller\AbstractActionController;
//use Zend\View\Model\ViewModel;
use Files\Model\Files;
use Settings\Model\Settings;
//use Zend\Session\Container;
use Preloader;
use Preloader\Controller;


class SettingsController extends Controller\preloaderController
{
    protected $settingsTable;
    public function saveSettingsAction()
    {
        $this->layout('layout/only_form');
        $form = new SettingsForm();
        $form->get('submit')->setValue('Save Settings');
        $request = $this->getRequest();
        $settings = new Settings();
        $userSettings = $this->getSettingsTable()->getCurrentUserSettings($settings->getAdapter());
        $userSettings = $userSettings->toArray();
     //   var_dump($userSettings);
        if(isset($userSettings[0]['id'])) {
            unset($userSettings[0]['id']);
            unset($userSettings[0]['avatar']);
            $form->setData($userSettings[0]);
        }

   
        if ($request->isPost()) {
            $form->setInputFilter($settings->getInputFilter());
            $post = array_merge_recursive(
                $request->getPost()->toArray(),
                $request->getFiles()->toArray()
            );
            var_dump($post);

            $form->setData($post);
         
            if ($form->isValid()) {
                  $data = $form->getData();
                  $settings->exchangeArray($data);
                  $this->getSettingsTable()->saveGeneralSettings($data,$settings->getAdapter());
            }
        }
        return array('form' => $form);
    }



    public function getSettingsTable()
    {
        if (!$this->settingsTable) {
           // $sm = $this->getServiceLocator();
          //  $this->settingsTable = $sm->get('Settings\Model\SettingsTable');
            $this->settingsTable = new \Settings\Model\SettingsTable;
        }
        return $this->settingsTable;
    }
}