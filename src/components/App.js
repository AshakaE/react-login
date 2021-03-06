import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Success from './Success';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/success">
            <Success />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
