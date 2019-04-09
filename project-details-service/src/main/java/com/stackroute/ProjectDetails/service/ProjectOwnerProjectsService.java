package com.stackroute.ProjectDetails.service;

import com.stackroute.ProjectDetails.domain.ProjectsOfProjectOwner;
import com.stackroute.ProjectDetails.domain.Skills;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProjectOwnerProjectsService {
    public void addProjects(ProjectsOfProjectOwner projectsOfProjectOwner);
    public ProjectsOfProjectOwner getProjectsByEmailId(String projectOwnerEmailId);
    public ProjectsOfProjectOwner getProjectsall(String projectOwnerName);



}
