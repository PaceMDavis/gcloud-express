import React from 'react'
import vectorImg from '../images/vectorImg.png'

class Signup extends React.Component {
  state = {
    user_name: '',
    user_password: '',
    first_name: '',
    last_name: '',
    email: '',
    city: '',
    state: '',
    user_id: null,
  }
  // state ={
  //   user: {}
  // }

  handleTextChange = (event) => {
    const state = {...this.state}
    state[event.target.name] = event.target.value
    this.setState(state)
  }

  // handleSubmit = (event) => {
  //   let self = this;
  //   event.preventDefault()
  //   fetch('/users', {
  //     // body: JSON.stringify(this.state),
  //     // cache: 'no-cache',
  //     // credentials: 'same-origin',
  //     // headers: {
  //     //   'content-type': 'application/json'
  //     // },
  //     method: 'POST',
  //     // redirect: 'Follow',
  //     // referrer: 'no-referrer',
  //     data: {
  //       user_name: self.refs.user_name
  //     }
  //   })
  //     .then(function(response) {
  //       return response.json();
  //     }) .then(function(body) {
  //       console.log(body)
  //     })
  // }

  handleSubmit = (event) => {
    event.preventDefault()
    const payload = {...this.state}
    this.props.createUser(payload)
    const requestOptions = {
      method: 'POST',
      mode: 'cors',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        user_name: this.state.user_name,
        user_password: this.state.user_password,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        city: this.state.city,
        state: this.state.state
      })
    };
    fetch('https://skate-app-285621.uc.r.appspot.com/users', requestOptions)
      .then(response => response.json())
      .then(data => this.setState({user_id: data.User_ID}))

      this.props.history.push('/')
   }

  render() {
    return (
      <div className="signup-div">
        <div className="overlay">
        <div id='img-holder'>
            <img src={vectorImg} />
          </div>
          <form 
          onSubmit={this.handleSubmit}
          className="signup-form">
            <input
            className = 'input'
            label = 'firstName'
            name= "first_name"
            required-id='standard-required'
            placeholder="First Name"
            value={this.state.first_name}
            onChange={this.handleTextChange}
            />
            <input
            className = 'input'
            label = 'lastName'
            name= "last_name"
            required-id='standard-required'
            placeholder="Last Name"
            value={this.state.last_name}
            onChange={this.handleTextChange}
            />
            <input
            className = 'input'
            label = 'userName'
            name= "user_name"
            required-id='standard-required'
            placeholder="Username"
            value={this.state.user_name}
            onChange={this.handleTextChange}
            />
            <input
            className = 'input'
            label = 'city'
            name= "city"
            required-id='standard-required'
            placeholder="City"
            value={this.state.city}
            onChange={this.handleTextChange}
            />
            <input
            className = 'input'
            label = 'state'
            name= "state"
            required-id='standard-required'
            placeholder="State"
            value={this.state.state}
            onChange={this.handleTextChange}
            />
            <input
            className = 'input'
            label = 'email'
            name= "email"
            required-id='standard-required'
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleTextChange}
            />
            <input
            className = 'input'
            label = 'password'
            name= "user_password"
            type="password"
            required-id='standard-password-input'
            placeholder="Password"
            value={this.state.user_password}
            onChange={this.handleTextChange}
            />
            <div id="lower">
              <button type="submit" id="button-login">Signup!</button>
            </div>
          </form>
        </div>
      </div>
    )
  }

}

export default Signup