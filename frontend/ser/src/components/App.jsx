import Header from './Header'
import IngredientSelect from './IngredientSelect';

function App() {
  const handleClick = () => {
    console.log("Your mama")
  }

  return (
    <div className='App'>
      <Header />
      <IngredientSelect onClick={handleClick} />
    </div>
  );
}

export default App;
