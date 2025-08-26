<?php

namespace Frames\Model;

use Zend\InputFilter\Factory as InputFactory;
use Zend\InputFilter\InputFilter;
use Zend\InputFilter\InputFilterAwareInterface;
use Zend\InputFilter\InputFilterInterface;
use Zend\Session\Container;
use Zend\Config\Config;
use Zend\Config\Factory;

class FramesTable
{

    protected $tableGateway;
    protected $adapter;

    public function __construct()
    {
        $config = new Config(Factory::fromFile('config/autoload/global.php'), true);
        $adapter = new \Zend\Db\Adapter\Adapter (array(
            'driver' => $config->database->driver,
            'dsn' => $config->database->dsn,
            'database' => $config->database["params"]->database,
            'username' => $config->database["params"]->username,
            'password' => $config->database["params"]->password,
        ));
        $this->tableGateway = new \Zend\Db\TableGateway\TableGateway("frames", $adapter);
        $this->adapter = $adapter;
    }

    public function createFrame($request)
    {
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $url = $request->getPost()->frame_url;
        $image = $request->getPost()->file;
        $name = $request->getPost()->frame_name;
        session_start();
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $path = "userfiles/" . $userId;
        $fileName = uniqid();
        $file = $path . '/' . $userId . $fileName . $_FILES['file']['name'];
        move_uploaded_file($_FILES['file']['tmp_name'], getcwd() . "/public/" . $file);
        $data = ["url" => $url, "image" => $file, "name" => $name, "user_id" => $userId];
        $this->tableGateway->insert($data);
        return true;
    }

    public function getFrames()
    {
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $sql = "SELECT * FROM `frames`   WHERE frames.user_id='" . $userId . "'";
        $resultSet = $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
        $frames = $resultSet->toArray();
        return $frames;
    }

    public function daleteFrame($request)
    {
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $frameId = $request->getPost()->frame_id;;
        $frame = $this->tableGateway->select(['id' => $frameId, 'user_id' => $userId]);
        $frameImage =  $frame->toArray()[0]["image"];
        @unlink($_SERVER["DOCUMENT_ROOT"]."/".$frameImage);
        $this->tableGateway->delete(["id" => $frameId]);
    }


}


