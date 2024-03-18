package com.atrem.RecommendationsForMP.controller;

import com.atrem.RecommendationsForMP.dto.SignUpFormDto;
import com.atrem.RecommendationsForMP.model.Account;
import com.atrem.RecommendationsForMP.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin()
@RestController
@RequestMapping("/signUp")
public class SignUpController {

    @Autowired
    private AccountService accountService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody SignUpFormDto signUpFormDto) {
        Account account = new Account();
        account.setLogin(signUpFormDto.getLogin());
        account.setPassword(signUpFormDto.getPassword());
        account.setUserName(signUpFormDto.getUserName());
        account.setUserSecondName(signUpFormDto.getUserSecondName());

        accountService.saveAccount(account);

        return ResponseEntity.ok().build();
    }
}
