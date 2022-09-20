package com.codecool.ser.entity;

import org.springframework.data.rest.webmvc.RepositoryRestController;

import java.util.HashMap;
import java.util.Map;

@RepositoryRestController
public class IngredientPairs {
    public static final Map<String, String> INGREDIENTS = new HashMap<>()
    {{
        put("Chicken meat", "Shrimp");
        put("Pineapple", "Grape");
        put("Milk", "Cheese");
        put("Kale", "Bread");
        put("Cow meat", "Hazelnut");
        put("Hazelnut", "Cow meat");
        put("Bread", "Kale");
        put("Cheese", "Milk");
        put("Grape", "Pineapple");
        put("Shrimp", "Chicken meat");
        put("Water", "Milk");
    }};

}
