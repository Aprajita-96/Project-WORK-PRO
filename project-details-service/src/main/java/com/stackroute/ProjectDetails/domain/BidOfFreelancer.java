package com.stackroute.ProjectDetails.domain;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotNull;
import java.util.Date;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BidOfFreelancer {

  private String freelancerEmailId ;
  private String proposedCompletionDate;
  private Double bidAmount;
  private boolean projectAwarded;
}