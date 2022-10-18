package com.codecool.ser.persistence.repository;

import com.codecool.ser.data.IngredientCategory;
import com.codecool.ser.persistence.entity.Ingredient;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@ExtendWith(SpringExtension.class)
@DataJpaTest
//@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
class IngredientRepositoryTest {

    @Autowired
    TestEntityManager entityManager;
    @Autowired
    IngredientRepository ingredientRepository;

    //@Autowired
    TestIngredientsProvider provider = new TestIngredientsProvider();

    @AfterEach
    void after(){
        ingredientRepository.deleteAll();
    }

    @Test
    void findByCategoryAndProteinIsBetween() {
        ingredientRepository.saveAll(provider.getIngredient());
        List<Ingredient> ingredient = ingredientRepository.findByCategoryAndProteinIsBetween(IngredientCategory.MEAT, 5, 30);

        //String something = provider.getSomething();
        //System.out.println("something = " + something);
        //Assertions.assertEquals(List.of(test5), ingredient);
        //Assertions.assertIterableEquals(List.of(test5), ingredient);
    }
}