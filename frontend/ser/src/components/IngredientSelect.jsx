import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const IngredientSelect = ({ ingredients }) => {
    const handleChange = event => {
        const value = event.target.value;
        console.log(value);
    }

    return (
        <FormControl sx={{minWidth:200, paddingLeft: 50}} className="select-container">
                <InputLabel sx={{paddingLeft:50}}>Select your ingredient</InputLabel>
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

export default IngredientSelect