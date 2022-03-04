import './styles.css';
import Homepage from './pages/homepage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Init from './pages/init';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/init" element={<Init />} />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
