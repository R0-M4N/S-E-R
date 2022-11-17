package com.codecool.ser.endpoint;

import com.codecool.ser.data.IngredientCategory;
import com.codecool.ser.persistence.entity.Ingredient;
import com.codecool.ser.service.IngredientService;
import com.codecool.ser.service.IngredientSwapService;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("ingredients")
public class IngredientEndpoint {
    private final IngredientService ingredientService;
    private final IngredientSwapService ingredientSwapService;

    public IngredientEndpoint(IngredientService ingredientService, IngredientSwapService ingredientSwapService) {
        this.ingredientService = ingredientService;
        this.ingredientSwapService = ingredientSwapService;
    }

    @GetMapping
    public List<Ingredient> getAllIngredients() {
        return ingredientService.findAll();
    }

    @GetMapping("/swap/{id}")
    public List<Ingredient> swapByProtein(@PathVariable long id) throws IllegalArgumentException {
        List<Optional<Ingredient>> ingredientsOpt = ingredientSwapService.swapByProtein(id);
        List<Ingredient> ingredients = new ArrayList<>(ingredientsOpt.size());

        for (Optional<Ingredient> optionalIngredient : ingredientsOpt) {
            Ingredient ingredient = optionalIngredient.orElseThrow(IllegalArgumentException::new);
            ingredients.add(ingredient);
        }

        return ingredients;
    }

    @GetMapping("/swap/{category}/{id}")
    public List<Ingredient> swapByCategoryAndProtein(@PathVariable("category") IngredientCategory category, @PathVariable("id") long id) {
        Ingredient ingredient = ingredientSwapService.findById(id);
        return ingredientSwapService.swapIngredientByCategoryAndProtein(category, ingredient);
    }
}
