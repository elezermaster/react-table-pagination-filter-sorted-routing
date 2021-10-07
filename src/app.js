import React, {useState,useEffect} from 'react';
import Users from './components/users'
import NavBar from './components/navBar';
import {BrowserRouter,Redirect,Route,Switch,Link, NavLink} from 'react-router-dom'
import Home from './screens/home'
import PageNotFound from './screens/pageNotFound'
import LoginForm from './screens/loginForm'
import SignUpForm from './screens/signupForm'

export const UsersSearchContext = React.createContext()
function App() {
  const [searchStatus,setSearchStatus] = useState('')
  const [clearSearch, setClearSearch] = useState('')
  const handleSelectedProf = (item) => {
    //if (item) {
      console.log('item in app',item)
      setClearSearch('')
      setSearchStatus("")
      handleSearchChange("")
    //}
  }
  const handleSearchChange = (searchString) => {
    setSearchStatus(searchString)
    //console.log('searchString',searchString)
  }
  useEffect(() => {
    console.log('effect for cleaning search',searchStatus)
    setClearSearch('')
    //setSearchStatus("")
  },[handleSelectedProf])

  // const isGroupListSelected = (val) => {
  //   console.log('val', val)
  // }
  //const isGroupListSelected
  return (
    <div className="App">
      <UsersSearchContext.Provider value={searchStatus} clear={clearSearch}>
      <BrowserRouter>
      <NavBar handleSearchChange={handleSearchChange} clearSearch={clearSearch}/>
      <Switch>
        <Route
          exact
          path="/users/:userId?"
          render={(props) => {
            return true && <Users searchStatus={searchStatus} handleSelectedProf={handleSelectedProf} {...props}/>
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
      </UsersSearchContext.Provider>
    </div>
  );
}

export default App;
