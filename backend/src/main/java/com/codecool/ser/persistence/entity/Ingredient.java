package com.codecool.ser.persistence.entity;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Setter
@Getter
public class Ingredient {
    @Id
    @GeneratedValue
    private int id;
    private String name;
    private int protein;

    public Ingredient() {
    }

    public Ingredient(String name, int protein) {
        this.name = name;
        this.protein = protein;
    }

    @Override
    public String toString() {
        return "Ingredient{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", protein=" + protein +
                '}';
    }
}
