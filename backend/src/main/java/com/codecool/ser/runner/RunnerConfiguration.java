package com.codecool.ser.runner;

import com.codecool.ser.persistence.entity.AppUser;
import com.codecool.ser.persistence.entity.Ingredient;
import com.codecool.ser.persistence.repository.AppUserRepository;
import com.codecool.ser.persistence.repository.IngredientRepository;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
@ConfigurationProperties("dataset")
public class RunnerConfiguration {

    List<Ingredient> ingredients;
    List<AppUser> users;

    @Bean
    ApplicationRunner runner(IngredientRepository ingredientRepository, AppUserRepository appUserRepository) {
        return args -> {
            ingredientRepository.saveAll(ingredients);
            appUserRepository.saveAll(users);
        };
    }

    public void setIngredients(List<Ingredient> ingredients) {
        this.ingredients = ingredients;
    }

    public void setUsers(List<AppUser> users) {
        this.users = users;
    }
}
