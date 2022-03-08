import './styles.css';
import Homepage from './pages/homepage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Init from './pages/init';
import Mesas from './pages/mesas';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/init" element={<Init />} />
          <Route path='/mesa/:id' element={<Mesas />} />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
