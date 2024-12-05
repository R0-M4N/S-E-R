package com.codecool.ser.persistence.repository;

import com.codecool.ser.data.IngredientCategory;
import com.codecool.ser.persistence.entity.Ingredient;
import org.springframework.stereotype.Repository;

import java.util.List;

public class TestIngredientsProvider {
    List<Ingredient> getIngredient(){
        return List.of(new Ingredient("test1", 1, IngredientCategory.FRUIT),
                        new Ingredient("test2", 2, IngredientCategory.FRUIT),
                        new Ingredient("test3", 3, IngredientCategory.MEAT),
                        new Ingredient("test4", 4, IngredientCategory.MEAT),
                        new Ingredient("test5", 5, IngredientCategory.MEAT));
    }
}