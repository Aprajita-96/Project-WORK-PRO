package com.stackroute.ProjectDetails;

import com.google.gson.Gson;
import com.stackroute.ProjectDetails.domain.ProjectDetails;
import com.stackroute.ProjectDetails.domain.ProjectsOfProjectOwner;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.json.GsonJsonParser;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class ProjectDetailsApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjectDetailsApplication.class, args);
	}

//	@Override
//	public void run(String... args) throws Exception {
//		ProjectDetails details=new ProjectDetails
//				("name","active",
//						true,"10",
//						"onsite","bangalore",
//						"nice project",new ArrayList<>(),new ArrayList<>());
//		List<ProjectDetails> list=new ArrayList<>();
//		list.add(details);
//		ProjectsOfProjectOwner p=new ProjectsOfProjectOwner("m@m.com","anurag",list);
//		Gson gson =new Gson();
//		System.out.println(gson.toJson(p));
//	}
}
