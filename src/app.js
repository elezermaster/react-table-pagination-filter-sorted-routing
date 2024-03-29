import React, {useState,useEffect} from 'react';
import Users from './components/users'
import NavBar from './components/navBar';
import {BrowserRouter,Redirect,Route,Switch,Link, NavLink} from 'react-router-dom'
import Home from './screens/home'
import PageNotFound from './screens/pageNotFound'
import LoginForm from './screens/forms/loginForm'
import RegisterForm from './screens/forms/registerForm'
import EditForm from './screens/forms/editForm'
import UserProfile from './screens/userProfile'
import './index.css'

export const UsersSearchContext = React.createContext()
function App() {
  const [searchStatus,setSearchStatus] = useState('')
  const handleSelectedProf = (item) => {
      console.log('item in app',item)
      setSearchStatus("")
      handleSearchChange("")
  }
  const handleSearchChange = (searchString) => {
    setSearchStatus(searchString)
    //console.log('searchString',searchString)
  }

  return (
    <div className="App container">
      <UsersSearchContext.Provider value={searchStatus} >
      <BrowserRouter>
      <NavBar handleSearchChange={handleSearchChange}/>
      <Switch>
        <Route
          exact
          path="/users/:userId?"
          render={(props) => {
            return <Users searchStatus={searchStatus} handleSelectedProf={handleSelectedProf} {...props}/>
          }}
        />
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/edit/:id?" component={EditForm} />
        <Route
          exact
          path="/404"
          component={PageNotFound}
        />
        <Redirect from="/admin" to="/home"/>
        <Redirect to="/404"/>
        </Switch>
      </BrowserRouter>
      </UsersSearchContext.Provider>
    </div>
  );
}

export default App;
