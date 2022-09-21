import IngredientSwapper from '../components/molecules/IngredientSwapper';
import HeaderLayout from "../components/layouts/header/HeaderLayout";

function SwapIngredient() {
  return (
    <div className='App'>
      <>
        <HeaderLayout title="Swap ingredient" /> {/* put Header into layout later */}
        <IngredientSwapper />
      </>
    </div>
  );
}

export default SwapIngredient;