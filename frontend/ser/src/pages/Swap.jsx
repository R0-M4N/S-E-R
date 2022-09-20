import FetchAndPostIngredient from '../components/FetchAndPostIngredient';
import Header from '../components/Header'

function Swap() {
  return (
    <div className='Swap'>
        <Header title={"Swapper"} />
        <FetchAndPostIngredient />
    </div>
  );
}

export default Swap;