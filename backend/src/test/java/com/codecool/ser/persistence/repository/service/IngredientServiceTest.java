package com.codecool.ser.persistence.repository.service;

import com.codecool.ser.persistence.repository.IngredientRepository;
import com.codecool.ser.persistence.entity.Ingredient;
import com.codecool.ser.service.IngredientService;
import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;

class IngredientServiceTest {

    IngredientRepository ingredientRepository = mock(IngredientRepository.class);
    IngredientService ingredientService = new IngredientService(ingredientRepository);

    @Test
    void findAll() {
        ingredientService.findAll();

        verify(ingredientRepository).findAll();
    }

}