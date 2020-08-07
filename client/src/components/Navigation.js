import React from 'react'
import {Link} from 'react-router-dom'
// import blackMobileLogo from '../images/blackMobileLogo.png'
import whiteMobileLogo from '../images/whiteMobileLogo.png'
// import Menu from './Menu'
import mobileMenuImage from '../images/mobileMenuImage.jpg'


const NavButton = ({onClick}) => 
<div className='nav-container'>
  <div className="mobile-nav-button" onClick={onClick}>
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div id='logo-holder'>
    <img src={whiteMobileLogo} alt="logo"/>
  </div>
</div>


// </button> 

const Dropdown = ({show}, props) => 
<div  style={{
  visibility: show ? "visible" : "hidden", 
  backgroundImage: `url(${mobileMenuImage})`,
  backgroundSize: 'cover', 
  position: "absolute",
  backgroundPosition: '75% 50%', 
  height: "100%", 
  width: "100%",
  transition: 'margin 1s',
  margin: '0 0 0 -10vh',
  }}>
  <div className="overlay">
    <ul className='navItemsMobile' >  
      <img src={whiteMobileLogo} alt="logo" />
      <li className ="mobileNavList">
        Map
      </li>
      <li className ="mobileNavList">
        <Link to='add'>Add Spot</Link>
      </li>
      <li className ="mobileNavList">
        <Link to='/' logout={props.handleLogout} className="mobileNavList">Logout</Link>
      </li>
    </ul>
  </div>
</div>


class Navigation extends React.Component {

  state = {
    dropdownVisible: false,
    loggedIn: this.props.isLoggedIn,
    user: this.props.user
  }
  

  toggleDropdown = event => {
    this.setState(state => ({
      dropdownVisible: !state.dropdownVisible
    }))
  }

  handleLogout = event => {
    this.props.logout(false)
    document.cookie = 'LoggedIn=false'
    this.setState ({
      loggedIn: false
    })
  }

  
 

  render() {
    // console.log(this.state)
    return (
      <div className='mobile-nav-div' >
        <Dropdown show={this.state.dropdownVisible} />
        <NavButton onClick={this.toggleDropdown} />
        {this.props.children}
      </div>

    )
  }
}




export default Navigation