import { useState, useEffect } from "react";
import IngredientSelect from "./ingredientSelect/IngredientSelect";

function FetchAndPostIngredient() {
    const URL = "http://localhost:8080/ingredients";
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
            fetch(URL, {method: "GET"})
            .then(response => response.json())
            .then(ingredientData => setIngredients(ingredientData))
            .catch(error => console.log(error));
    },[]);

    const handleChange = event => {
        const value = event.target.value;
        fetch('http://localhost:8080/ingredients/swap', {
            method: 'POST',
            body: JSON.stringify({
              'name': value.name,
              'protein': value.protein
            })
            ,headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
          })
          .then((response) => response.json())
          .then((data) => console.log(data))
    }

    return (
        <IngredientSelect ingredients={ingredients} onChange={handleChange} />
    )
}

export default FetchAndPostIngredient
