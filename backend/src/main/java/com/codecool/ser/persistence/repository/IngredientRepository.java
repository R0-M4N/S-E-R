package com.codecool.ser.persistence.repository;

import com.codecool.ser.persistence.entity.Ingredient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.webmvc.RepositoryRestController;

import java.util.List;

@RepositoryRestController
public interface IngredientRepository extends JpaRepository<Ingredient, Integer> {
    List<Ingredient> findByProteinLessThanEqual(int amount);
    List<Ingredient> findByNameStartingWithIgnoreCaseAndProteinLessThanEqual(String name, int amount);

    @Query("SELECT * FROM Ingredient WHERE protein BETWEEN :from and :to")
    List<Ingredient> findAllIngredientByProtein(@Param("from") int from, @Param("to") int to);

    Ingredient findByName(String name);
}
