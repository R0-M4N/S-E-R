package com.codecool.ser.service;

import com.codecool.ser.entity.Ingredients;
import com.codecool.ser.persistence.entity.Ingredient;

import java.util.Map;

public class SwapperService {
    Map<String, String> ingredientPairs = Ingredients.INGREDIENTS;

    public String swapIngredients(Ingredient pickedIngredient) {
        String pickedIngredientName = pickedIngredient.getName();
        String exchangedIngredient = "";

        if (ingredientPairs.containsKey(pickedIngredient)) {
            exchangedIngredient = ingredientPairs.get(pickedIngredient);
        }

        return exchangedIngredient;
    }
}
