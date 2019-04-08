package com.stackroute.freelancerprofile.controller;

import com.stackroute.freelancerprofile.domain.Bid;
import com.stackroute.freelancerprofile.domain.EmailMessage;
import com.stackroute.freelancerprofile.domain.Freelancer;
import com.stackroute.freelancerprofile.domain.Skill;
import com.stackroute.freelancerprofile.exception.UnauthorizedException;
import com.stackroute.freelancerprofile.exception.UserNotFound;
//import com.stackroute.freelancerprofile.listener.Consumer;
import com.stackroute.freelancerprofile.listener.Producer;
import com.stackroute.freelancerprofile.repository.FreelancerRepository;
import com.stackroute.freelancerprofile.service.BidService;
import com.stackroute.freelancerprofile.service.FreelancerService;
import com.stackroute.freelancerprofile.service.GeneratemailApplication;
import com.stackroute.freelancerprofile.service.SkillService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.MessagingException;
import org.springframework.web.bind.annotation.*;

import javax.mail.internet.AddressException;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/v1")
@CrossOrigin("*")
public class FreelancerController {
    private FreelancerService freelancerService;
    private BidService bidService;
    private SkillService skillService;
    private Skill skillObject;
    private List<Freelancer> list;
    private Freelancer freelancer;
    private Producer producer;
    private static final Logger LOGGER = LoggerFactory.getLogger(SkillService.class);

    @Autowired
    public FreelancerController(Producer producer, FreelancerService freelancerService, BidService bidService, SkillService skillService, List<Freelancer> list, Skill skillObject, Freelancer freelancer) {
        this.freelancerService = freelancerService;
        this.bidService = bidService;
        this.skillService = skillService;
        this.list = list;
        this.skillObject = skillObject;
        this.freelancer = freelancer;
        this.producer=producer;

    }

    @PostMapping("/freelancerprofile/postDetails")
    public ResponseEntity<?> postDetail(@RequestBody Freelancer newfreelancer) {
        freelancerService.save(newfreelancer);


        for (String string : newfreelancer.getSkills()) {
            Skill result = new Skill();
            List<Freelancer> freelancersList = new ArrayList<>();
            Skill newSkill = new Skill();
            boolean found = false;


            List<Skill> listSkill = skillService.getAll();
            if (listSkill.isEmpty()) {
                LOGGER.info("Inside isEmpty\n\n");
                newSkill.setSkill(string);
                freelancersList.add(newfreelancer);
                newSkill.setList(freelancersList);

                result = skillService.save(newSkill);
            } else {
                for (Skill s : listSkill) {
                    LOGGER.info("Inside FOR\n\n");


                    if (s.getSkill().equals(string)) {

                        LOGGER.info("Inside IF\n\n");
                        LOGGER.info("\n\nSkill ID : " + s.getId());

                        result = skillService.findById(s.getId());
                        List<Freelancer> list1 = s.getList();
                        list1.add(newfreelancer);
                        result.setList(list1);

                        LOGGER.info("newSkill ID : " + result.getId());

                        result = skillService.save(result);
                        found = true;
                    }
                }
            }

            if (found == false && !listSkill.isEmpty()) {
                LOGGER.info("Inside ELSE\n\n");
                newSkill.setSkill(string);
                freelancersList.add(newfreelancer);
                newSkill.setList(freelancersList);
                result = skillService.save(newSkill);
            }

        }
        return new ResponseEntity<String>("here", HttpStatus.OK);
    }


    @GetMapping("/freelancer/{id}")
    public ResponseEntity<?> getDetails(@PathVariable("id") int id) {
        Freelancer freelancer = freelancerService.search(id);
        return new ResponseEntity<Freelancer>(freelancer, HttpStatus.OK);
    }

    @PostMapping("/bid/bidDetails")
    public ResponseEntity<?> postBidInformation(@RequestBody Bid bid, @RequestHeader HttpHeaders header, HttpServletRequest request) {
        long contentLength = header.getContentLength();
        String token = request.getHeader("token");
        if (token != null) {
            Bid resultbid = bidService.save(bid);
            producer.send(bid);
            return new ResponseEntity<Bid>(resultbid, HttpStatus.ACCEPTED);
        } else
            throw new UnauthorizedException("login please");

    }

    @GetMapping("/bid/allbids")
    public ResponseEntity<?> getBidinformation() {
        List<Bid> result = bidService.allBids();
        return new ResponseEntity<List<Bid>>(result, HttpStatus.OK);

    }

    @GetMapping("/bid/awardedBids")
    public ResponseEntity<?> getAwardedBids() {
        return new ResponseEntity<String>("awarded Bid", HttpStatus.OK);

    }

    @PutMapping("/freelancerprofile/{id}")
    public ResponseEntity<?> editProfile(@RequestBody Freelancer freelancer, @PathVariable("id") int id) {

        return new ResponseEntity<Freelancer>(freelancerService.edit(freelancer, id), HttpStatus.OK);
    }

    @GetMapping("/skill/{skill}")
    public ResponseEntity<?> searchBySkill(@PathVariable("skill") String skill) {

        return new ResponseEntity<Skill>(skillService.search(skill), HttpStatus.OK);
    }


    @PostMapping("/produce")
    public Bid produceData(@RequestBody Bid bid) {
        LOGGER.info("REQUEST BODY..!! "+  bid);

        producer.send(bid);

        return bid;

    }
//
//    @Autowired
//    private Consumer consumer;
//
//    @GetMapping("/produce")
//    public String consumeData() {
//
////        LOGGER.info("REQUEST BODY..!! "+  car);
//
////        producer.send("hjghjgf");
//
//        return "Received from Kafka Topic !!";
//
//    }
}
