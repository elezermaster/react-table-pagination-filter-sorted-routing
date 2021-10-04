import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import LoginForm from "../components/loginForm";
import SignUpForm from "../components/signupForm";
import './login.css'

const Login = () => {
    return (
    <Router>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={LoginForm} />
            <Route path="/sign-in" component={LoginForm} />
            <Route path="/sign-up" component={SignUpForm} />
          </Switch>
        </div>
      </div>
    </Router>
    );
};

export default Login;
