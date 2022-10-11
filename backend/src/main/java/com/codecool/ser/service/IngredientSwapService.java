package com.codecool.ser.service;

import com.codecool.ser.data.IngredientCategory;
import com.codecool.ser.persistence.entity.Ingredient;
import com.codecool.ser.persistence.repository.IngredientRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IngredientSwapService {
    private final IngredientRepository ingredientRepository;

    public IngredientSwapService(IngredientRepository ingredientRepository) {
        this.ingredientRepository = ingredientRepository;
    }

    public Ingredient swapByProtein(long id) {
        Ingredient pickedIngredient = findById(id);
        int proteinCount = pickedIngredient.getProtein();
        List<Ingredient> eligibleIngredients = ingredientRepository.findAllIngredientsByProteinIsBetweenAndNameIsNot(
                proteinCount - 8, proteinCount + 20, pickedIngredient.getName());
        if (eligibleIngredients.isEmpty()) {
            return new Ingredient("No match found", 0, null);
        }
        return eligibleIngredients.get(0);
    }

    public List<Ingredient> swapIngredientByCategoryAndProtein(IngredientCategory category, Ingredient pickedIngredient) {
        int amount = pickedIngredient.getProtein();
        return ingredientRepository.findByCategoryAndProteinIsBetween(category, amount - 5, amount + 20);
    }

    public Ingredient findById(Long id) {
        return ingredientRepository.getReferenceById(id);
    }
}
