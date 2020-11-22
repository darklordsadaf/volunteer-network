import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Details from './components/Details/Details';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import NoMatch from './NoMatch/NoMatch';

export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home" >
            <Home />
          </Route>
          <Route path="/login" >
            <Login></Login>
          </Route>
          <PrivateRoute path="/register" >
            <Register></Register>
          </PrivateRoute>
          <Route path="/details" >
            <Details></Details>
          </Route>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
