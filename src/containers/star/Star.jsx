import React from 'react';
import './star.css';
import starve from './../../assets/starve.svg';

const Star = () => {
  return (
    <div className='star'>
        <img src={starve} alt='/' />
    </div>
  )
}

export default Star