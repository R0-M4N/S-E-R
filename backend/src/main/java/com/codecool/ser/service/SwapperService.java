package com.codecool.ser.service;

import com.codecool.ser.entity.Ingredients;
import com.codecool.ser.persistence.entity.Ingredient;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class SwapperService {
    Map<String, String> ingredientPairs = Ingredients.INGREDIENTS;


    public String swapIngredients(Ingredient pickedIngredient) {
        String pickedIngredientName = pickedIngredient.getName();
        String exchangedIngredient = "";

        if (ingredientPairs.containsKey(pickedIngredientName)) {
            exchangedIngredient = ingredientPairs.get(pickedIngredientName);
        }

        return exchangedIngredient;
    }
}
