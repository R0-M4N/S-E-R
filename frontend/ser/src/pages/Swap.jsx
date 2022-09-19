import FetchAndPostIngredient from '../components/FetchAndPostIngredient';
import Header from "../components/header/Header";

function Swap() {
  return (
    <div className='App'>
      <>
        <Header title={"Swapper"} />
        <FetchAndPostIngredient />
      </>
    </div>
  );
}

export default Swap;