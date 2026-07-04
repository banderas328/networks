<?php

namespace Settings\Controller;


use Settings\Form\SettingsForm;
use Files\Model\Files;
use Settings\Model\Settings;
use Preloader;
use Preloader\Controller;
use Preloader\Model;


class SettingsApiController extends Controller\preloaderController
{
    protected $settingsTable;

    public function saveSettingsAction()
    {
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));
        $request = $this->getRequest();
        $userSettings = $this->getSettingsTable()->getCurrentUserSettings($userId)->toArray();
        if(!empty($userSettings[0]))  $userSettings = $userSettings[0];
        

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
            $this->getSettingsTable()->saveGeneralSettings($data,$userId);
            $userSettings = $this->getSettingsTable()->getCurrentUserSettings($userId)->toArray();
        if(!empty($userSettings[0]))  $userSettings = $userSettings[0];
       
        }
        echo json_encode(["user_settings" => $userSettings]);
        die();
    }

    public function getUserSettingsAction()
    {
        $this->layout('layout/only_form');
        $request = $this->getRequest();
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));
        echo json_encode (["settings" => $this->getSettingsTable()->getUserSettings($userId)]);
        return false;
    }


    public function getSettingsTable()
    {
        if (!$this->settingsTable) {
            $this->settingsTable = new \Settings\Model\SettingsTable;
        }
        return $this->settingsTable;
    }
}
