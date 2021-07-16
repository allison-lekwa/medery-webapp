import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/homepage';

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
