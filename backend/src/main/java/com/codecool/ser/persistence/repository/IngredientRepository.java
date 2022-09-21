package com.codecool.ser.persistence.repository;

import com.codecool.ser.persistence.entity.Ingredient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.webmvc.RepositoryRestController;

import java.util.List;

@RepositoryRestController
public interface IngredientRepository extends JpaRepository<Ingredient, Integer> {
    List<Ingredient> findByProteinLessThanEqual(int amount);
    List<Ingredient> findByNameStartingWithIgnoreCaseAndProteinLessThanEqual(String name, int amount);
    Ingredient findByName(String name);
    Ingredient findById(long id);
}
