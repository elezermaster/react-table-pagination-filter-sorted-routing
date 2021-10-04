import React,{useState,useEffect} from 'react';
import Users from './components/users'
import api from './API'
import NavBar from './components/navBar';
import {BrowserRouter,Redirect,Route,Switch,Link, NavLink} from 'react-router-dom'
import Home from './screens/home'
import PageNotFound from './screens/pageNotFound'
import LoginForm from './components/loginForm'
import SignUpForm from './components/signupForm'

function App() {
  const [users, setUsers] = useState()
  useEffect(() => {
    api.users.fetchAll()
        .then(data => {
          setUsers(data)
          console.log("data",data)
        })
    },[])
  const handleDelete = (userId) => {
      const newUsers = users.filter(user => user._id !== userId)
      setUsers(newUsers)
  }
  const handleToggleBookMark = (userId) => {
      const newStateUsers = [...users]
      const index = newStateUsers.findIndex(user => user._id === userId)
      newStateUsers[index].bookmark = !newStateUsers[index].bookmark
      setUsers(newStateUsers)
  }

  return (
    //<Router>
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route
          exact
          path="/users">
          {users &&
              <Users
              onDelete={handleDelete}
              onToggleBookmark={handleToggleBookMark}
              users={users}
            />
        }
        </Route>
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
