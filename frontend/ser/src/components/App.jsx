import Sidebar from './Sidebar';
import Overview from '../pages/Overview';
import Swap from '../pages/Swap';
import '../index.css';
import Header from './Header';
import Routing from './Routing';

function App() {
  return (
    <div className='App'>
      <>
        <Header />
        <Routing />
      </>
    </div>
  );
}

export default App;
