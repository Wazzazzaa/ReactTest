import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import Login from './views/Login'
import Logout from './views/Logout'
import Nav from './components/Nav';
import Home from './views/Home'
import Single from './views/Single'
import Profile from './views/Profile'
import {MediaProvider} from './Contexts/MediaContext';

  const App =()=> {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <MediaProvider>
        <Nav/>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/home" component={Home}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/single/:id" component={Single}/>
          <Route path="/logout" component={Logout}/>
        </Switch>
        </MediaProvider>
      </Router>
  );
};

export default App;