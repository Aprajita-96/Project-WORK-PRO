package com.stackroute.ProjectDetails.service;

import com.stackroute.ProjectDetails.domain.BidOfFreelancer;
import com.stackroute.ProjectDetails.domain.ProjectDetails;
import com.stackroute.ProjectDetails.domain.ProjectsOfProjectOwner;
import com.stackroute.ProjectDetails.domain.Skills;
import com.stackroute.ProjectDetails.repository.ProjectsOfProjectOwnerRepository;
import com.stackroute.ProjectDetails.repository.SkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectOwnerProjectsServiceImpl implements ProjectOwnerProjectsService {
    private ProjectsOfProjectOwnerRepository projectsOfProjectOwnerRepository;
    private SkillRepository skillRepository;

    @Autowired
    public ProjectOwnerProjectsServiceImpl(ProjectsOfProjectOwnerRepository projectsOfProjectOwnerRepository,SkillRepository skillRepository) {
        this.projectsOfProjectOwnerRepository = projectsOfProjectOwnerRepository;
        this.skillRepository=skillRepository;
    }



    //......................................project owner add projects.............
    public void addProjects(ProjectsOfProjectOwner projectsOfProjectOwner) {
        projectsOfProjectOwnerRepository.save(projectsOfProjectOwner);
    }



    //    ...............................................project owner search all his projects........
    @Override
    public ProjectsOfProjectOwner getProjectsByEmailId(String projectOwnerEmailId) {
        return projectsOfProjectOwnerRepository.findByprojectOwnerEmailId(projectOwnerEmailId);
    }



    //    ...............................................ex.....................
    public ProjectsOfProjectOwner getProjectsall(String projectOwnerName) {
        return projectsOfProjectOwnerRepository.findByProjectOwnerName(projectOwnerName);
    }


//    public void addProjectWrtSkills(Skills skills)
//    {
//       skillRepository.sAV
//    }

//    public ProjectsOfProjectOwner retrieveProjectByName(String name) {
//        ProjectsOfProjectOwner p = projectsOfProjectOwnerRepository.findByprojectOwnerName(name);
//        return p;
//    }

//    ...............................................put one of the freelancer bid to true......

//    public List<BidOfFreelancer> putBidAwardedStatus(String projectOwnerEmailId,int projectId)
//    {
//        List<ProjectsOfProjectOwner> projectsOfProjectOwnerList= projectsOfProjectOwnerRepository.findByprojectOwnerEmailId(projectOwnerEmailId);
//        List<ProjectDetails> projectDetailsList=projectsOfProjectOwnerRepository.findByprojectId(projectId);
//    return null;
//    }
}
