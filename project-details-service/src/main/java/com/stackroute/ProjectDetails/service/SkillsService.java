package com.stackroute.ProjectDetails.service;

import com.stackroute.ProjectDetails.domain.Skills;
import org.springframework.stereotype.Service;

@Service
public interface SkillsService {
    public void addProjectWrtSkills(Skills skills);
    public Skills findBySkillName(String  skillName);

}
