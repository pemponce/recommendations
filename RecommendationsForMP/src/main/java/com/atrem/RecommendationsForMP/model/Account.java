package com.atrem.RecommendationsForMP.model;

import jakarta.persistence.*;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String login;
    private String password;
    @Column(name = "user_name")
    private String userName;
    @Column(name = "user_second_name")
    private String userSecondName;

}
