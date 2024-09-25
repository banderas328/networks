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
        $userSettings = $this->getSettingsTable()->getCurrentUserSettings()->toArray();
        if(!empty($userSettings[0]))  $userSettings = $userSettings[0];
        $form->setData($userSettings);

        if ($request->isPost()) {
            if (!empty($userSettings)) {
                  $data = array_merge_recursive(
                    $userSettings,
                    $request->getPost()->toArray(),
                    $request->getFiles()->toArray()
                );
                  $inipath = php_ini_loaded_file();
            } else {
                $data = array_merge_recursive(
                    $request->getPost()->toArray(),
                    $request->getFiles()->toArray()
                );
            }
            $this->getSettingsTable()->saveGeneralSettings($data);
            $userSettings = $this->getSettingsTable()->getCurrentUserSettings()->toArray();
        if(!empty($userSettings[0]))  $userSettings = $userSettings[0];
       $form->setData($userSettings);
        }
        return array('form' => $form,"user_settings" => $userSettings);
    }

    public function getUserSettingsAction()
    {
        $this->layout('layout/only_form');
        $request = $this->getRequest();
        $userId = $request->getPost()->user_id;
        return ["settings" => $this->getSettingsTable()->getUserSettings($userId)];
    }


    public function getSettingsTable()
    {
        if (!$this->settingsTable) {
            $this->settingsTable = new \Settings\Model\SettingsTable;
        }
        return $this->settingsTable;
    }
}
