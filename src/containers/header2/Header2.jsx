import React from 'react';
import './header2.css';
import head from './../../assets/header.png';
import stack from './../../assets/stack.png';

const Header2 = () => {
  return (
    <div className='header2'>
      <div className='header2-menu'>
        <img src={head} alt='/' />
        <h2>0.000</h2>
        <p>To harvest</p>
        <p className='harvest'>Harvest All</p>
      </div>
      <div className='header2-menu2'>
        <p> Staked only </p>
        <img src={stack} alt ='/' />
      </div>
    </div>
  )
}

export default Header2