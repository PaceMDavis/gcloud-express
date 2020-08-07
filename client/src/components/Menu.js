import React from 'react';
import { bool } from 'prop-types';
import whiteMobileLogo from '../images/whiteMobileLogo.png'



const Menu = ({onClick}) => {
 


  return (
    <ul className='navItemsMobile' >
          <img src={whiteMobileLogo} />
          <li>
            Map
          </li>
          <li>
            Add Spot
          </li>
          <li>
            Logout
          </li>
        </ul>
  )
}



export default Menu