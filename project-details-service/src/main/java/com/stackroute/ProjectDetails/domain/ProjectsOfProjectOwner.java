package com.stackroute.ProjectDetails.domain;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection="ProjectsOfProjectOwner")
public class ProjectsOfProjectOwner {

    @Id
    private String projectOwnerEmailId;
    private String projectOwnerName;
    private List<ProjectDetails> projectDetailsList=new ArrayList<>();
}
