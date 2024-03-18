package com.atrem.RecommendationsForMP.controller;

import com.atrem.RecommendationsForMP.dto.SignInFormDto;
import com.atrem.RecommendationsForMP.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin()
@RestController
@RequestMapping("/signIn")

public class SignInController {

    @Autowired
    private AccountService accountService;

    @PostMapping("/check")
    public ResponseEntity<?> login(@RequestBody SignInFormDto signInFormDto) {

        boolean isExist = accountService.existsByLoginAndPassword(signInFormDto.getLogin(), signInFormDto.getPassword());
        if (isExist) {
//            HttpHeaders headers = new HttpHeaders();
//            headers.add("Location", "/main");
            return ResponseEntity.status(HttpStatus.OK).build();
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
}