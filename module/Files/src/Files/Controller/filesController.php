<?php
namespace Files\Controller;

use Files\Form\FilesForm;
use Files\Model\Files;
use Files\Model\FileSystem;
use Files\Model\PayedFiles;
use Files\Model\FilesToTagsTable;
use Tags\Model\TagsTable;
use Network\Model\Network;
use Network\Model\NetworkTable;
use Zend\Mvc\Controller\AbstractActionController;
use Zend\Stdlib\RequestInterface as Request;
use Zend\Session\Container;
use Preloader;
use Preloader\Controller;
use Zend\View\Model\ViewModel;
use Zend\I18n\Translator\Translator;


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
        //$this->setLocale();
        $this->layout('layout/only_form');
        $request = $this->getRequest();
        $isRoot = false;
        $user_session = new Container('user');
        $userId = $user_session->user->id;
        if(!$request->isPost()){
          $dirs = array( 0 => array('id' => 0, 'path' => "/" ));
            $isRoot  = true;
            $currentDirectory = 0;
            $filesInDir = false;
        }
        else {
            //bug may be becouse here post ( not get)
            $dirKey = (int) $request->getPost()->dir_key;
            $dirs = $this->getUserDirs($dirKey,$userId)->toArray();
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

    public function getParentDirAction(){
        //$this->setLocale();
        $this->layout('layout/only_form');
        $request = $this->getRequest();
        $dirKey = (int) $request->getPost()->dir_key;
        $filesystem = new FileSystem();
        $user_session = new Container('user');
        $userId = $user_session->user->id;
        $parentDir = $this->getFileSystemTable()->getUserParentDir($filesystem->getAdapter(),$dirKey,$userId);
        $files = new Files();
        $user_session = new Container('user');
        $userId = $user_session->user->id;
        if($parentDir !== false && $dirKey != 0 ) {
             $dirs = $this->getUserDirs($parentDir,$userId)->toArray();
            $isRoot  = false;
            $currentDirectory = $parentDir;
            $filesInDir = $this->getFilesTable()->getDirFiles($files->getAdapter(),$currentDirectory,$userId);
        }
        elseif($parentDir === false && $dirKey) {
            $dirs = $this->getUserDirs(0,$userId)->toArray();
            $isRoot  = false;
            $currentDirectory = 0;
            $filesInDir = $this->getFilesTable()->getDirFiles($files->getAdapter(),$currentDirectory,$userId);
        }
        else {
            $dirs = array( 0 => array('id' => 0, 'path' => "/" ));
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
        $files = new Files();
        $this->getFilesTable()->saveUserFile($files->getAdapter(),$post);

        die();
    }


    public function downloadFileAction() {
        $user_session = new Container('user');
        $userId = $user_session->user->id;
        $fileId = $this->getEvent()->getRouteMatch()->getParam('value');
        $files = new Files();
        $file = $this->getFilesTable()->getFile($files->getAdapter(),$fileId,$userId)[0];
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
        die();
    }

    public function sellFileAction() {


        $this->layout('layout/only_form');
        $requestData = $this->getRequest()->getPost();
        $fileId = $requestData->file_id;
        $cost = $requestData->cost;
        $description = $requestData->description;
        $tags = $requestData->tags;
        $user_session = new Container('user');
        $userId = $user_session->user->id;
        $file = new Files();
        $fileData = $this->getFilesTable()->getFile($file->getAdapter(),$fileId,$userId);
        var_dump($fileData);
        $fileId = $fileData[0]["id"];
        $this->getPayedFilesTable()->saveFileForPay($fileId,$description,$cost);
        $tags = explode(",",$tags);
        var_dump($tags);
        echo "test";
        $tagsIds = $this->getTagsTable()->updateTags($tags);
        $this->getFilesToTagsTable()->updateFileTags($fileId,$tagsIds);
        die();

    }

    public function deleteFileAction() {
        $request = $this->getRequest();
        $file_id = (int) $request->getPost()->file_id;
        $files = new Files();
        $user_session = new Container('user');
        $userId = $user_session->user->id;
       if($this->getFilesTable()->deleteFile($files->getAdapter(),$file_id,$userId)){

         //  $this->getPayedFilesTable()->deleteFileForPay($file_id);
           $this->getFilesToTagsTable()->deleteFileTags($file_id);
       }
          die(json_encode($file_id));
    }

    public function deleteDirectoryAction()
    {
        $request = $this->getRequest();
        $dirId = (int)$request->getPost()->dir;
        $fileSystem = new FileSystem();
        $user_session = new Container('user');
        $userId = $user_session->user->id;
        $dirs = $this->getFileSystemTable()->getChildDirs($fileSystem->getAdapter(), $dirId, $userId);
        $files = new Files();
        $user_session = new Container('user');
        $userId = $user_session->user->id;
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

    public function shareDirAction(){
        $this->layout('layout/only_form');
        $request = $this->getRequest();
        $dirId = (int)$request->getPost()->dir;
        $user_session = new Container('user');

        $userId = $user_session->user->id;
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
        $user_session = new Container('user');
        $password = $request->getPost()->password;
        $userId = $user_session->user->id;
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


    public function setLocale () {
        $loc = $this->getServiceLocator();
        $translator = new Translator();
        $user_session = new Container('user');
        if($user_session->user) {
            $lang = $user_session->user->lang;
            $translator->addTranslationFile("phparray",$_SERVER["DOCUMENT_ROOT"]."/../config/language/"."lang.array.".$lang.'.php',false,$lang);
            $translator->setLocale($lang);
            $loc->get('ViewHelperManager')->get('translate')
                ->setTranslator($translator);

        }



    }

	public function getFilesTable()
	{
		if (!$this->filesTable) {
// 			$sm = $this->getServiceLocator();
// 			$this->filesTable = $sm->get('Files\Model\FilesTable');
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
//             $sm = $this->getServiceLocator();
//             $this->filesystemTable = $sm->get('Files\Model\FileSystemTable');
            $this->filesystemTable = new \Files\Model\FileSystemTable;
        }
        return $this->filesystemTable;
    }

    public function getNetworkTable()
    {
        if (!$this->networkTable) {
            $sm = $this->getServiceLocator();
            $this->networkTable = $sm->get('Network\Model\NetworkTable');
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
          //  $sm = $this->getServiceLocator();
           // $this->filesToTagsTable = $sm->get('Files\Model\FilesToTagsTable');
            $this->filesToTagsTable = new \Files\Model\FilesToTagsTable;
        }
        return $this->filesToTagsTable;
    }




}