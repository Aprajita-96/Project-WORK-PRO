package com.example.registration.controller;

import com.example.registration.domain.UserCredentials;
import com.example.registration.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class UserController {
    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    public UserController() {
    }

    //this method is helping us register the user to our database
    @PostMapping("/registration")
    public ResponseEntity<?> registration(@RequestBody UserCredentials userCredentials) {
        UserCredentials user = userService.saveUser(userCredentials);
        if (user != null) {
            return new ResponseEntity<UserCredentials>(userCredentials, HttpStatus.OK);
        } else {
            return null;
        }
    }
}
