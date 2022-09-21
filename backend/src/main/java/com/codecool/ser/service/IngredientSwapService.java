package com.codecool.ser.service;

import com.codecool.ser.entity.IngredientPairs;
import com.codecool.ser.persistence.entity.Ingredient;
import com.codecool.ser.persistence.repository.IngredientRepository;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class IngredientSwapService {
    Map<String, String> ingredientNamePairs = IngredientPairs.INGREDIENTS;
    private final IngredientRepository ingredientRepository;

    public IngredientSwapService(IngredientRepository ingredientRepository) {
        this.ingredientRepository = ingredientRepository;
    }

    public Ingredient swapIngredients(long id) {
        Ingredient swappedIngredient = ingredientRepository.findById(id);
        String swappedIngredientName = ingredientNamePairs.get(swappedIngredient.getName());
        return ingredientRepository.findByName(swappedIngredientName);
    }
}
