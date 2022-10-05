package com.codecool.ser.persistence.repository;

import com.codecool.ser.data.IngredientCategory;
import com.codecool.ser.persistence.entity.Ingredient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.webmvc.RepositoryRestController;

import java.util.List;

@RepositoryRestController
public interface IngredientRepository extends JpaRepository<Ingredient, Long> {
    List<Ingredient> findAllIngredientsByProteinIsBetween(int protein, int protein2);

    List<Ingredient> findByCategoryAndProteinIsBetween
            (IngredientCategory category, int protein, int protein2);

    Ingredient findById(long id);
}
