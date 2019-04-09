package com.stackroute.ProjectDetails.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document
public class BidKafka {
    private String ProjectId;
    private String projectName;
    private String freelancerEmail;
    private float bidAmount;
    private int duration;
    private String status;
    private boolean awarded;
}
