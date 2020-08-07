import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import LoginForm from './containers/LoginForm'
import Home from './containers/Home'
import Signup from './containers/Signup'
import Map from './components/Map'
import SpotDetail from './containers/SpotDetail'
import AddSpot from './containers/AddSpot'

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie)
  return cookies['loggedIn'] ? true : false
}

const ProtectedRoute = ({component: Component, ...rest}) => {
  return (
    <Route
    {...rest}
    render = {(props) => checkAuth() === true
      ? <Component {...props} />
      : <Redirect to ={{pathname: '/', state: {from:props.location}}} />}
    />
  )
}


const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component = {LoginForm} />
      <Route exact path='/signup' component = {Signup} />
      <ProtectedRoute path='/home' component ={Home} />
      <ProtectedRoute path='/info/:id' component ={SpotDetail} />
      <ProtectedRoute path='/add' component ={AddSpot} />
    </Switch>
  );
};


export default Router