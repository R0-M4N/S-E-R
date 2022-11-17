import './swap.css';
import {FormControl, MenuItem, TextField} from '@mui/material';
import ShowResult from './ShowResult';
import { useState } from 'react';
import { CircularProgress } from '@mui/material';

const IngredientSelect = ({ ingredients }) => {
  const [exchangedIngredients, setExchangedIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = event => {
    const value = event.target.value;
    const URL = "http://localhost:8080/ingredients/swap/" + value; //Figure the environment variables out!!!
    setIsLoading(true);
    fetch(URL, {method: 'GET'})
      .then((response) => response.json())
      .then((data) => setExchangedIngredients(data))
    
    setTimeout(() => {
      setIsLoading(false);
    }, 800)
  }

  return (
    <div className='ingredient-swapper'>
    <FormControl className='select-form' sx={{minWidth:200, paddingLeft: 50, top: 80, float: 'left'}}>
      <TextField
        variant="outlined"
        value={ingredients.id}
        onChange={handleChange}
        className="select-container"
        select
        label="Select your ingredient"
        defaultValue={''}>
          {ingredients.map((ingredient) =>
          <MenuItem className='select-item' key={ingredient.id} value={ingredient.id}>
              {ingredient.name}
          </MenuItem>
          )}
      </TextField>
    </FormControl>
    {isLoading ? 
      <CircularProgress className='circular-progress' color="inherit" /> :
      <ShowResult result={exchangedIngredients}/>
    }
    </div>
  )
}

export default IngredientSelect