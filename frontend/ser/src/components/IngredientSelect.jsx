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

    const handleChange = event => {
        const value = event.target.value;
        console.log(value);
    }


        return (
            <FormControl sx={{minWidth:200, paddingLeft: 10}} className="select-container">
                <InputLabel sx={{paddingLeft:10}}>Select your ingredient</InputLabel>
                <Select onChange={handleChange} defaultValue=''>
                    {ingredients.map ((ingredient) => 
                    <MenuItem key={ingredient.id} value={ingredient.name}>
                        {ingredient.name}
                    </MenuItem>
                    )}
                </Select>
            </FormControl>
        )
}  

