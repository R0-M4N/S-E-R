package com.codecool.ser.runner;

import com.codecool.ser.persistence.entity.Ingredient;
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

    @Bean
    ApplicationRunner runner(IngredientRepository ingredientRepository) {
        return args -> {
            ingredientRepository.saveAll(ingredients);
            /*System.out.println("--- All ingredients");
            ingredientRepository.findAll().forEach(System.out::println);

            ingredientRepository.saveAll(ingredients).forEach(System.out::println);

            System.out.println("--- All ingredients with less than or equals to 20 amount");
            ingredientRepository.findByProteinLessThanEqual(20)
                    .forEach(System.out::println);
            System.out.println("--- All ingredients with name starting with gr and protein less than equals 20");
            ingredientRepository.findByNameStartingWithIgnoreCaseAndProteinLessThanEqual("gr", 20)
                    .forEach(System.out::println);
             */
        };


    }

    public void setIngredients(List<Ingredient> ingredients) {
        this.ingredients = ingredients;
    }
}
