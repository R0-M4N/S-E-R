package com.codecool.ser.entity;

import java.util.HashMap;
import java.util.Map;

public class Ingredients {
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
    }};

}
