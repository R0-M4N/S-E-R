import Home from '../../pages/Home';
import SwapIngredient from '../../pages/SwapIngredient';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Login from "../../pages/Login";
import BmiCalculator from '../../pages/BmiCalculator';

const Routing = () => {
  return (
    <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/swap' exact element={<SwapIngredient />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/bmi-calculator' element={<BmiCalculator />}/>
        </Routes>
    </Router>
  )
}

export default Routing