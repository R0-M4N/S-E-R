package com.codecool.ser.endpoint;

import com.codecool.ser.data.AuthCredentials;
import com.codecool.ser.service.TokenService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/auth")
public class LoginEndpoint {
    private static final Logger LOG = LoggerFactory.getLogger(LoginEndpoint.class);

    private final TokenService tokenService;

    public LoginEndpoint(TokenService tokenService) {
        this.tokenService = tokenService;
    }

    @PostMapping
    public ResponseEntity<?> login(AuthCredentials authCredentials) {
        return ResponseEntity.ok(null);
    }

    @PostMapping
    public String token(Authentication authentication) {
        LOG.debug("Token requested for user: '{}'", authentication.getName());
        String token = tokenService.generateToken(authentication);
        LOG.debug("Token granted {}", token);
        return token;
    }
}
