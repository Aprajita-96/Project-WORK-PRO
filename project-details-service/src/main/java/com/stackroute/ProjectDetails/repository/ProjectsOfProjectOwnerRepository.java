package com.stackroute.ProjectDetails.repository;

import com.stackroute.ProjectDetails.domain.ProjectDetails;
import com.stackroute.ProjectDetails.domain.ProjectsOfProjectOwner;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectsOfProjectOwnerRepository extends MongoRepository<ProjectsOfProjectOwner,String> {

    //@Query(value = "Select p from ProjectsOfProjectOwner p  where p.projectOwnerName = ?1")
    ProjectsOfProjectOwner findByProjectOwnerName(String projectOwnerName);

    ProjectsOfProjectOwner findByprojectOwnerEmailId(String projectOwnerEmailId);
//    List<ProjectDetails> findByprojectId(int projectId);
//    ProjectsOfProjectOwner findByprojectOwnerName(String name);



}
