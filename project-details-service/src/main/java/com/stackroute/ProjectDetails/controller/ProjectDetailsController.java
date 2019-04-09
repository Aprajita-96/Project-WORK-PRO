package com.stackroute.ProjectDetails.controller;


import com.stackroute.ProjectDetails.domain.*;
import com.stackroute.ProjectDetails.exceptions.UnauthorizedException;
import com.stackroute.ProjectDetails.listener.Producer;
import com.stackroute.ProjectDetails.exceptions.ProjectAlreadyExistsException;
import com.stackroute.ProjectDetails.exceptions.ProjectBidAlreadyAwardedException;
import com.stackroute.ProjectDetails.exceptions.ProjectDoesNotExistException;
import com.stackroute.ProjectDetails.service.BidService;
import com.stackroute.ProjectDetails.service.ProjectOwnerProjectsServiceImpl;
import com.stackroute.ProjectDetails.service.SkillsServiceImpl;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;


@RestController
@RequestMapping("/api/v1")
public class ProjectDetailsController {
    private ProjectOwnerProjectsServiceImpl projectOwnerProjectsService;
    private SkillsServiceImpl skillsService;
    private  Producer producer;
    private BidService bidService;


    @Autowired
    public ProjectDetailsController(ProjectOwnerProjectsServiceImpl projectOwnerProjectsService,SkillsServiceImpl skillsService,Producer producer,BidService bidService) {
        this.projectOwnerProjectsService = projectOwnerProjectsService;
        this.skillsService=skillsService;
        this.producer=producer;
        this.bidService=bidService;
    }


    @GetMapping("/projectowner/{projectownerid}/projects/{projectid}")
    public ResponseEntity<?> projectDetailsForFreelancer(@PathVariable("projectid") int projectid, @PathVariable("projectownerid") String projectownerid) {

        ProjectsOfProjectOwner list = projectOwnerProjectsService.getProjectsByEmailId(projectownerid);
        int i = 0;
        for (ProjectDetails details : list.getProjectDetailsList()) {
            List<ProjectDetails> projectDetailsList = list.getProjectDetailsList();
//            if (details.getProjectId() == projectid)
                if (details.getProjectId().equals(projectid)){

                return new ResponseEntity<ProjectDetails>(details, HttpStatus.OK);
            }
        }
        return new ResponseEntity<String>("Project temporarily removed", HttpStatus.OK);
    }

    @GetMapping("/skill/{skillname}/projects")
    public ResponseEntity<?> freelancerProjectSearch(@PathVariable String skillname) {

        return new ResponseEntity< List<ProjectDetails>>(skillsService.searchBySkill(skillname), HttpStatus.OK);
    }

    @PostMapping("/projectowner/{projectownerid}/projects/{projectid}/bid")
    public ResponseEntity<?> freelancerBidOnAProject (@RequestHeader HttpHeaders header, HttpServletRequest request, @RequestBody BidOfFreelancer bidOfFreelancer, @PathVariable("projectid") int projectid, @PathVariable("projectownerid") String projectownerid) throws ProjectDoesNotExistException, UnauthorizedException {

        long contentLength = header.getContentLength();
        String token=request.getHeader("token");
        if(token!=null){


            ProjectsOfProjectOwner list = projectOwnerProjectsService.getProjectsByEmailId(projectownerid);
            for (ProjectDetails details : list.getProjectDetailsList()) {
//                if (details.getProjectId() == projectid)
                if (details.getProjectId().equals(projectid) ){
                    List<BidOfFreelancer> bidOfFreelancers = details.getAllBidsOfFreelancers();
                    bidOfFreelancers.add(bidOfFreelancer);
                    details.setAllBidsOfFreelancers(bidOfFreelancers);
                    projectOwnerProjectsService.addProjects(list);
                    System.out.println(details.getAllBidsOfFreelancers());
                    break;

                }
            }
            return new ResponseEntity<String>("Freelancer can bid on a project", HttpStatus.OK);
        }
        else
            throw new UnauthorizedException("Login Please");

    }

    @GetMapping("projects/proectid/bid/won")
    public ResponseEntity<?> freelancerBidsWon() {
        return new ResponseEntity<String>("Freelancer has won the project bid", HttpStatus.OK);
    }

    //...........................................project owner add his project...............
    @PostMapping("/projects/project")
    public ResponseEntity<?> addProject(@RequestBody ProjectsOfProjectOwner projectsOfProjectOwner ) throws ProjectAlreadyExistsException  {
//        always look for project owner with an emial id


        ProjectsOfProjectOwner owner = projectOwnerProjectsService.getProjectsByEmailId(projectsOfProjectOwner.getProjectOwnerEmailId());
        if(owner!=null) {
            for (ProjectDetails projectDetails : owner.getProjectDetailsList()) {

                if (projectDetails.getProjectId().equals(projectsOfProjectOwner.getProjectDetailsList().get(0).getProjectId())) {
                    throw new ProjectAlreadyExistsException();
                }
            }
        }



        if (owner == null) {
            projectOwnerProjectsService.addProjects(projectsOfProjectOwner);

        } else {
            owner.getProjectDetailsList().add(projectsOfProjectOwner.getProjectDetailsList().get(0));
            projectOwnerProjectsService.addProjects(owner);
        }

       // System.out.println(owner);
        for(ProjectDetails details: projectsOfProjectOwner.getProjectDetailsList())
        {
            for(String skillsFromProjectOwner:details.getSkillsSetList())
            {

                Skills oldSkills= skillsService.findBySkillName(skillsFromProjectOwner);
                //System.out.println(oldSkills);
                if(oldSkills==null)
                {

                    Skills newSkills = new Skills();
                    newSkills.setSkillName(skillsFromProjectOwner);
                    List<ProjectDetails> projectDetailsList = new ArrayList<>();
                    projectDetailsList.add(details);
                    newSkills.setProjectDetailsList(projectDetailsList);
                    this.skillsService.addProjectWrtSkills(newSkills);
                }
                else
                {
                    //System.out.println(oldSkills.getProjectDetailsList());
                    oldSkills.getProjectDetailsList().add(projectsOfProjectOwner.getProjectDetailsList().get(0));

                    this.skillsService.addProjectWrtSkills(oldSkills);


                }

            }
        }





        return new ResponseEntity<String>("Project owner adds a project", HttpStatus.OK);
    }
//.......................................project owner gets all projects by email id........

    @GetMapping("/projectowner/{projectownerid}/project")
    public ResponseEntity<ProjectsOfProjectOwner> projectOwnerViewsAllProjects(@PathVariable String projectownerid) {
        ProjectsOfProjectOwner list = projectOwnerProjectsService.getProjectsByEmailId(projectownerid);

        return new ResponseEntity<ProjectsOfProjectOwner>(list, HttpStatus.OK);
    }


    @PutMapping("/projectowner/{projectownerid}/projects/{projectid}/bid/accept/{FreelancerEmail}")
    public ResponseEntity<?> ownerAcceptsBid(@PathVariable("FreelancerEmail") String email,@PathVariable("projectid") String projectid, @PathVariable("projectownerid") String projectownerid) throws ProjectBidAlreadyAwardedException {
        ProjectsOfProjectOwner list = projectOwnerProjectsService.getProjectsByEmailId(projectownerid);
        List<BidKafka> listBid=bidService.getAll();


        for (ProjectDetails details : list.getProjectDetailsList()) {
            if (details.getProjectId().equals(projectid)) {

                details.setProjectStatus("closed");

                for (BidOfFreelancer freelancer : details.getAllBidsOfFreelancers()) {
                    if (freelancer.getFreelancerEmailId().equals(email)) {
                        freelancer.setProjectAwarded(true);
                        System.out.println(freelancer.isProjectAwarded());
                        this.projectOwnerProjectsService.addProjects(list);
                        break;
                    }

                }
                break;
            }
        }

        for(BidKafka bid:listBid) {
            if (bid.getFreelancerEmail().equals(email)){
                bid.setAwarded(true);
                producer.send(bid);
                System.out.println(bid+"produced..........................................");
            }
        }


        return new ResponseEntity<String>("Project owner accepts a bid", HttpStatus.OK);
    }


    @GetMapping("/projectowner/{projectownerid}/projects/{projectbid}/bids")
    public ResponseEntity<?> projectOwnerViewsAllBids(@PathVariable("projectid") String projectid, @PathVariable("projectownerid") String projectownerid) {
        ProjectsOfProjectOwner list = projectOwnerProjectsService.getProjectsByEmailId(projectownerid);
        for (ProjectDetails details : list.getProjectDetailsList()) {


            if (details.getProjectId().equals(projectid)){
                List<BidOfFreelancer> bidOfFreelancers = details.getAllBidsOfFreelancers();
                return new ResponseEntity<List<BidOfFreelancer>>(bidOfFreelancers, HttpStatus.OK);

            }

        }
        return new ResponseEntity<String>("Project temporarily removed", HttpStatus.OK);

    }


}
