package com.stackroute.freelancerprofile.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Component;

import java.util.*;
@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
@Component
public class Skill {
//    private Map<String, List<Freelancer>> hm=new HashMap<String, List<Freelancer>>();

@Id
private String id;
    private String skill;
    private List<Freelancer> list;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getSkill() {
        return skill;
    }

    public void setSkill(String skill) {
        this.skill = skill;
    }

    public List<Freelancer> getList() {
        return list;
    }

    public void setList(List<Freelancer> list) {
        this.list = list;
    }
}
