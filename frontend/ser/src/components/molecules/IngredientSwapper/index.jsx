import { useState, useEffect } from "react";
import IngredientSelect from "./IngredientSelect";

{/*process.env.API_URL for url*/}

function IngredientSwapper() {
    const [ingredients, setIngredients] = useState([]);
    const url = "http://localhost:8080"
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
