package com.codecool.ser.persistence.repository;

import com.codecool.ser.data.IngredientCategory;
import com.codecool.ser.persistence.entity.Ingredient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.webmvc.RepositoryRestController;

import java.util.List;
import java.util.Optional;

@RepositoryRestController
public interface IngredientRepository extends JpaRepository<Ingredient, Long> {

    List<Optional<Ingredient>> findAllIngredientsByProteinIsBetweenAndNameIsNot(
            int proteinMin, int proteinMax, String name);

    List<Ingredient> findByCategoryAndProteinIsBetween
            (IngredientCategory category, int proteinMin, int proteinMax);
}