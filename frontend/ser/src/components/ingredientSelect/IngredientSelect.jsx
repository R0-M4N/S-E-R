import {FormControl, Select, InputLabel, MenuItem} from '@mui/material'

const IngredientSelect = ({ ingredients, onChange }) => {
  return (
    <FormControl sx={{minWidth:200, paddingLeft: 50}} className="select-container">
        <InputLabel sx={{paddingLeft:50}}>Select your ingredient</InputLabel>
        <Select onChange={onChange} defaultValue=''>
            {ingredients.map ((ingredient) => 
            <MenuItem key={ingredient.id} value={{'id': ingredient.id, 'name': ingredient.name, 'protein': ingredient.protein}}>
                {ingredient.name}
            </MenuItem>
            )}
        </Select>
    </FormControl>
  )
}

export default IngredientSelect