import { useState, useEffect } from "react";
import IngredientSelect from "./IngredientSelect";

export default function FetchIngredients() {
    const URL = "http://localhost:8080/ingredients";
    const [ingredients, setIngredients] = useState([]);


    useEffect(() => {
            fetch(URL, {method: "GET"})
            .then(response => response.json())
            .then(ingredientData => setIngredients(ingredientData))
            .catch(error => console.log(error));
    },[]);

        return (
           <IngredientSelect ingredients={ingredients} /> 
        )
}  

