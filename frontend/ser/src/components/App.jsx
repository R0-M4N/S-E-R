import Header from './Header'
import IngredientSelect from './IngredientSelect'
import Sidebar from './Sidebar';
import Overview from '../pages/Overview';
import Swap from '../pages/Swap';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <>
        <Router>
          <Sidebar />
          <Routes>
            <Route path='/' exact element={<Overview />} />
            <Route path='/swap' exact element={<Swap />} />
          </Routes>
        </Router>
        <Header />
          <IngredientSelect />
      </>
    </div>
  );
}

export default App;
