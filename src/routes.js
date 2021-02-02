import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from "./pages/Login";
import Home from "./pages/Home";

const Routes = () => {

  const loggedIn = localStorage.getItem('@user');

  return (
    <BrowserRouter>
      <Switch>
        {!loggedIn && 
          <Route path="/" exact component={Login} />
        }
        {loggedIn && 
          <Route path="/" exact component={Home} />
        }
      </Switch>
    </BrowserRouter>
  )
} 

export default Routes;