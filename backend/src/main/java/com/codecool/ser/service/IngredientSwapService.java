package com.codecool.ser.service;

import com.codecool.ser.entity.Ingredients;
import com.codecool.ser.persistence.entity.Ingredient;
import com.codecool.ser.persistence.repository.IngredientRepository;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class IngredientSwapService {
    Map<String, String> ingredientPairs = Ingredients.INGREDIENTS;
    private final IngredientRepository ingredientRepository;

    public IngredientSwapService(IngredientRepository ingredientRepository) {
        this.ingredientRepository = ingredientRepository;
    }

    public Ingredient swapIngredients(Ingredient pickedIngredient) {
        String pickedIngredientName = pickedIngredient.getName();
        String swappedIngredientName = ingredientPairs.get(pickedIngredientName);
        Ingredient exchangedIngredient = ingredientRepository.findByName(swappedIngredientName);

        return exchangedIngredient;
    }
}
