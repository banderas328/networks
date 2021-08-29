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
        $userSettings = $this->getSettingsTable()->getCurrentUserSettings();
        $userSettings = $userSettings->toArray();
        if(isset($userSettings[0]['id'])) {
            $form->setData($userSettings[0]);
        }
        if ($request->isPost()) {
            $form->setInputFilter($settings->getInputFilter());
            $data = array_merge_recursive(
                $userSettings,
                $request->getPost()->toArray(),
                $request->getFiles()->toArray()
            );

            if ($form->isValid()) {
                  $this->getSettingsTable()->saveGeneralSettings($data);
            }
            else {
                die("error");
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