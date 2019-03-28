package com.example.registration.service;

import com.example.registration.domain.UserCredentials;
import com.example.registration.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Date;
import java.util.List;

@Service
public class UserService {
    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
//
//    public UserService() {
//    }

    public UserCredentials saveUser(UserCredentials userCredentials){
//        String password= PasswordUtil.getPasswordHash(userCredentials.getPassword());
//        userCredentials.setPassword(password);
        userCredentials.setDate(new Date());
        UserCredentials user=userRepository.save(userCredentials);
        return user;
    }
    public List<UserCredentials> findall(){
        List<UserCredentials> list=(List<UserCredentials>)userRepository.findAll();
        return list;
    }

}
