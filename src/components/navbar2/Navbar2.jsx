import React from 'react';
import './navbar2.css';
import Menu from './../menu/Menu';
import Home from './../../assets/Home.svg';
import Trade from './../../assets/trade.svg';
import Earning from './../../assets/Earning.svg';
import nft from './../../assets/nft.svg';
import Bake from './../../assets/Bake.svg';
import Launch from './../../assets/Launch.svg';
import Game from './../../assets/Game.svg';
import info from './../../assets/info.svg';
import contact from './../../assets/contact.svg';

const Navbar2 = () => {
  return (
    <div className='navbar2'>
        <Menu nav={Home} text='Home' />
        <Menu nav={Trade} text='Trade' />
        <Menu nav={Earning} text='Earning' />
        <Menu nav={nft} text='NFT Marketplace' />
        <Menu nav={Bake} text='Bakery Gallery' />
        <Menu nav={Launch} text='Launchpad' />
        <Menu nav={Game} text='Gamification' />
        <Menu nav={info} text='Info' />
        <Menu nav={contact} text='Contact' />
    </div>
  )
}

export default Navbar2