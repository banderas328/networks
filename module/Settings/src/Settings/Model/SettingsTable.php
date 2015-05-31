<?php
namespace Settings\Model;

use Zend\Db\TableGateway\TableGateway;
use Zend\Session\Container;
use Zend\Db\Sql\Sql;
//use Zend\Db\Adapter\Driver\ResultInterface;
//use Zend\Db\ResultSet\ResultSet;



class SettingsTable
{
    protected $tableGateway;

    public function __construct(TableGateway $tableGateway)
    {
        $this->tableGateway = $tableGateway;
    }


    public function saveGeneralSettings($settings,$adapter)
    {
        $user_session = new Container('user');
        $userId = $user_session->user->id;

        $data = array(
            'sex' => $settings['sex'],
            'birthdate' => $settings['birthdate'],
            'first_name' => $settings['first_name'],
            'second_name' => $settings['second_name'],
            'job' => $settings['job'],
            'country' => $settings['country'],
            'city' => $settings['city'],
            'about' => $settings['about'],
            'skype' => $settings['skype'],
            'phone' => $settings['phone'],
            'site' => $settings['site'],
            'visibility' => $settings['visibility'],
        );
        if($settings['avatar']['tmp_name']) {
            $sql = new Sql($adapter, 'user_settings');
            $select = $sql->select();
            $select->where(array('user_id' => $userId));
            $selectString = $sql->getSqlStringForSqlObject($select);
            $results = $adapter->query($selectString, $adapter::QUERY_MODE_EXECUTE);
             $results = $results->toArray();
            if(isset($results[0]['avatar'])) {
                @unlink(getcwd(). "/public".$results[0]['avatar']);
            }

            $path =  "/img/avatars";
            $fileName = uniqid();
            $file = $path. '/' .$fileName;
            move_uploaded_file($settings['avatar']['tmp_name'], getcwd(). "/public/". $file.$settings['avatar']['name']);
            if($this->is_image(getcwd(). "/public/".$file.$settings['avatar']['name'])) {
                exec("convert ".getcwd(). "/public/".$file.$settings['avatar']['name']." 50% ".getcwd(). "/public/".$file.$settings['avatar']['name']);
                $data['avatar'] = $file.$settings['avatar']['name'];
            }
            else {
                @unlink(getcwd(). "/public/".$file.$settings['avatar']['name']);
            }

        }
        $sql = new Sql($adapter);
        $select = $sql->select();
        $select->from('user_settings');
        $select->where(array('user_id' => $userId));
        $selectString = $sql->getSqlStringForSqlObject($select);
        $results = $adapter->query($selectString, $adapter::QUERY_MODE_EXECUTE);
        if ($results->toArray()) {
            $this->tableGateway->update($data, array('user_id' => $userId));
        } else {
            $data['user_id'] = $userId;
            $this->tableGateway->insert($data);
        }
    return true;
    }
    public function getCurrentUserSettings($adapter){
        $user_session = new Container('user');
        $userId = $user_session->user->id;
        $sql = new Sql($adapter, 'user_settings');
        $select = $sql->select();
        $select->where(array('user_id' => $userId));
        $selectString = $sql->getSqlStringForSqlObject($select);
        $results = $adapter->query($selectString, $adapter::QUERY_MODE_EXECUTE);
        return $results;
    }

 public   function is_image($path)
    {
        $a = getimagesize($path);
        $image_type = $a[2];

        if(in_array($image_type , array(IMAGETYPE_GIF , IMAGETYPE_JPEG ,IMAGETYPE_PNG , IMAGETYPE_BMP)))
        {
            return true;
        }
        return false;
    }




}