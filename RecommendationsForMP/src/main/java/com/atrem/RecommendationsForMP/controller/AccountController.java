package com.atrem.RecommendationsForMP.controller;

import com.atrem.RecommendationsForMP.model.Account;
import com.atrem.RecommendationsForMP.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/signIn")
@CrossOrigin
public class AccountController {

    @Autowired
    private AccountService accountService;

    @PostMapping("/add")
    public String add(@RequestBody Account account) {
        accountService.saveAccount(account);

        return "Account created!";
    }
}
