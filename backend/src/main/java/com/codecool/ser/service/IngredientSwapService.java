package com.codecool.ser.service;

import com.codecool.ser.data.IngredientCategory;
import com.codecool.ser.persistence.entity.Ingredient;
import com.codecool.ser.persistence.repository.IngredientRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IngredientSwapService {
    private final IngredientRepository ingredientRepository;
    private static final int LOWER_RANGE = 5;
    private static final int UPPER_RANGE = 20;
    public IngredientSwapService(IngredientRepository ingredientRepository) {
        this.ingredientRepository = ingredientRepository;
    }

    public List<Optional<Ingredient>> swapByProtein(long id) {
        Ingredient pickedIngredient = findById(id);
        int proteinCount = pickedIngredient.getProtein();

        return ingredientRepository.findAllIngredientsByProteinIsBetweenAndNameIsNot(
                proteinCount - LOWER_RANGE, proteinCount + UPPER_RANGE, pickedIngredient.getName());
    }

    public List<Ingredient> swapIngredientByCategoryAndProtein(IngredientCategory category, Ingredient pickedIngredient) {
        int amount = pickedIngredient.getProtein();
        return ingredientRepository.findByCategoryAndProteinIsBetween(category, amount - LOWER_RANGE, amount + UPPER_RANGE);
    }

    public Ingredient findById(Long id) {
        return ingredientRepository.getReferenceById(id);
    }
}
