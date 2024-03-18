package com.atrem.RecommendationsForMP.repository;

import com.atrem.RecommendationsForMP.dto.AccountDto;
import com.atrem.RecommendationsForMP.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends JpaRepository<Account, Integer> {
    boolean existsByLoginAndPassword(String login, String password);
    AccountDto findByLogin(String login);
}
