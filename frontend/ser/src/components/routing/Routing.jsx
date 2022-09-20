import Sidebar from '../sidebar/Sidebar';
import Home from '../../pages/Home';
import SwapIngredient from '../../pages/SwapIngredient';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';

const Routing = () => {
  return (
    <Router>
        <Sidebar />
        <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/swap' exact element={<SwapIngredient />} />
        </Routes>
    </Router>
  )
}

export default Routing