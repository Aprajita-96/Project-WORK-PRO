package com.stackroute.freelancerprofile.service;

import com.stackroute.freelancerprofile.domain.Freelancer;

import java.util.List;

public interface FreelancerService {
    public Freelancer save(Freelancer freelancer);
    public List<Freelancer> getAll();
    public Freelancer edit(Freelancer freelancer,int id);
    public Freelancer search(int id);
}
