package com.stackroute.freelancerprofile.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Component;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import java.util.ArrayList;
import java.util.List;

@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
@Component
public class Freelancer {
    @Id
    private int id;
    private String freelancerName;
    private String freelancerEmail;
    private String freelancerAddress;
    private int yearsOfExpertise;
    private ArrayList<String> skills;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFreelancerName() {
        return freelancerName;
    }

    public void setFreelancerName(String freelancerName) {
        this.freelancerName = freelancerName;
    }

    public String getFreelancerEmail() {
        return freelancerEmail;
    }

    public void setFreelancerEmail(String freelancerEmail) {
        this.freelancerEmail = freelancerEmail;
    }

    public String getFreelancerAddress() {
        return freelancerAddress;
    }

    public void setFreelancerAddress(String freelancerAddress) {
        this.freelancerAddress = freelancerAddress;
    }

    public int getYearsOfExpertise() {
        return yearsOfExpertise;
    }

    public void setYearsOfExpertise(int yearsOfExpertise) {
        this.yearsOfExpertise = yearsOfExpertise;
    }

    public ArrayList<String> getSkills() {
        return skills;
    }

    public void setSkills(ArrayList<String> skills) {
        this.skills = skills;
    }
}
