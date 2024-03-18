package com.atrem.RecommendationsForMP.controller;

import com.atrem.RecommendationsForMP.dto.AccountDto;
import com.atrem.RecommendationsForMP.model.Account;
import com.atrem.RecommendationsForMP.repository.AccountRepository;
import com.atrem.RecommendationsForMP.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin
@Controller
@RequestMapping("/info")
public class AccountController {

    @Autowired
    AccountRepository accountRepository;

    @PostMapping("/profile/{login}")
    public AccountDto ProfileInfo(@PathVariable String login) {
        return accountRepository.findByLogin(login);
    }
}
