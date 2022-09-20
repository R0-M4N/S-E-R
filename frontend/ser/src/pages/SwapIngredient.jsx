import IngredientSwapper from '../components/molecules/IngredientSwapper';
import Header from "../components/header/Header";

function SwapIngredient() {
  return (
    <div className='App'>
      <>
        <Header title="Swap ingredient" /> {/* put Header into layout later */}
        <IngredientSwapper />
      </>
    </div>
  );
}

export default SwapIngredient;