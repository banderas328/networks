<?php

namespace Tasks\Controller;

use Tasks\Model\Projects;
use Zend\View\Model\ViewModel;
use Tasks\Model\Boards;
use Tasks\Model\BoardsTable;
use Preloader\Controller;
use Zend\Config\Config;
use Zend\Config\Factory;
use Preloader\Model;


class ProjectsApiController extends Controller\preloaderController
{

    protected $projectsTable;
    protected $boardsTable;

    public function indexAction()
    {
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));// just for api check
        $this->layout('layout/only_form');
        echo json_encode(@array('projects' => $this->getProjectsTable()->getProjects()));
        return false;

    }

    public function loadProjectsArchiveAction()
    {
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));
        echo json_encode($this->getProjectsTable()->getArchiveProjects($userId));
        die();
    }

    public function addUserToProjectAction(){
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));// just for api check
        $project_id = (int)$this->getRequest()->getPost()->project_id;
        $user_id = (int)$this->getRequest()->getPost()->user_id;
        $this->getProjectsTable()->addUserToProject($project_id,$user_id);
        die("ok");

    }

    public function getProjectMemberlistAction()
    {
         $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));// just for api check
        $project_id = (int)$this->getRequest()->getPost()->project_id;
        $members = $this->getProjectsTable()->getProjectMembers($project_id);
        echo json_encode(@array('members' => $members));
        die();
    }

    public function deleteUserFromProjectAction(){
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));// just for api check
        $project_id = (int)$this->getRequest()->getPost()->project_id;
        $user_id = (int)$this->getRequest()->getPost()->user_id;
        $this->getProjectsTable()->deleteUserFromProjectMembers($project_id,$user_id);
        die("ok");

    }

    public function createProjectAction()
    {
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));// just for api check
        $request = $this->getRequest();
        if ($request->isPost()) {
            $this->getProjectsTable()->createProject($request);
        }
        echo json_encode("project created");
        die();
    }

    public function getProjectReportAction(){

        $this->layout('layout/only_form');
        $request = $this->getRequest();
        $data = [];
   //     if ($request->isPost()) {
            $data = $this->getProjectsTable()->getProjectReport($this->getRequest()->getQuery()->toArray());
    //    }
        echo json_encode(@array('data' => $data));
        return false;
    }

    public function updateProjectsInBoardAction()
    {
        $userId = $this->getApiUser($this->getRequest());//just for check auth
        $request = $this->getRequest();
        $this->getProjectsTable()->updateProjectsInBoard($request);
        echo "ok";
        die();
    }

    public function deleteProjectAction()
    {
        $userId = $this->getApiUser($this->getRequest());//just for check auth
        $request = $this->getRequest();
        $this->getProjectsTable()->daleteProject($request,$userId);
        echo "ok";
        die();
    }

    public function updateProjectAction()
    {
        $userId = $this->getApiUser($this->getRequest());//just for check auth

        $request = $this->getRequest()->getPost()->toArray();
        unset($request['token']);
        $this->getProjectsTable()->updateProject($request);
        echo "ok";
        die();
    }


    public function getProjectsTable()
    {
        if (!$this->projectsTable) {
            $this->projectsTable = new \Tasks\Model\ProjectsTable;
        }
        return $this->projectsTable;
    }

    public function getBoardsTable()
    {
        if (!$this->boardsTable) {
            $this->boardsTable = new \Tasks\Model\BoardsTable;
        }
        return $this->boardsTable;
    }

}

