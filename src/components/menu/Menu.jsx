import React from 'react';
import './menu.css'

const Menu = ({nav, text}) => {
  return (
    <div className='menu ' style={{}}>
      <img src={nav} className='menu-icon' alt='/' />
        <p className='menu-icon'>{text}</p>
    </div>
  )
}

export default Menu