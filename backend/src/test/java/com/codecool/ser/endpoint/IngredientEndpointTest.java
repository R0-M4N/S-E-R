package com.codecool.ser.endpoint;

import com.codecool.ser.configuration.SecurityConfiguration;
import com.codecool.ser.service.TokenService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.web.servlet.MockMvc;

import static org.junit.jupiter.api.Assertions.*;

@WebMvcTest({IngredientEndpoint.class, AuthEndpoint.class})
@Import({SecurityConfiguration.class, TokenService.class})
class IngredientEndpointTest {

//    @Autowired
//    MockMvc mvc;

    @Test
    void getAllIngredients() {
    }

    @Test
    void swapByProtein() {
    }

    @Test
    void swapByCategoryAndProtein() {
    }
}