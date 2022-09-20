package com.codecool.ser.service;

import com.codecool.ser.entity.IngredientPairs;
import com.codecool.ser.persistence.entity.Ingredient;
import com.codecool.ser.persistence.repository.IngredientRepository;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class IngredientSwapService {
    Map<String, String> ingredientPairs = IngredientPairs.INGREDIENTS;
    private final IngredientRepository ingredientRepository;

    public IngredientSwapService(IngredientRepository ingredientRepository) {
        this.ingredientRepository = ingredientRepository;
    }

    public Ingredient swapIngredients(String name) {
        String swappedIngredientName = ingredientPairs.get(name);
        return ingredientRepository.findByName(swappedIngredientName);
    }
}
