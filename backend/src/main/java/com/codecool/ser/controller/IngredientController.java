package com.codecool.ser.controller;

import com.codecool.ser.persistence.repository.IngredientRepository;
import com.codecool.ser.service.IngredientService;
import com.codecool.ser.persistence.entity.Ingredient;
import com.codecool.ser.service.SwapperService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("ingredients")
public class IngredientController {
    private final IngredientRepository ingredientRepository;
    private final IngredientService ingredientService;
    private final SwapperService swapperService;

    public IngredientController(IngredientRepository ingredientRepository, IngredientService ingredientService, SwapperService swapperService) {
        this.ingredientRepository = ingredientRepository;
        this.ingredientService = ingredientService;
        this.swapperService = swapperService;
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

    @PostMapping("/swap")
    public String swapIngredient(@RequestBody Ingredient ingredient){
        return swapperService.swapIngredients(ingredient);
    }
}
