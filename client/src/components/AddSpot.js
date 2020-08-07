import React from 'react'
import Navigation from '../containers/Navigation'
import vectorImg from '../images/vectorImg.png'


class AddSpot extends React.Component {
  state = {
    spots: this.props.spots,
    spot_name: '',
    spot_address: '',
    photo_1: ''
  }

  handleTextChange = (event) => {
    const newState = {...this.state}
    newState[event.target.name] = event.target.value
    this.setState(newState)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // const spotTotal = this.props.businesses.length
    const payload = {...this.state}
    // payload.id = spotTotal + 1
    console.log('The spot', payload)
    this.props.addSpot(payload)
    const requestOptions = {
      method: 'POST',
      mode: 'cors',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        spot_name:this.state.spot_name,
        spot_address:this.state.spot_address,
        photo_1: this.state.photo_1
      })
    };
    fetch('https://skate-app-285621.uc.r.appspot.com/spots', requestOptions)
      .then(response => response.json())
      .then(data => this.setState({spot_id: data.spot_id}))
    this.props.history.push('/home')
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
            label = 'spotName'
            name= "spot_name"
            required-id='standard-required'
            placeholder="Spot Name"
            value={this.state.spot_name}
            onChange={this.handleTextChange}
            />
            <input
            className = 'input'
            label = 'spotAddress'
            name= "spot_address"
            required-id='standard-required'
            placeholder="Address"
            value={this.state.spot_address}
            onChange={this.handleTextChange}
            />
            <input
            className = 'input'
            label = 'photo'
            name= "photo_1"
            required-id='standard-required'
            placeholder="Photo Link"
            value={this.state.photo_1}
            onChange={this.handleTextChange}
            />
            <div id="lower">
              <button type="submit" id="button-login">Add Spot!</button>
            </div>
          </form>
       </div>
      </div>
    )
  }
}

export default AddSpot