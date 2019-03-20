package com.stackroute.eureka1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;
//This is the eureka server which is used to register the services
@SpringBootApplication
@EnableEurekaServer
public class Eureka1Application {

	public static void main(String[] args) {
		SpringApplication.run(Eureka1Application.class, args);
	}

}