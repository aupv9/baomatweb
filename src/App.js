import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import { createBrowserHistory } from 'history';
import PrivateRoute from './components/private_router';
import Header from './components/header';
import LoginPage from './views/Login';
import RegisterPage from './views/Register';
import Home from './layouts/home';
export const history = createBrowserHistory();




function App() {
  return (
    <>
        <Router history={history}>
            <Header />
            <Switch>
                <PrivateRoute exact path="/home" component={Home} />
                <PrivateRoute  path="/home/login" component={LoginPage} />
                <PrivateRoute  path="/home/register" component={RegisterPage} />

                <PrivateRoute exact path="/admin" component={LoginPage} />
                <PrivateRoute  path="/admin/user-management" component={LoginPage} />
                <Redirect from="/" to="/home" />
            </Switch>
                   
        </Router>
    </>
  );
}

export default App;
