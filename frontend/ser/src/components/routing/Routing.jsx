import Home from '../../pages/Home';
import SwapIngredient from '../../pages/SwapIngredient';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Login from "../../pages/Login";

const Routing = () => {
  return (
    <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/swap' exact element={<SwapIngredient />} />
          <Route path='login' exact element={<Login />} />
        </Routes>
    </Router>
  )
}

export default Routing