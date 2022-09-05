package com.codecool.ser.controller;

import com.codecool.ser.persistence.repository.IngredientRepository;
import com.codecool.ser.service.IngredientService;
import com.codecool.ser.persistence.entity.Ingredient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("ingredients")
public class IngredientController {
    private IngredientRepository ingredientRepository;

    public IngredientController(IngredientRepository ingredientRepository) {
        this.ingredientRepository = ingredientRepository;
    }

    @GetMapping
    public List<Ingredient> getAllIngredients() {
        return ingredientRepository.findAll();
    }
}
