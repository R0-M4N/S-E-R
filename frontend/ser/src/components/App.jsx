import IngredientSelect from './IngredientSelect';
import '../index.css';
import Header from './Header';
import Routing from './Routing';

function App() {
  return (
    <div className='App'>
      <>
        <Header />
        <Routing />
        <IngredientSelect />
      </>
    </div>
  );
}

export default App;
