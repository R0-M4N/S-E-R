import React from 'react';
import Header from './Header'
import Ingredients from './hooks/Ingredients';
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
        <Ingredients />
      </>
    </div>
  );
}

export default App;
