package com.atrem.RecommendationsForMP.service;

import com.atrem.RecommendationsForMP.model.Account;

public interface AccountService {
    public Account saveAccount(Account account);
    boolean existsByLoginAndPassword(String login, String password);
}
