
package com.stackroute.projectownerprofile.service;
import com.stackroute.projectownerprofile.domain.ProjectOwner;



public interface ProjectOwnerServiceInterface {
    public ProjectOwner post(ProjectOwner projectOwner);
    public ProjectOwner getProjectOwner(String id);
}