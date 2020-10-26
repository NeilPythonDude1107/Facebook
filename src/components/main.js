import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './users/auth/login'
import Register from './users/auth/register'
import HomeHeader from './navigation/homeHeader'
import Sidebar from './navigation/sidebar/sidebar'
import Sidebar2 from './navigation/sidebar/sidebar2'
import Posts from './posts/posts'
import Profile from './users/user/profile.js'


import './styles/main.css'
import {auth} from './config/firebase'

function Main() {

  const [user, setUser] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {

      if (authUser) {
        setUser(authUser);
      } else {
        setUser(false);
      }
    })
  }, [])
  return (
    <div className="Main">
      <Router>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route exact path='/'>
            <HomeHeader user={user} selected/>
            <div className='main__page'>
              <Sidebar user={user}/>
              <div class='main__posts'>
                <Posts user={user} />
              </div>
              <Sidebar2 user={user}/>
            </div>
          </Route>
          <Route path='/:username/:uid'>
            <HomeHeader user={user}/>
            <Profile user={user} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Main;