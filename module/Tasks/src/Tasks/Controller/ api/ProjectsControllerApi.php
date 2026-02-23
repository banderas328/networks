<?php

namespace Tasks\Api\Controller;

use Tasks\Model\Projects;
use Zend\View\Model\ViewModel;
use Tasks\Model\Boards;
use Tasks\Model\BoardsTable;
use Preloader\Controller;
use Zend\Config\Config;
use Zend\Config\Factory;


class ProjectsControllerApi extends Controller\preloaderController
{

    protected $projectsTable;
    protected $boardsTable;

    public function indexAction()
    {
        $this->layout('layout/only_form');
        echo json_encode(@array('projects' => $this->getProjectsTable()->getProjects()));
        return false;

    }

    public function loadProjectsArchiveAction()
    {
        $this->layout('layout/only_form');
        echo json_encode($this->getProjectsTable()->getArchiveProjects());
        return false;
    }

    public function addUserToProjectAction(){
        $project_id = (int)$this->getRequest()->getPost()->project_id;
        $user_id = (int)$this->getRequest()->getPost()->user_id;
        $this->getProjectsTable()->addUserToProject($project_id,$user_id);

    }

    public function getProjectMemberlistAction()
    {
        $this->layout('layout/only_form');
        $project_id = (int)$this->getRequest()->getPost()->project_id;
        $members = $this->getProjectsTable()->getProjectMembers($project_id);
        echo json_encode(@array('members' => $members));
        return false;
    }

    public function deleteUserFromProjectAction(){
        $this->layout('layout/only_form');
        $project_id = (int)$this->getRequest()->getPost()->project_id;
        $user_id = (int)$this->getRequest()->getPost()->user_id;
        $this->getProjectsTable()->deleteUserFromProjectMembers($project_id,$user_id);
        return false;

    }

    public function createProjectAction()
    {
        $this->layout('layout/only_form');
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
        $this->layout('layout/only_form');
        $request = $this->getRequest();
        $this->getProjectsTable()->updateProjectsInBoard($request);
        echo "ok"
        return false;
    }

    public function deleteProjectAction()
    {
        $this->layout('layout/only_form');
        $request = $this->getRequest();
        $this->getProjectsTable()->daleteProject($request);
        echo "ok"
        return false;
    }

    public function updateProjectAction()
    {
        $this->layout('layout/only_form');
        $request = $this->getRequest()->getPost()->toArray();
        $this->getProjectsTable()->updateProject($request);
        echo "ok"
        return false;
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

