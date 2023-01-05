import React from 'react';
import './cardmenu.css';

const CardMenu = ({img, title, detail, detail2, percent}) => {
  return (
    <div className='main'>
      
      <div className='first'>
        <img src={img} className='ident' alt='/' />
        <p className='text'> {title}</p>
      </div>
      <div className='identity' >
        <div className='info'>
          <p className='tex'>Deposit:</p>
          <p>{detail}</p>
        </div>
        <div className='info2'>
          <p className='tex'>Earn:</p>
          <p>{detail2}</p>
        </div>
        <div className='info3'>
          <p className='tex'>ROI:</p>
          <p>{percent}</p>
        </div>
      </div>
    </div>
  )
}

export default CardMenu