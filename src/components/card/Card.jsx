import React from 'react';
import './card.css';
import CardMenu from '../../containers/cardMenu/CardMenu';
import Star from '../../containers/star/Star';
import ghc from '../../assets/ghc.png';
import bnb from '../../assets/bnb.png';
import busd from '../../assets/busd.svg';
import bake from '../../assets/bakes.svg';
import btc from '../../assets/btc.svg';
import eth from '../../assets/eth.svg';
import doggy from '../../assets/doggy.svg';
import car from '../../assets/car.svg';
import usdt from '../../assets/usdt.svg';
import gat from '../../assets/gat.svg';
import poker from '../../assets/poker.svg';
import tokau from '../../assets/tokau.svg';
import soccer from '../../assets/soccer.svg';



const Card = () => {
  return (
    <div className='card-main'>
      <div className='card'>
        <div className='card1'>
          <Star className='corner' /> 
          <CardMenu className='ghc' img={ghc} title='GHC' detail='GHC' detail2='GHC' percent='6642.58%'  />
        </div>
        <div className='card2'>
          <Star className='corner' /> 
          <CardMenu className='bnb' img={bnb} title='BNB' detail='BNB' detail2='GHC' percent='1087.03%'  />
        </div>
        <div className='card3'>
          <Star className='corner' />
          <CardMenu className='busd' img={busd} title='BUSD' detail='BUSD' detail2='GHC' percent='953.99%'  />
        </div>
        <div className='card4'>
          <Star className='corner' /> 
          <CardMenu className='bake' img={bake} title='BAKE-BUSD LP' detail='BAKE-BUSD LP' detail2='BAKE' percent='9.26%'  />
        </div>
        <div className='card5'>
          <Star className='corner' />
          <CardMenu className='btc' img={btc} title='BTC-BNB LP' detail='BTC-BNB LP' detail2='BAKE' percent='20.19%'  />
        </div>
        <div className='card6'>
          <Star className='corner' />
          <CardMenu className='eth' img={eth} title='ETH-BNB LP' detail='ETH-BNB LP' detail2='BAKE' percent='10.66%'  />
        </div>
        <div className='card7'>
          <Star className='corner' /> 
          <CardMenu className='lp' img={busd} title='BUSD-BNB LP' detail='BUSD-BNB LP' detail2='BAKE' percent='23.96%'  />
        </div>
        <div className='card8'>
          <Star className='corner' />
          <CardMenu className='usdt' img={usdt} title='USDT-BNB LP' detail='USDT-BNB LP' detail2='BAKE' percent='39.69%'  />
        </div>
        <div className='card9'>
          <Star className='corner' />
          <CardMenu className='doggy' img={doggy} title='DOGGY-BNB LP' detail='DOGGY-BNB LP' detail2='BAKE' percent='15.31%'  />
        </div>
        <div className='card10'>
          <Star className='corner' />
          <CardMenu className='car' img={car} title='CAR-BNB LP' detail='CAR-BNB LP' detail2='BAKE' percent='33.90%' />
        </div> 
        <div className='card11'>
          <Star className='corner' />
          <CardMenu className='cart' img={car} title='CAR TO BAKE' detail='CAR' detail2='BAKE' percent='28.50%'  />
        </div>
        <div className='card12'>
          <Star className='corner' />
          <CardMenu className='gat' img={gat} title='GAT-BNB LP' detail='BAKE'  detail2= 'BAKE' percent='126.45%'  />
        </div>
        <div className='card13'>
          <Star className='corner' />
          <CardMenu className='poker' img={poker} title='POKER-BNB LP' detail='POKER-BNB LP' detail2='BAKE' percent='36.68%'  />
        </div>
        <div className='card14'>
          <Star className='corner' />
          <CardMenu className='pokert' img={poker} title='POKER TO BAKE' detail='POKER' detail2='BAKE' percent='42.31%'  />
        </div>
        <div className='card15'>
          <Star className='corner' />
          <CardMenu className='tokau' img={tokau} title='TOKAU-BNB LP' detail='TOKAU-BNB LP' detail2='BAKE' percent='13.32%'  />
        </div>
        <div className='card16'>
          <Star className='corner' />
          <CardMenu className='soccer' img={soccer} title='SOCCER-BNB LP' detail='SOCCER-BNB LP' detail2='BAKE' percent='37.80%'  />
        </div>
        <div className='card17'>
          <Star className='corner' />
          <CardMenu className='soccer' img={soccer} title='SOCCER' detail='SOCCER' detail2='BAKE' percent='37.64%'  />
        </div>
      </div>
    </div>
  )
}

export default Card