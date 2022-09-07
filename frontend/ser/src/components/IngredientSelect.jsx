import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import {Ingredients} from './hooks/Ingredients';

const IngredientSelect = ({ onClick }) => {
    console.log(Ingredients)

  return (
    <FormControl fullWidth>
        <InputLabel id='ingredient-select-label'>Select ingredient</InputLabel>
        <Select
        labelId='ingredient-select-label'
        id='ingredient-select'
        // value
        label='Ingredient'
        onClick={onClick}
        >
            <MenuItem value={20}>Twenty</MenuItem>
        </Select>
    </FormControl>
  )
}

export default IngredientSelect