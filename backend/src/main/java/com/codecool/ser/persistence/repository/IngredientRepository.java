package com.codecool.ser.persistence.repository;

import com.codecool.ser.data.IngredientCategory;
import com.codecool.ser.persistence.entity.Ingredient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.webmvc.RepositoryRestController;

import java.util.List;

@RepositoryRestController
public interface IngredientRepository extends JpaRepository<Ingredient, Long> {
    List<Ingredient> findByProteinLessThanEqual(int amount);
    List<Ingredient> findByNameStartingWithIgnoreCaseAndProteinLessThanEqual(String name, int amount);
    @Query("SELECT i FROM Ingredient i WHERE i.protein BETWEEN :min and :max")
    List<Ingredient> findAllIngredientsByProtein(@Param("min") int min, @Param("max") int max);
    List<Ingredient> findByCategoryAndProteinIsBetween(IngredientCategory category, int protein, int protein2);

    Ingredient findByName(String name);
    Ingredient findById(long id);
}
