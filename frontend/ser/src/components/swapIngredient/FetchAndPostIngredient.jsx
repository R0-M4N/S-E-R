import { useState, useEffect } from "react";
import IngredientSelect from "./IngredientSelect";

function FetchAndPostIngredient() {
    const URL = "http://localhost:8080/ingredients";
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
            fetch(URL, {method: "GET"})
            .then(response => response.json())
            .then(ingredientData => setIngredients(ingredientData))
            .then(console.log("after first rerender"))
            .catch(error => console.log(error))
    },[]);

    return (
        <>
            <IngredientSelect ingredients={ingredients} />
        </>
    )
}

export default FetchAndPostIngredient
