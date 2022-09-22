import { useState, useEffect } from "react";
import IngredientSelect from "./IngredientSelect";

function IngredientSwapper() {
    const [ingredients, setIngredients] = useState([]);
    const url = process.env.API_URL;
    const URL = url + "/ingredients";

    useEffect(() => {
            fetch(URL, {method: "GET"})
            .then(response => response.json())
            .then(ingredientData => setIngredients(ingredientData))
            .catch(error => console.log(error))
    },[]);

    return (
        <>
            <IngredientSelect ingredients={ingredients} />
        </>
    )
}

export default IngredientSwapper
