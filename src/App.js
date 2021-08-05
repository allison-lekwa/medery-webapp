import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/homepage';
import SigninPage from './pages/signin/signin';
import SignupPage from './pages/signup/signup';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/signup" component={SignupPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
