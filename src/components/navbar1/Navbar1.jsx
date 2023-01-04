import React, {useState} from 'react';
import './navbar1.css';
import {AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Navbar2 from './../navbar2/Navbar2'
import logo from './../../assets/logo.svg';
import bakery from './../../assets/bakery.svg';
import { FiSettings } from 'react-icons/fi';
import { ConnectButton } from '@web3uikit/web3';

const Navbar1 = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggle = () => setToggleMenu(!toggleMenu)
    return (
      <div className={toggleMenu ? 'navbar active' : 'navbar'}>
        <div className='navbar1'>
          <div className='navbar1-left'>
            <div className='navbar1-nav-icons' onClick={toggle} >
              {!toggleMenu ? (<AiOutlineMenu className='icons' />) : (<AiOutlineClose className='icons' />)}
            {toggleMenu ? (<div className='bar2'><Navbar2 className='bar' /></div>) : (null)}
            </div> 
            <div className='navbar1-nav-logo'>
              <img src= {logo} className='logo' alt= '/'/>
              <img src={bakery} className='bakery' alt='/' />
            </div>
          </div>
          <div className='navbar1-right'>
            <div className='navbar1-right-menu'>
              <h2 className='bsc'>BSC</h2>
              <ConnectButton />
              <div className='navbar1-right-menu-last'>
              <FiSettings className='icon' />
              </div>
            </div>
          </div>
        </div>
        <div className='nav'>
          <Navbar2 className='nav2' />
        </div>
      </div>
     
    )
}

export default Navbar1