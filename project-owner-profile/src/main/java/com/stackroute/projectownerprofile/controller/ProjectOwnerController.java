package com.stackroute.projectownerprofile.controller;


import com.stackroute.projectownerprofile.domain.ProjectOwner;
import com.stackroute.projectownerprofile.service.ProjectOwnerServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
public class ProjectOwnerController {

    private ProjectOwnerServices projectOwnerServices;

    @Autowired

    public ProjectOwnerController(ProjectOwnerServices projectOwnerServices) {
        this.projectOwnerServices = projectOwnerServices;
    }


    @PostMapping("/projectOwner/projectOwnerId")
        public ResponseEntity<?> post(ProjectOwner projectOwner){
            ProjectOwner po=projectOwnerServices.post(projectOwner);
            return new ResponseEntity<ProjectOwner>(po, HttpStatus.OK);
        }
        @GetMapping("/projectOwner/{projectownerId}")
        public ResponseEntity<?> getProjectOwner(@PathVariable("projectownerId") String id){
            ProjectOwner po=projectOwnerServices.getProjectOwner(id);
            return new ResponseEntity<ProjectOwner>(po,HttpStatus.OK);
        }


}
