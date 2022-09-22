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
    private final IngredientRepository ingredientRepository;

    public IngredientSwapService(IngredientRepository ingredientRepository) {
        this.ingredientRepository = ingredientRepository;
    }

    public Ingredient swapByProtein(long id){
        Ingredient pickedIngredient = ingredientRepository.findById(id);
        int amount = pickedIngredient.getProtein();
        List<Ingredient> ingredientList = ingredientRepository.findAllIngredientsByProteinIsBetween(amount - 5, amount + 5);
        return ingredientList.get(0);
    }
    public List<Ingredient> swapIngredientByCategoryAndProtein(IngredientCategory category, Ingredient pickedIngredient){
        int amount = pickedIngredient.getProtein();
        return ingredientRepository.findByCategoryAndProteinIsBetween(category, amount-5, amount+20);
    }

    public Ingredient findById(long id){
        return ingredientRepository.findById(id);
    }
}
