import React from 'react';
import Users from './components/users'
import NavBar from './components/navBar';
import {BrowserRouter,Redirect,Route,Switch,Link, NavLink} from 'react-router-dom'
import Home from './screens/home'
import PageNotFound from './screens/pageNotFound'
<<<<<<< HEAD
import LoginForm from './components/loginForm'
import SignUpForm from './components/signupForm'
=======
import LoginForm from './screens/loginForm'
import SignUpForm from './screens/signupForm'
>>>>>>> ee25cd95f91847df0e3b236c13c9b07a14d4a8f7

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route
          exact
          path="/users/:userId?"
          render={(props) => {
            return true && <Users isAdmin={false} {...props}/>
          }}
        />
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route exact path="/sign-in" component={LoginForm} />
        <Route exact path="/sign-up" component={SignUpForm} />
        <Route
          exact
          path="/404"
          component={PageNotFound}
        />
        <Redirect from="/admin" to="/home"/>
        <Redirect to="/404"/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
