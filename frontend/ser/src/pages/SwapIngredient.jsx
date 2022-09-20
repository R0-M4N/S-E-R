import FetchAndPostIngredient from '../components/swapIngredient/FetchAndPostIngredient';
import Header from "../components/header/Header";

function SwapIngredient() {
  return (
    <div className='App'>
      <>
        <Header title={"Swap ingredient"} />
        <FetchAndPostIngredient />
      </>
    </div>
  );
}

export default SwapIngredient;