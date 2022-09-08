import FetchIngredients from './FetchIngredients';
import Sidebar from './Sidebar';
import Overview from '../pages/Overview';
import Swap from '../pages/Swap';
import '../index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Header from './Header';

function App() {
  return (
    <div className='App'>
      <>
        <Router>
          <Header />
          <Sidebar />
          <Routes>
            <Route path='/' exact element={<Overview />} />
            <Route path='/swap' exact element={<Swap />} />
          </Routes>
        </Router>
        <FetchIngredients />
      </>
    </div>
  );
}

export default App;
