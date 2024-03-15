package com.atrem.RecommendationsForMP.service;

import com.atrem.RecommendationsForMP.model.Account;
import com.atrem.RecommendationsForMP.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountServiceImpl implements AccountService{

    @Autowired
    private AccountRepository accountRepository;

    @Override
    public Account saveAccount(Account account) {
        return accountRepository.save(account);
    }
}
