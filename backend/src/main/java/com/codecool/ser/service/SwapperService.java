package com.codecool.ser.service;

import com.codecool.ser.entity.Ingredients;

import java.util.Map;

public class SwapperService {
    Map<String, String> ingredientPairs = Ingredients.INGREDIENTS;

    public String swapIngredients(String pickedIngredient) {
        String exchangedIngredient = "";

        if (ingredientPairs.containsKey(pickedIngredient)) {
            exchangedIngredient = ingredientPairs.get(pickedIngredient);
        }

        return exchangedIngredient;
    }
}
