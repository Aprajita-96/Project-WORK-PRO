package com.stackroute.projectownerprofile.domain;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Component;

@Component
@Data
@Document
@NoArgsConstructor
@AllArgsConstructor
public class ProjectOwner {
    @Id
    private String id;
    private String name;
    private String email;
    private String address;
    private String location;
    private int number;

}
