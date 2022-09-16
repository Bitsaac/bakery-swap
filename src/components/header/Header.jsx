import React from 'react';
import Header2 from './../../containers/header2/Header2';
import './header.css';
import V from './../../assets/v2.svg'
import Ended from './../../assets/ended.png';



const Header = () => {
  return (
    <div className='header'>
      <div className='header1'>
        <p className='earns'>Earning</p>
      </div>
      <div className='header-section'>
        <div className='header-section1'>
          <img src={V} alt='/' />
          <p>Earn</p>
        </div>
        <div className='header-section2'>
          <img src={V} alt='/' />
          <p>Earn Others</p>
        </div>
        <div className='header-section3'>
          <p>NFT</p>
        </div>
        <div className='header-section4'>
          <img src={Ended} alt='/' />
          <p>V1</p>
        </div>
        <div className='header-section5'>
          <p>Ended</p>
        </div>
      </div>
      <div className='head2'>
        <Header2 className='header2' />
      </div>
    </div>
  )
}

export default Header