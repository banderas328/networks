<?php
namespace Files\Controller;

use Files\Model\Files;
use Files\Model\FileSystem;
use Network\Model\NetworkTable;
use Tags\Model\TagsTable;
use Network\Model\Network;
use Zend\Stdlib\RequestInterface as Request;
use Preloader\Controller;
use Zend\View\Model\ViewModel;


class  filesController extends Controller\preloaderController {
	protected $filesTable;
    protected $filesystemTable;
    protected $networkTable;
    protected $payedfileTable;
    protected $tagsTable;
    protected $filesToTagsTable;

	function __construct() {
        //not

	}


    public function getDirAction(){
        $this->layout('layout/only_form');
        $request = $this->getRequest();
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        if(!$request->isPost()){
          $dirs = array( 0 => array('id' => 0, 'path' => "Home" ));
            $isRoot  = true;
            $currentDirectory = 0;
            $filesInDir = false;
        }
        else {
            $dirKey = (int) $request->getPost()->dir_key;
            $dirs = $this->getUserDirs($dirKey,$userId);
            $isRoot  = false;
            $currentDirectory = (int) $request->getPost()->dir_key;
            $files = new Files();
            $filesInDir = $this->getFilesTable()->getDirFiles($files->getAdapter(),$currentDirectory,$userId);
        }
        return new ViewModel(array(
            'dirs' => $dirs,
            'is_root' => $isRoot,
            'current_directory' => $currentDirectory,
            'filesInDir' => $filesInDir
        ));
    }
    public function saveTextFileAction(){
        $this->layout('layout/only_form');
        $request = $this->getRequest();
        $file_name =  $request->getPost()->file_name;
        $file_id =  $request->getPost()->file_id;
        $current_directory =  $request->getPost()->current_directory;
        $data =  $request->getPost()->data;
        $data =  preg_replace('/<script\b[^>]*>(.*?)<\/script>/is', "", $data);
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $this->getFilesTable()->saveTextFile($file_name,$data,$current_directory,$userId,$file_id);
        die("file created");

    }
    public function getContentTextFileAction(){
        $this->layout('layout/only_form');
        $request = $this->getRequest();
        $fileId = (int) $request->getPost()->file_id;
        $userSession = $_SESSION['user'];
        $userId = $userSession["id"];
        echo json_encode($this->getFilesTable()->getTextFile($fileId,$userId));
        die();



    }
    public function getParentDirAction(){
        $this->layout('layout/only_form');
        $request = $this->getRequest();
        $dirKey = (int) $request->getPost()->dir_key;
        $filesystem = new FileSystem();
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $parentDir = $this->getFileSystemTable()->getUserParentDir($filesystem->getAdapter(),$dirKey,$userId);
        $files = new Files();
        if($parentDir !== false && $dirKey != 0 ) {
             $dirs = $this->getUserDirs($parentDir,$userId);
            $isRoot  = false;
            $currentDirectory = $parentDir;
            $filesInDir = $this->getFilesTable()->getDirFiles($files->getAdapter(),$currentDirectory,$userId);
        }
        elseif($parentDir === false && $dirKey) {
            $dirs = $this->getUserDirs(0,$userId);
            $isRoot  = false;
            $currentDirectory = 0;
            $filesInDir = $this->getFilesTable()->getDirFiles($files->getAdapter(),$currentDirectory,$userId);
        }
        else {
            $dirs = array( 0 => array('id' => 0, 'path' => "Home" ));
            $isRoot  = true;
            $currentDirectory = 0;
            $filesInDir = false;
        }
        $view = new ViewModel(array(
            'dirs' => $dirs,
            'is_root' => $isRoot,
            'current_directory' => $currentDirectory,
            'filesInDir' => $filesInDir
        ));
        $view->setTemplate('files/files/get-dir.phtml'); // path to phtml file under view folder
        return $view;

    }

    public function createDirAction(){
        $this->layout('layout/only_form');
        $request = $this->getRequest();
        $filesystem = new FileSystem();
        $this->getFileSystemTable()->createUserDir($filesystem->getAdapter(),$request);
        die();

    }

	public function getUserDirs($dirKey,$userId){
        $filesystem = new FileSystem();
        return  $this->getFileSystemTable()->getUserDirs($filesystem->getAdapter(),$dirKey,$userId);
    }

    public function saveFileAction(){
        $this->layout('layout/only_form');
        $request = $this->getRequest();
        $post = array_merge_recursive(
            $request->getPost()->toArray(),
            $request->getFiles()->toArray()
        );
        $this->getFilesTable()->saveUserFile($post);

        die();
    }


    public function downloadFileAction() {
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $fileId = $this->getEvent()->getRouteMatch()->getParam('value');
        $files = new Files();
        $file = $this->getFilesTable()->getFile($files->getAdapter(),$fileId,$userId)[0];
        $path  = $_SERVER['DOCUMENT_ROOT']."/".$file['file_name'];
        $fileName = $path;
        ob_clean();
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
        die();
    }

    public function deleteFileAction() {
        $request = $this->getRequest();
        $file_id = (int) $request->getPost()->file_id;
        $files = new Files();
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
       if($this->getFilesTable()->deleteFile($file_id,$userId)){
           $this->getFilesToTagsTable()->deleteFileTags($file_id);
       }
          die(json_encode($file_id));
    }

    public function renameDirAction() {
        $request = $this->getRequest();
        $dir = (int) $request->getPost()->dir;
        $dirName =  $request->getPost()->directory_name;
        $this->getFileSystemTable()->renameDir($dir,$dirName);
        die();

    }
    public function renameFileAction() {
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $request = $this->getRequest();
        $file = (int) $request->getPost()->file;
        $fileName =  $request->getPost()->file_name;
        $this->getFilesTable()->renameFile($file,$fileName,$userId);
        die();

    }

    public function deleteDirectoryAction()
    {
        $request = $this->getRequest();
        $dirId = (int)$request->getPost()->dir;
        $fileSystem = new FileSystem();
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $dirs = $this->getFileSystemTable()->getChildDirs( $dirId, $userId);
        $files = new Files();
        foreach ($dirs as $dir) {
            $filesInDir = $this->getFilesTable()->getDirFiles($files->getAdapter(), $dir , $userId);
            if(count($filesInDir) > 0)
                foreach ($filesInDir as $file) {
                    $this->getFilesTable()->deleteFile($files->getAdapter(), $file['id'], $userId);
                }
        }
        $this->getFileSystemTable()->deleteDirWithChilds($fileSystem->getAdapter(),$dirs);
        die();
    }

    public function moveDirectoryAction()
    {
        $request = $this->getRequest();
        $dirId = (int)$request->getPost()->dir_id;
        $dirIdCurrent = (int)$request->getPost()->current_directory;
        $fileSystem = new FileSystem();
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $this->getFileSystemTable()->moveDir($fileSystem->getAdapter(),$dirId,$dirIdCurrent,$userId);
        die();
    }


    public function closeDirectoryAction(){
        $request = $this->getRequest();
        $dir = (int)$request->getPost()->dir;
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $this->getNetworkTable()->closeDir($dir,$userId);
        die();

    }

    public function shareDirAction(){
        $this->layout('layout/only_form');
        $request = $this->getRequest();
        $dirId = (int)$request->getPost()->dir;
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $files = new FileSystem();
        $dir  = $this->getFileSystemTable()->getDir($dirId,$userId,$files->getAdapter());
        $result = "error in share folder";
        if(!empty($dir)) {
            $this->getNetworkTable()->shareDir($dirId);
            $result = "folder shared";
        }
        echo  json_encode($result);
        die();
    }

    public function shareDirWithPasswordAction(){
        $this->layout('layout/only_form');
        $request = $this->getRequest();
        $dirId = (int)$request->getPost()->dir;

        $password = $request->getPost()->password;
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $files = new FileSystem();
        $dir  = $this->getFileSystemTable()->getDir($dirId,$userId,$files->getAdapter());
        $result = "error in share folder";
        if(!empty($dir)) {
            $this->getNetworkTable()->shareDirWithPassword($dirId,$password);
            $result = "folder shared";
        }
        echo  json_encode($result);
        die();
    }

    public function moveFileAction(){

        $this->layout('layout/only_form');
        $request = $this->getRequest();
        $fileId = (int)$request->getPost()->file_id;
        $requiredDirId = (int)$request->getPost()->current_directory;
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $files = new Files();
        $dir  = $this->getFilesTable()->moveFileToSystem($fileId,$requiredDirId,$userId,$files->getAdapter());
        die();
    }


	public function getFilesTable()
	{
		if (!$this->filesTable) {
		    $this->filesTable  = new \Files\Model\FilesTable;
		}
		return $this->filesTable;
	}

    public function getPayedFilesTable()
    {
        if (!$this->payedfileTable) {
            $sm = $this->getServiceLocator();
            $this->payedfileTable = $sm->get('Files\Model\PayedFilesTable');
        }
        return $this->payedfileTable;
    }

    public function getFileSystemTable()
    {
        if (!$this->filesystemTable) {
            $this->filesystemTable = new \Files\Model\FileSystemTable;
        }
        return $this->filesystemTable;
    }

    public function getNetworkTable()
    {
        if (!$this->networkTable) {
            $this->networkTable = new \Network\Model\NetworkTable;
        }
        return $this->networkTable;
    }
    public function getTagsTable()
    {
        if (!$this->tagsTable) {
            $sm = $this->getServiceLocator();
            $this->tagsTable = $sm->get('Tags\Model\TagsTable');
        }
        return $this->tagsTable;
    }
    public function getFilesToTagsTable()
    {
        if (!$this->filesToTagsTable) {
            $this->filesToTagsTable = new \Files\Model\FilesToTagsTable;
        }
        return $this->filesToTagsTable;
    }
}
