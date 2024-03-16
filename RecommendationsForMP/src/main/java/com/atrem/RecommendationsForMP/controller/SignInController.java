package com.atrem.RecommendationsForMP.controller;

import com.atrem.RecommendationsForMP.dto.SignInFormDto;
import com.atrem.RecommendationsForMP.model.Account;
import com.atrem.RecommendationsForMP.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.pulsar.PulsarProperties;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/signIn")
@CrossOrigin
public class SignInController {

    @Autowired
    private AccountService accountService;

    @PostMapping("/check")
    public ResponseEntity<?> login(@RequestBody SignInFormDto signInFormDto) {



        boolean isExist = accountService.existsByLoginAndPassword(signInFormDto.getLogin(), signInFormDto.getPassword());
        if(isExist) {
            HttpHeaders headers = new HttpHeaders();
            headers.add("Location", "/main");
            return ResponseEntity.status(HttpStatus.FOUND).headers(headers).build();
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }


}

