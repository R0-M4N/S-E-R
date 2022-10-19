package com.codecool.ser.persistence.repository;

import com.codecool.ser.data.IngredientCategory;
import com.codecool.ser.persistence.entity.Ingredient;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

//@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)

@DataJpaTest
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class IngredientRepositoryTest {
    @Autowired
    IngredientRepository ingredientRepository;

    TestIngredientsProvider provider = new TestIngredientsProvider();

    @BeforeAll
    void addAllData(){ingredientRepository.saveAll(provider.getIngredient()); }

    @AfterAll
    void after(){
        ingredientRepository.deleteAll();
    }

    @Test
    void findByCategoryAndProteinIsBetween() {
        List<Ingredient> ingredientList = ingredientRepository.findAll();
        List<Ingredient> ingredientResult = ingredientRepository.
                findByCategoryAndProteinIsBetween(IngredientCategory.MEAT, 5, 30);
        Ingredient expected = ingredientList.get(4);
        System.out.println(expected +" "+ ingredientResult.get(0));

        Assertions.assertEquals(expected, ingredientResult.get(0));
        //Assertions.assertIterableEquals(expected, ingredientResult);
    }
}