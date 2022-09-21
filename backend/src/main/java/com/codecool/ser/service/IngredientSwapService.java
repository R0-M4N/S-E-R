package com.codecool.ser.service;

import com.codecool.ser.data.IngredientCategory;
import com.codecool.ser.entity.IngredientPairs;
import com.codecool.ser.persistence.entity.Ingredient;
import com.codecool.ser.persistence.repository.IngredientRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class IngredientSwapService {
    Map<String, String> ingredientPairs = IngredientPairs.INGREDIENTS;
    private final IngredientRepository ingredientRepository;

    public IngredientSwapService(IngredientRepository ingredientRepository) {
        this.ingredientRepository = ingredientRepository;
    }

    public Ingredient swapIngredients(Ingredient pickedIngredient) {
        String pickedIngredientName = pickedIngredient.getName();
        String swappedIngredientName = ingredientPairs.get(pickedIngredientName);
        return ingredientRepository.findByName(swappedIngredientName);
    }

    public List<Ingredient> swapByProtein(Ingredient pickedIngredient){
        int amount = pickedIngredient.getProtein();
        return ingredientRepository.findAllIngredientsByProtein(amount -5, amount +5);
    }
    public List<Ingredient> swapIngredientByCategoryAndProtein(IngredientCategory category, Ingredient pickedIngredient){
        int amount = pickedIngredient.getProtein();
        return ingredientRepository.findByCategoryAndProteinIsBetween(category, amount-5, amount+20);
    }

    public Ingredient findById(Long id){
        return ingredientRepository.findById(id).orElseThrow(IllegalArgumentException::new);
    }
}
