package com.stackroute.projectownerprofile.service;

import com.stackroute.projectownerprofile.domain.ProjectOwner;
import com.stackroute.projectownerprofile.repository.ProjectOwnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Optional;

@Service
public class ProjectOwnerServices implements ProjectOwnerServiceInterface{
    private ProjectOwnerRepository repository;
    @Autowired

    public ProjectOwnerServices(ProjectOwnerRepository repository) {
        this.repository = repository;
    }



    public ProjectOwner post( ProjectOwner projectOwner){
        ProjectOwner po=repository.save(projectOwner);
        return po;
    }

    public ProjectOwner getProjectOwner(String id){
        Optional<ProjectOwner> po=repository.findById(id);
        return po.get();
    }
}
