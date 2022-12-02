package com.codecool.ser.endpoint;

import com.codecool.ser.data.AuthCredentials;
import com.codecool.ser.service.TokenService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/auth")
@CrossOrigin
public class LoginEndpoint {
    private static final Logger LOG = LoggerFactory.getLogger(LoginEndpoint.class);

    private final TokenService tokenService;

    public LoginEndpoint(TokenService tokenService) {
        this.tokenService = tokenService;
    }

//    @PostMapping
//    public ResponseEntity<?> login(AuthCredentials authCredentials) {
//        return ResponseEntity.ok(null);
//    }

    @PostMapping("login")
    public String token(Authentication authentication) {
        System.out.println("arrived at login/token endpoint!!!");
        LOG.debug("Token requested for user: '{}'", authentication.getName());
        String token = tokenService.generateToken(authentication);
        LOG.debug("Token granted {}", token);
        return token;
    }
}
