package com.codecool.ser.service;

import com.codecool.ser.persistence.repository.AppUserRepository;
import org.springframework.security.core.userdetails.User;

public class AppUserService {
    private final AppUserRepository appUserRepository;

    public AppUserService(AppUserRepository appUserRepository) {
        this.appUserRepository = appUserRepository;
    }

    public User findUser() {
        return null;
    }
}
