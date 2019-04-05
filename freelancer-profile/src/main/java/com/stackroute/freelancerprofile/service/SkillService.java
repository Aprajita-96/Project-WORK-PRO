package com.stackroute.freelancerprofile.service;


import com.stackroute.freelancerprofile.domain.Freelancer;
import com.stackroute.freelancerprofile.domain.Skill;
import com.stackroute.freelancerprofile.repository.SkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class SkillService {
    private SkillRepository skillRepository;

    @Autowired
    SkillService(SkillRepository skillRepository) {
        this.skillRepository = skillRepository;
    }

    public Skill save(Skill skill) {
        Skill result = skillRepository.save(skill);
        return result;
    }
    public List<Skill> getAll(){
        return skillRepository.findAll();
    }
    public Skill findById(String id){
        return skillRepository.findById(id).get();
    }

    public Skill search(String skill) {

        Skill result=new Skill();
        List<Skill> list=(List<Skill>)skillRepository.findAll();
        for(Skill skill1:list){
//            System.out.println(skill1.getSkill());
//            System.out.println(skill);
             if((skill1.getSkill()).equals(skill)){
                 System.out.println("inside if............................."+skill);
                 System.out.println(skill1.getSkill());
                 result.setSkill(skill1.getSkill());
                 result.setList(skill1.getList());


             }
         }
      return result;
    }
}

