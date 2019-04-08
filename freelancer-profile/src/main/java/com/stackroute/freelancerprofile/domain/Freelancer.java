package com.stackroute.freelancerprofile.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Component;


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

}