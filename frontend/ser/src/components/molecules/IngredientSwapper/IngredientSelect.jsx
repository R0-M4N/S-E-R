import {FormControl, Select, InputLabel, MenuItem} from '@mui/material'
import ShowResult from './ShowResult';
import { useState } from "react";

const IngredientSelect = ({ ingredients }) => {
  const [exchangedIngredient, setExchangedIngredient] = useState({id: '', name: '', protein: ''});

  const handleChange = event => {
    const value = event.target.value;
    const url = process.env.API_URL;
    const URL = url + '/ingredients/swap/' + value;
    fetch(URL, {method: 'GET'})
      .then((response) => response.json())
      .then((data) => setExchangedIngredient(data))
}
  return (
    <>
    <FormControl sx={{minWidth:200, paddingLeft: 50}} className="select-container">
        <InputLabel sx={{paddingLeft:50}}>Select your ingredient</InputLabel>
        <Select defaultValue=''  onChange={handleChange}>
            {ingredients.map ((ingredient) => 
            <MenuItem key={ingredient.id} value={ingredient.id}>
                {ingredient.name}
            </MenuItem>
            )}
        </Select>
    </FormControl>
    <ShowResult result={exchangedIngredient}/>
    </>
  )
}

export default IngredientSelect