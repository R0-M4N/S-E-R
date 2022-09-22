package com.codecool.ser.endpoint;

import com.codecool.ser.data.IngredientCategory;
import com.codecool.ser.persistence.repository.IngredientRepository;
import com.codecool.ser.service.IngredientService;
import com.codecool.ser.persistence.entity.Ingredient;
import com.codecool.ser.service.IngredientSwapService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @PostMapping
    public Ingredient addIngredient(@RequestBody Ingredient ingredient) {
        return ingredientService.addIngredient(ingredient);
    }


//    @PostMapping("/swap")
//    public Ingredient swapIngredient(@RequestBody Ingredient ingredient){
//        return ingredientSwapService.swapIngredients(ingredient);
//    }

    @PostMapping("/swap")
    public List<Ingredient> swapByProtein(@RequestBody Ingredient ingredient){
        return ingredientSwapService.swapByProtein(ingredient);
    }

    @GetMapping("/swap/{category}/{id}")
    public List<Ingredient> swapByCategoryAndProtein(@PathVariable ("category") IngredientCategory category, @PathVariable ("id") Long id){

        System.out.println(category);
        Ingredient ingredient = ingredientSwapService.findById(id);
        return ingredientSwapService.swapIngredientByCategoryAndProtein(category, ingredient);

    @GetMapping("/swap/{id}")
    public Ingredient swapIngredient(@PathVariable long id){
        return ingredientSwapService.swapIngredients(id);

    }
}
