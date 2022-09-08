import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from "react";
import { useEffect } from "react";

export default function IngredientSelect() {
    const URL = "http://localhost:8080/ingredients";
    const [ingredients, setIngredients] = useState([]);


    useEffect(() => {
            fetch(URL, {method: "GET"})
            .then(response => response.json())
            .then(ingredientData => setIngredients(ingredientData));
    },[]);

        return (
            <FormControl sx={{minWidth:200, paddingLeft: 50}} className="select-container">
                Select your Ingredient
                <Select>
                    {ingredients.map ((ingredient) => 
                    <MenuItem key={ingredient.id}>
                        {ingredient.name}
                    </MenuItem>
                    )}
                </Select>
            </FormControl>
        )
}  

