package com.codecool.ser.controller;

import com.codecool.ser.persistence.repository.IngredientRepository;
import com.codecool.ser.service.IngredientService;
import com.codecool.ser.persistence.entity.Ingredient;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("ingredients")
public class IngredientController {
    private IngredientRepository ingredientRepository;
    private IngredientService ingredientService;

    public IngredientController(IngredientRepository ingredientRepository, IngredientService ingredientService) {
        this.ingredientRepository = ingredientRepository;
        this.ingredientService = ingredientService;
    }

    @GetMapping
    public List<Ingredient> getAllIngredients() {
        return ingredientRepository.findAll();
    }

    @PostMapping
    public Ingredient addIngredient(@RequestBody Ingredient ingredient) {
        Ingredient newIngredient = new Ingredient(ingredient.getName(), ingredient.getProtein());
        return ingredientRepository.save(newIngredient);
    }
}
