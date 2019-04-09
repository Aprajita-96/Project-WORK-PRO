package com.stackroute.ProjectDetails.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProjectDetailsWrtSkills {

    @Id
    @NotNull(message = "Project id can't be null")
    private int projectId;
    private String projectName;
    private String projectStatus;
    private boolean projectAwarded;
    private String projectCompletionDate;
    private String projectPreference;
    private String projectLocation;
    private String projectDescription;
    private List<BidSpecsProvidedByProjectOwner> bidSpecsProvidedByProjectOwner ;

}
