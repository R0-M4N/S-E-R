import Sidebar from './Sidebar';
import Overview from '../pages/Overview';
import Swap from '../pages/Swap';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';

const Routing = () => {
  return (
    <Router>
        <Sidebar />
        <Routes>
        <Route path='/' exact element={<Overview />} />
        <Route path='/swap' exact element={<Swap />} />
        </Routes>
    </Router>
  )
}

export default Routing