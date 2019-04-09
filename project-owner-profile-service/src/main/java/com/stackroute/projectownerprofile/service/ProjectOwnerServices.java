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

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProjectOwnerServices implements ProjectOwnerInterface{
    private ProjectOwnerRepository repository;
    @Autowired

    public ProjectOwnerServices(ProjectOwnerRepository repository) {

        this.repository = repository;
    }



    public ProjectOwner post(ProjectOwner projectOwner){
        ProjectOwner po=repository.save(projectOwner);
        return po;
    }

    public ProjectOwner getProjectOwner(String id){
        List<ProjectOwner> list=repository.findAll();
        ProjectOwner result=new ProjectOwner();
        for (ProjectOwner po:list){
            if(po.getEmail().equals(id)){
              result.setAddress(po.getAddress());
              result.setEmail(po.getEmail());
              result.setId(po.getId());
              result.setLocation(po.getLocation());
              result.setName(po.getName());
              result.setNumber(po.getNumber());
            }
        }
     return result;
    }
}
