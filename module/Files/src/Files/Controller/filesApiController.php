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
use Preloader\Model;


class  filesApiController extends Controller\preloaderController {
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
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));
        $request = $this->getRequest();
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
        echo json_encode(array(
            'dirs' => $dirs,
            'is_root' => $isRoot,
            'current_directory' => $currentDirectory,
            'filesInDir' => $filesInDir
        ));
        return false;
    }
    public function saveTextFileAction(){
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));
        $request = $this->getRequest();
        $file_name =  $request->getPost()->file_name;
        $file_id =  $request->getPost()->file_id;
        $current_directory =  $request->getPost()->current_directory;
        $data =  $request->getPost()->data;
        $data =  preg_replace('/<script\b[^>]*>(.*?)<\/script>/is', "", $data);
        $this->getFilesTable()->saveTextFile($file_name,$data,$current_directory,$userId,$file_id);
        die("file created");

    }
    public function getContentTextFileAction(){
  
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));
        $request = $this->getRequest();
        $fileId = (int) $request->getPost()->file_id;
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));
        echo json_encode($this->getFilesTable()->getTextFile($fileId,$userId));
        die();



    }
    public function getParentDirAction(){
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));
        $request = $this->getRequest();
        $dirKey = (int) $request->getPost()->dir_key;
        $filesystem = new FileSystem();
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));
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
        echo json_encode(array(
            'dirs' => $dirs,
            'is_root' => $isRoot,
            'current_directory' => $currentDirectory,
            'filesInDir' => $filesInDir
        ));
        die();

    }

    public function createDirAction(){
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));
        $request = $this->getRequest();
        $filesystem = new FileSystem();
        $this->getFileSystemTable()->createUserDir($filesystem->getAdapter(),$request,$userId);
        echo "ok";
        die();

    }


    public function getUserDirsAction(){
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));
        $dir_key = (int)$this->getRequest()->getPost("dir_key");
        $filesystem = new FileSystem();
        echo json_encode ([$this->getFileSystemTable()->getUserDirs($filesystem->getAdapter(),$dir_key,$userId)]);
        die();
    }

	public function getUserDirs($dirKey,$userId = false){
        if(!$userId)   $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));
        $filesystem = new FileSystem();
        echo json_encode ([$this->getFileSystemTable()->getUserDirs($filesystem->getAdapter(),$dirKey,$userId)]);
        return false;
    }

    public function saveFileAction(){
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));
        $request = $this->getRequest();
        $post = array_merge_recursive(
            $request->getPost()->toArray(),
            $request->getFiles()->toArray()
        );
        echo json_encode(["file_id" => $this->getFilesTable()->saveUserFile($post,$userId)]);
        die();
    }


    public function downloadFileAction() {
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));
        if(!$userId) die("ivalid user");
        $fileId = $this->getEvent()->getRequest()->getPost('file_id');
        $files = new Files();
        $file = $this->getFilesTable()->getFile($files->getAdapter(),$fileId,$userId)[0];
        $path  = $_SERVER['DOCUMENT_ROOT']."/".$file['file_name'];
        $fileName = $path;
        if (ob_get_level() > 0) {
            ob_clean();
        }
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
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));
        $request = $this->getRequest();
        $file_id = (int) $request->getPost()->file_id;
        $files = new Files();
        $filesData = json_encode(['file_deleted' => $this->getFilesTable()->deleteFile($file_id,$userId)]);
        echo $filesData;
        die();
    }

    public function renameDirAction() {
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));
        $dir = (int) $request->getPost()->dir;
        $dirName =  $request->getPost()->directory_name;
        $this->getFileSystemTable()->renameDir($dir,$dirName,$userId);
        echo "ok";
        die();

    }
    public function renameFileAction() {
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));
        $request = $this->getRequest();
        $file = (int) $request->getPost()->file;
        $fileName =  $request->getPost()->file_name;
        $this->getFilesTable()->renameFile($file,$fileName,$userId);
        echo "ok";
        die();

    }

    public function deleteDirectoryAction()
    {
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));
        $request = $this->getRequest();
        $dirId = (int)$request->getPost()->dir;
        $fileSystem = new FileSystem();
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));
        $dirs = $this->getFileSystemTable()->getChildDirs( $dirId, $userId);
        $files = new Files();
        foreach ($dirs as $dir) {
            $filesInDir = $this->getFilesTable()->getDirFiles($files->getAdapter(), $dir , $userId);
            if(count($filesInDir) > 0)
                foreach ($filesInDir as $file) {
                    $this->getFilesTable()->deleteFile( $file['id'], $userId);
                }
        }
        $this->getFileSystemTable()->deleteDirWithChilds($fileSystem->getAdapter(),$dirs);
        echo "ok";
        die();
    }

    public function moveDirectoryAction()
    {
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));
        $request = $this->getRequest();
        $dirId = (int)$request->getPost()->dir_id;
        $dirIdCurrent = (int)$request->getPost()->current_directory;
        $fileSystem = new FileSystem();
        $this->getFileSystemTable()->moveDir($fileSystem->getAdapter(),$dirId,$dirIdCurrent,$userId);
        echo "ok";
        die();
    }


    public function closeDirectoryAction(){
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));
        $request = $this->getRequest();
        $dir = (int)$request->getPost()->dir;
        $this->getNetworkTable()->closeDir($dir,$userId);
        echo "ok";
        die();

    }

    public function shareDirAction(){
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));
        $this->layout('layout/only_form');
        $request = $this->getRequest();
        $dirId = (int)$request->getPost()->dir;
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));
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
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));
        $this->layout('layout/only_form');
        $request = $this->getRequest();
        $dirId = (int)$request->getPost()->dir;
        $password = $request->getPost()->password;
        $files = new FileSystem();
        $dir  = $this->getFileSystemTable()->getDir($dirId,$userId,$files->getAdapter());
        $result = "error in share folder";
        if(!empty($dir)) {
            $this->getNetworkTable()->shareDirWithPassword($dirId,$password,$userId);
            $result = "folder shared";
        }
        echo  json_encode($result);
        die();
    }

    public function moveFileAction(){

        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));
        $request = $this->getRequest();
        $fileId = (int)$request->getPost()->file_id;
        $requiredDirId = (int)$request->getPost()->current_directory;
        $files = new Files();
        $dir  = $this->getFilesTable()->moveFileToSystem($fileId,$requiredDirId,$userId,$files->getAdapter());
        echo "ok";
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
