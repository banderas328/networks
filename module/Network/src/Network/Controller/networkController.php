<?php
namespace Network\Controller;
use Network\Model\Network;
use Preloader;
use Preloader\Controller;
use Zend\Session\Container;
use Friends\Model\Friends;
use Files\Model\Files;
use Files\Model\FileSystem;
use Zend\View\Model\ViewModel;



class  networkController extends Controller\preloaderController
{

    protected $friendsTable;
    protected $networkTable;
    protected $filesystemTable;
    protected $filesTable;


    public function getFriendsTable()
    {
        if (!$this->friendsTable) {
            $sm = $this->getServiceLocator();
            $this->friendsTable = $sm->get('Friends\Model\FriendsTable');
        }
        return $this->friendsTable;
    }
    public function getNetworkTable()
    {
        if (!$this->networkTable) {
            $sm = $this->getServiceLocator();
            $this->networkTable = $sm->get('Network\Model\NetworkTable');
        }
        return $this->networkTable;
    }
    public function getFileSystemTable()
    {
        if (!$this->filesystemTable) {
            $sm = $this->getServiceLocator();
            $this->filesystemTable = $sm->get('Files\Model\FileSystemTable');
        }
        return $this->filesystemTable;
    }

    public function getFilesTable(){
        if (!$this->filesTable) {
            $sm = $this->getServiceLocator();
            $this->filesTable = $sm->get('Files\Model\FilesTable');
        }
        return $this->filesTable;

    }

    public function networkIndexAction(){
        $this->layout('layout/only_form');
        $user_session = new Container('user');
        $userId = $user_session->user->id;
        $friends = new Friends();
        $friends = $this->getFriendsTable()->getFriends($userId, $friends->getAdapter());
        if($friends) $friends = $friends->toArray();
        else $friends = false;
        return @array('friends' => $friends);
    }

    public function getNetworkPointAction(){
        $this->layout('layout/only_form');
        $request = $this->getRequest();
        $friends = new Friends();
        $user_session = new Container('user');
        $userId = $user_session->user->id;
        $isUsersFriends = $this->getFriendsTable()->isUsersFriends($userId,$request->getPost()->user_id,$friends->getAdapter());
        if(!empty($isUsersFriends->toArray())){
            $network = new Network();
            $dirs = $this->getNetworkTable()->getUserSharedDirs($request,$network->getAdapter());

            $alredyShared = $dirs['already_shared'];
            $authedDirs = implode(",",$alredyShared);
            $user_session = new Container('user');
            $user_session->user->authedDirs = $authedDirs;
            $dirs = $dirs['result'];
            return array("dirs" => $dirs->toArray(),'current_directory' => 0);
        }
        else {
            return array("dirs" => false,"error" => true,'current_directory' => 0);
        }
    }

    public function getNetworkDirectoryAction(){
        $this->layout('layout/only_form');
        $request = $this->getRequest();
        $user_session = new Container('user');
        $userId = $user_session->user->id;
        $friends = new Friends();
        $isUsersFriends = $this->getFriendsTable()->isUsersFriends($userId,$request->getPost()->user_id,$friends->getAdapter());
        if(!empty($isUsersFriends->toArray()))
        {
            $fileSystem = new FileSystem();
            $dirOptions = $this->getFileSystemTable()->getDirOptions((int) $request->getPost()->dir_key,$fileSystem->getAdapter());
            if ($dirOptions->toArray()[0]["is_public"]) {
                $childDirs = $this->getFileSystemTable()->getChildDirs($fileSystem->getAdapter(),(int) $request->getPost()->user_id, (int) $request->getPost()->dir_key);
                $childDirs[] = (int) $request->getPost()->dir_key;
                $user_session = new Container('user');
                $authedDirs  =   $user_session->user->authedDirs;
                if(isset($user_session->user->authedDirs)) {
                    $authedDirs  =   $user_session->user->authedDirs;
                }
                $dirs = explode(",", $authedDirs);
                if(!in_array($childDirs[0],$dirs)) {

                    $dirs[] =  $childDirs[0];
                }
                $authedDirs = implode(",",$dirs);
                $user_session->user->authedDirs = $authedDirs;
                $view = new ViewModel(array('dir_key'=>(int) $request->getPost()->dir_key,'user_id' => $request->getPost()->user_id));
                $view->setTemplate('network/network/networkdirectorylogin.phtml'); // path to phtml file under view folder
                return $view;
            }
            elseif($dirOptions->toArray()[0]["is_password"]) {
                if($this->isUserLogedInDirectory((int) $request->getPost()->dir_key)) {
                    $view = new ViewModel(array('dir_key'=>(int) $request->getPost()->dir_key,'user_id' => $request->getPost()->user_id));
                    $view->setTemplate('network/network/networkdirectorylogin.phtml'); // path to phtml file under view folder
                    return $view;
                }
                $view = new ViewModel(array('dir_key'=>(int) $request->getPost()->dir_key,'user_id' =>  (int) $request->getPost()->user_id));
                $view->setTemplate('network/network/password.phtml'); // path to phtml file under view folder
                return $view;
            }

        }

    }

    public function networkDirectoryLoginAction (){
        $this->layout('layout/only_form');
        $request = $this->getRequest();
        $user_session = new Container('user');
        $userId = $user_session->user->id;
        $friends = new Friends();
        $isUsersFriends = $this->getFriendsTable()->isUsersFriends($userId,$request->getPost()->user_id,$friends->getAdapter());
        if(!empty($isUsersFriends->toArray()))
        {
            $fileSystem = new FileSystem();
            $dirOptions = $this->getFileSystemTable()->getDirOptions((int) $request->getPost()->dir_key,$fileSystem->getAdapter());
            if ($dirOptions->toArray()[0]["is_password"]) {
                $logedDirectory = $this->getNetworkTable()->networkDirectoryLogin($request,$fileSystem->getAdapter());
                if($logedDirectory) {
                    $childDirs = $this->getFileSystemTable()->getChildDirs($fileSystem->getAdapter(), $logedDirectory,$request->getPost()->user_id);
                    if(isset($user_session->user->authedDirs)) {
                        $authedDirs  =   $user_session->user->authedDirs;
                        $dirs = explode(",", $authedDirs);
                    }
                    if(!isset($dirs)) $dirs = [];
                    foreach($childDirs as $dir) {
                        if(!in_array($dir,$dirs)) {
                            $dirs[] =  $dir;
                        }
                    }
                    $authedDirs = implode(",",$dirs);
                    $user_session->user->authedDirs = $authedDirs;
                }
            }

        }
        return (array("dir_key" => (int) $request->getPost()->dir_key,'user_id' => $request->getPost()->user_id));

    }

    public function getNetworkFolderAction()
    {
        $this->layout('layout/only_form');
        $request = $this->getRequest();
        $dirId = (int)$request->getPost()->dir_key;
        $userId = (int)$request->getPost()->user_id;
        $fileSystem = new FileSystem();
        $dirs = $this->getFileSystemTable()->getUserDirs($fileSystem->getAdapter(), $dirId, $userId);
        if (!$this->isUserLogedInDirectory($dirId)) {
            $filesystem = new FileSystem();
            $dirs = $this->getFileSystemTable()->getUserDirsDetails($filesystem->getAdapter(), array(0 => $dirId));
            if ($dirs->toArray()[0]["is_password"]) {
                $view = new ViewModel(array('dir_key'=>(int) $request->getPost()->dir_key,'user_id' =>  (int) $request->getPost()->user_id));
                $view->setTemplate('network/network/password.phtml'); // path to phtml file under view folder
                return $view;
            } else {
                die("access denied");

            }
        }
        $files = new Files();
        $files = $this->getFilesTable()->getDirFiles($files->getAdapter(), $dirId, $userId);
        return new ViewModel(array(
            'user_id' => $userId,
            'dirs' => $dirs,
            'current_directory' => $dirId,
            'filesInDir' => $files
        ));
    }

    public function isUserLogedInDirectory($dir) {
        $user_session = new Container('user');
        if(!isset($user_session->user->authedDirs)) return false;
        $authedDirs  =   $user_session->user->authedDirs;
        $dirs = explode(",", $authedDirs);
        if(in_array($dir,$dirs))
            return true;
        return false;
    }

    public function downloadFileAction() {
        $user_session = new Container('user');
        $userId = $user_session->user->id;
        $fileId = $this->getEvent()->getRouteMatch()->getParam('value');
        $frinendId = $this->getEvent()->getRouteMatch()->getParam('param');
        $friends = new Friends();
        $isUsersFriends = $this->getFriendsTable()->isUsersFriends($userId,$frinendId,$friends->getAdapter());
        if(!empty($isUsersFriends->toArray())) {
            $files = new Files();
            $file = $this->getFilesTable()->getFile($files->getAdapter(),$fileId,$frinendId)[0];
            $path  = $_SERVER['DOCUMENT_ROOT'].$file['file_name'];
            $fileName = $path;
            if (file_exists($fileName)) {
                header('Content-Description: File Transfer');
                header('Content-Type: application/octet-stream');
                header('Content-Disposition: attachment; filename='.$file['file_title']);
                header('Expires: 0');
                header('Cache-Control: must-revalidate');
                header('Pragma: public');
                header('Content-Length: ' . filesize($fileName));
                readfile($fileName);
                exit;
            }
        }
        die();
    }

    public function getNetworkParentFolderAction(){
        $this->layout('layout/only_form');
        $request = $this->getRequest();
        $dirKey = (int) $request->getPost()->dir_key;
        $userId = $request->getPost()->user_id;
        $filesystem = new FileSystem();
        $parentDir = $this->getFileSystemTable()->getUserParentDir($filesystem->getAdapter(),$dirKey,$userId);
        $files = new Files();
        $user_session = new Container('user');
        $userId = $user_session->user->id;
        $frinendId = $this->getRequest()->getPost()->user_id;
        $userId = $user_session->user->id;
        $friends = new Friends();
        $network = new Network();
        $dirs = $this->getNetworkTable()->getUserSharedDirs($request,$network->getAdapter())['result'];
        $dirsIds = [];



        foreach($dirs as $dir) {
            $dirsIds[] = $dir["id"];

        }


        if(in_array($dirKey,$dirsIds) || ($dirKey == "network_list")) {
            return $this->redirect()->toRoute('network',
                array('controller'=>"network",
                    'action' => "networkindex"
                     ));
        }

          elseif(!$this->isUserLogedInDirectory($dirKey))    {

              $this->layout('layout/only_form');
              $user_session = new Container('user');
              $userId = $user_session->user->id;
              $friends = new Friends();
              $friends = $this->getFriendsTable()->getFriends($userId, $friends->getAdapter());
              if($friends) $friends = $friends->toArray();
              else $friends = false;
              $view = new ViewModel(array(
                  'friends' => $friends,
              ));
              $view->setTemplate('network/network/networkindex.phtml'); // path to phtml file under view folder
              return $view;

          }
        $isUsersFriends = $this->getFriendsTable()->isUsersFriends($userId,$frinendId,$friends->getAdapter());
        if(!empty($isUsersFriends->toArray())) {
            if ($parentDir !== false && $dirKey != 0) {

                $dirs = $this->getUserSharedDirs($parentDir, $frinendId)->toArray();
                $isRoot = false;
                $currentDirectory = $parentDir;
                $filesInDir = $this->getFilesTable()->getDirFiles($files->getAdapter(), $currentDirectory, $frinendId);
            } elseif ($parentDir === false && $dirKey) {
                $dirs = $this->getUserSharedDirs(0, $userId)->toArray();
                $isRoot = false;
                $currentDirectory = 0;
                $filesInDir = $this->getFilesTable()->getDirFiles($files->getAdapter(), $currentDirectory, $frinendId);
            } else {
                $dirs = array(0 => array('id' => 0, 'path' => "/"));
                $isRoot = true;
                $currentDirectory = 0;
                $filesInDir = false;
            }
            $view = new ViewModel(array(
                'dirs' => $dirs,
                'is_root' => $isRoot,
                'current_directory' => $currentDirectory,
                'filesInDir' => $filesInDir,
                'user_id' => $frinendId
            ));
            $view->setTemplate('network/network/getnetworkfolder.phtml'); // path to phtml file under view folder
            return $view;
        }
        else {
            die("access denied");
        }

    }
    public function getUserSharedDirs($dirKey,$userId){
        $filesystem = new FileSystem();
        $dirs =   $this->getFileSystemTable()->getUserDirs($filesystem->getAdapter(),$dirKey,$userId);
        $dirs = $this->nonAuthedFoldersFilter($dirs);
        if(!$dirs) return false;
        $dirs = $this->getFileSystemTable()->getUserDirsDetails($filesystem->getAdapter(),$dirs);
        return $dirs;
    }

    public function nonAuthedFoldersFilter ($dirs) {
        $user_session = new Container('user');
        if(!isset($user_session->user->authedDirs)) return false;
        $authedDirs  =   $user_session->user->authedDirs;
        $authedDirs = explode(",", $authedDirs);
        $dirs = $dirs->toArray();
        $newDirs = [];
        foreach($dirs as $dir) {
            $newDirs[] = $dir["path_id"];
        }
        $sharedDirs  =  array_intersect($newDirs,$authedDirs);
        foreach($dirs as $dir) {
            if($dir['is_password']) {
                $sharedDirs[] =  $dir["path_id"];

            }

        }
        return $sharedDirs;
    }



}