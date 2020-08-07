import React from 'react'
import vectorImg from '../images/vectorImg.png'
// import { useAuth0 } from '@auth0/auth0-react'
import {Link} from 'react-router-dom'
// import { login } from '../Database/controllers/users'
const axios = require('axios')
require('dotenv').config();





class LoginForm extends React.Component {
  state = {
    username: '',
    password: '',
    users: [],
    isLoaded: false,
    isLoggedIn: false
  }


  componentDidMount() {
    fetch('https://skate-app-285621.uc.r.appspot.com/users')
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(
        data => {
          this.setState({
            isLoaded: true,
            users: data
          })
        }
      )
  }

  // componentDidMount(prevProps, props) {
  //   // const requestOptions = {
  //   //   method: 'GET',
  //   //   mode: 'cors',
  //   //   headers: { 'Content-Type': 'application/json'     }
  //   // }
  //   // this.props.getAllUsers()
  //   // if(this.props.user.info !== prevProps.user.info) {
  //   //   // fetch('http://localhost:8080/users', requestOptions)
  //   //   //   .then(response => response.json())
  //   //   this.props.getAllUsers()
  //   fetch('http://localhost:8080/users')
  //       .then(response => response.json())
  //       .then(data => this.setState({
  //         user: data.user
  //       }))
  //   // }

  // }
 
  handleTextChange = (event) => {
    const state = {...this.state}
    state[event.target.name] = event.target.value
    this.setState(state)
  }



  // handleSubmit = (event) => {
  //   event.preventDefault()
  //   const payload = {...this.state}
  //   this.props.createUser(payload)
  //   const requestOptions = {
  //     method: 'POST',
  //     mode: 'cors',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify({
  //       user_name: this.state.user_name,
  //       user_password: this.state.user_password,
  //       first_name: this.state.first_name,
  //       last_name: this.state.last_name,
  //       email: this.state.email,
  //       city: this.state.city,
  //       state: this.state.state
  //     })
  //   };
  //   fetch('http://localhost:8080/users', requestOptions)
  //     .then(response => response.json())
  //     .then(data => this.setState({user_id: data.User_ID}))

  //     this.props.history.push('/')
  //  }

  handleSubmit = (event) => {
    event.preventDefault()
    let body = {
      user_name: this.state.username,
      user_password: this.state.password
    }
    
    axios.post('https://skate-app-285621.uc.r.appspot.com/users/login', body)
      .then(res=> console.log(res.data))
      .then(() => this.props.login(true))
      .then(() => document.cookie = "loggedIn=true;max-age=10000*1000")
      .then(() => this.props.history.replace('/home'))
      .catch(err => console.log(err))
    
    // const payload = {...this.state}
    
    // const { user_name, user_password } = req.body

  // axios(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`, {
  //   method: 'POST',
  //   headers: {
  //     'content-type': 'application/json'
  //   },
  //   data: {
  //     grant_type: 'password',
  //     username: this.state.user_name,
  //     password: this.state.user_password,
  //     audience: process.env.REACT_APP_AUTH0_IDENTITY,
  //     connection: 'Username-Password-Authentication',
  //     scope: 'openid',
  //     client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
  //     client_secret: process.env.REACT_APP_AUTH0_CLIENT_SECRET
  //   }
  // })
  // .then(response => {
  //   const { access_token } = response.data
  //   response.json({
  //     access_token
  //   })
  // })
  // .catch(e => {
  //   response.send(e)
  // })
    // document.cookie = "loggedIn=true;max-age=10000*1000"
    // this.props.login(true)
    // this.props.user(this.state.username)
    
  }

  render() {
    console.log(this.props.isLoggedIn, this.state.users, this.state.isLoaded)
    return (
      <div className="login-div">
        <div className="overlay">
          <div id='img-holder'>
            <img src={vectorImg} />
          </div>
          <form onSubmit={this.handleSubmit}
          className='login-form'>
            <input 
            className ='input'
            label="username"
            name="username"
            required-id="standard-required"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleTextChange}
            />
            <input 
            className ='input'
            label="password"
            type='password'
            name='password'
            required-id="standard-password-input"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleTextChange}
            />
              <div id="lower">
                <p id="signup-p">Not a member?
                  
                    <Link className="signup-link" to ={`/Signup`}>
                    <span>
                    Sign up!
                    </span>
                    </Link>  
                  
                </p>
                <button type="submit" id="button-login">Login</button>
              </div>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm