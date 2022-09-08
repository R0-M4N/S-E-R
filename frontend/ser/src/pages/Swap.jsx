import Header from '../components/Header'
import IngredientSelect from '../components/IngredientSelect'

function Swap() {
  return (
    <div className='App'>
      <>
        <Header title={"Swapper"} />
        <IngredientSelect />
      </>
    </div>
  );
}

export default Swap;