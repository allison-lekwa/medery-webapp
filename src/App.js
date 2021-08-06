import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import{ connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'; 

import './App.css';
import Home from './pages/homepage';
import SigninPage from './pages/signin/signin';
import SignupPage from './pages/signup/signup';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import {setCurrentUser} from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends React.Component {
  constructor (){
    super()
    this.state = {
      isOpen: false
    }
  }

  unsubcribedFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubcribedFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            
              id: snapShot.id,
              ...snapShot.data()
            
          })
        });
      }
      setCurrentUser(userAuth)
    })
  }
  componentWillUnmount() {
    this.unsubcribedFromAuth();    
  };
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen});
  }
  render() {
    const isOpen = this.state.isOpen;

    return ( 
      <Router>
        <Sidebar isOpen={isOpen} toggle={this.toggle} />
        <Navbar toggle={this.toggle} />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" render={() =>
            this.props.currentUser ? (
              <Redirect to='/' />
            ) : (
              <SigninPage />
            )
            }
          />

          <Route path="/signup" render={() =>
            this.props.currentUser ? (
              <Redirect to='/' />
            ) : (
              <SignupPage />
            )
            }
          />
        </Switch>
      </Router>
    );

  }
  
}

const mapStateToProps = createStructuredSelector ({ 
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
