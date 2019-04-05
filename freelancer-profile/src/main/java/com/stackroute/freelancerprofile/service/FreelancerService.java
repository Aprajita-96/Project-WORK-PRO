package com.stackroute.freelancerprofile.service;

import com.stackroute.freelancerprofile.domain.Freelancer;
import com.stackroute.freelancerprofile.exception.UserNotFound;
import com.stackroute.freelancerprofile.repository.FreelancerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FreelancerService {

    private FreelancerRepository freelancerRepository;

    @Autowired
    FreelancerService(FreelancerRepository freelancerRepository){
        this.freelancerRepository=freelancerRepository;
    }

    public Freelancer save(Freelancer freelancer){
        Freelancer result=freelancerRepository.save(freelancer);
        return result;

    }
    public List<Freelancer> getAll(){
        List<Freelancer> list=freelancerRepository.findAll();
        return list;
    }

    public Freelancer edit(Freelancer freelancer,int id){
       Optional<Freelancer> f1= freelancerRepository.findById(id);
       Freelancer fetcherFreelancer=f1.get();
       fetcherFreelancer.setFreelancerAddress(freelancer.getFreelancerAddress());
       fetcherFreelancer.setFreelancerName(freelancer.getFreelancerName());
       fetcherFreelancer.setFreelancerEmail(freelancer.getFreelancerEmail());
       fetcherFreelancer.setSkills(freelancer.getSkills());
       fetcherFreelancer.setYearsOfExpertise(freelancer.getYearsOfExpertise());
       return freelancerRepository.save(fetcherFreelancer);
    }
    public Freelancer search(int id){
        Optional<Freelancer> result = freelancerRepository.findById(id);

        return result.get();

    }

}
