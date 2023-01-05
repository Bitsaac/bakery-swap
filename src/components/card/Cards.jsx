import React from 'react';
import { useState } from 'react';
import { useMoralis } from 'react-moralis';
import { useNotification } from '@web3uikit/core';
import './cards.css';
import CardMenu from '../../containers/cardMenu/CardMenu';
import Star from '../../containers/star/Star';
import fwt from '../../assets/freeway.png';
import bnb from '../../assets/bnb.png';
// import busd from '../../assets/busd.svg';
import luna from '../../assets/luna.png';
import wof from '../../assets/wof.png';
import bull from '../../assets/bulll.png';
import raca from '../../assets/raca.png';
import egc from '../../assets/egc.png';
// import car from '../../assets/car.svg';
// import usdt from '../../assets/usdt.svg';
// import gat from '../../assets/gat.svg';
// import poker from '../../assets/poker.svg';
// import tokau from '../../assets/tokau.svg';
// import soccer from '../../assets/soccer.svg';
import Card from '../../containers/card/Card';





const Cards = () => {

  const { account } = useMoralis();
  const dispatch = useNotification();
  const [payModel, setPayModel] = useState(false);
  const pay = () => setPayModel(!payModel)


  const handleNoAccount= () => {
    dispatch({
      type: "error",
      message: `You need to connect your wallet to deposit`,
      title: "Not connected",
      position: "topR",
    });
  }; 



  return (
    <div className='card-main'>
      {/* <Card trigger={payModel} setTrigger={ setPayModel} /> */}
      {payModel ? (<Card trigger={payModel} setTrigger={setPayModel} />) : ""}
      <div className='card'>
        <div className='card1'>
          <Star className='corner' /> 
          <CardMenu className='ghc' img={fwt} title='FREEWAY' detail='FWT' detail2='BNB' percent='242.58%'  />
          <button className= {account ? ('set') : ("")}  onClick={() => {
            if (account) {pay()} 
              else {
                handleNoAccount()
              }
            }
          }>Deposit</button>
          <button>claim</button>
        </div>
        <div className='card2'>
          <Star className='corner' /> 
          <CardMenu className='bnb' img={bnb} title='BNB BAKE-LP' detail='BNB BAKE-LP' detail2='BAKE' percent='108.03%' />
          <button className= {account ? ('set') : ("")}  onClick={() => {
            if (account) {pay()} 
              else {
                handleNoAccount()
              }
            }
          }>Deposit</button>
          <button>claim</button>
        </div>
        <div className='card3'>
          <Star className='corner' />
          <CardMenu className='busd' img={bull} title='BULLS-INU' detail='BULLS-INU' detail2='BAKE' percent='53.99%' />
          <button className= {account ? ('set') : ("")}  onClick={() => {
            if (account) {pay()} 
              else {
                handleNoAccount()
              }
            }
          }>Deposit</button>
          <button>claim</button>
        </div>
        <div className='card4'>
          <Star className='corner' /> 
          <CardMenu className='bake' img={luna} title='LUNAR' detail='LUNAR' detail2='BNB' percent='9.26%'  />
          <button className= {account ? ('set') : ("")}  onClick={() => {
            if (account) {pay()} 
              else {
                handleNoAccount()
              }
            }
          }>Deposit</button>
          <button>claim</button>
        </div>
        {/* <div className='card5'>
          <Star className='corner' />
          <CardMenu className='btc' img={btc} title='BTC-BNB LP' detail='BTC-BNB LP' detail2='BAKE' percent='20.19%' />
          <button className= {account ? ('set') : ("")}  onClick={() => {
            if (account) {pay()} 
              else {
                handleNoAccount()
              }
            }
          }>Deposit</button>
          <button>claim</button>
        </div> */}
        <div className='card6'>
          <Star className='corner' />
          <CardMenu className='eth' img={raca} title='RACA' detail='RACA' detail2='BNB' percent='10.66%' />
          <button className= {account ? ('set') : ("")}  onClick={() => {
            if (account) {pay()} 
              else {
                handleNoAccount()
              }
            }
          }>Deposit</button>
          <button>claim</button>
        </div>
        <div className='card7'>
          <Star className='corner' /> 
          <CardMenu className='lp' img={wof} title='WORLD OF FARM' detail='WORLD OF FARM' detail2='BAKE' percent='23.96%' />
          <button className= {account ? ('set') : ("")}  onClick={() => {
            if (account) {pay()} 
              else {
                handleNoAccount()
              }
            }
          }>Deposit</button>
          <button>claim</button>
        </div>
        {/* <div className='card8'>
          <Star className='corner' />
          <CardMenu className='usdt' img={usdt} title='USDT-BNB LP' detail='USDT-BNB LP' detail2='BAKE' percent='39.69%' />
          <button className= {account ? ('set') : ("")}  onClick={() => {
            if (account) {pay()} 
              else {
                handleNoAccount()
              }
            }
          }>Deposit</button>
          <button>claim</button>
          
        </div> */}
        <div className='card9'>
          <Star className='corner' />
          <CardMenu className='doggy' img={egc} title='EGC' detail='EGC' detail2='BAKE' percent='15.31%' />
          <button className= {account ? ('set') : ("")}  onClick={() => {
            if (account) {pay()} 
              else {
                handleNoAccount()
              }
            }
          }>Deposit</button>
          <button>claim</button>
        </div>
        {/* <div className='card10'>
          <Star className='corner' />
          <CardMenu className='car' img={car} title='CAR-BNB LP' detail='CAR-BNB LP' detail2='BAKE' percent='33.90%' />
          <button className= {account ? ('set') : ("")}  onClick={() => {
            if (account) {pay()} 
              else {
                handleNoAccount()
              }
            }
          }>Deposit</button>
          <button>claim</button>
        </div>  */}
        {/* <div className='card11'>
          <Star className='corner' />
          <CardMenu className='cart' img={car} title='CAR TO BAKE' detail='CAR' detail2='BAKE' percent='28.50%' />
          <button className= {account ? ('set') : ("")}  onClick={() => {
            if (account) {pay()} 
              else {
                handleNoAccount()
              }
            }
          }>Deposit</button>
          <button>claim</button>
        </div>
        <div className='card12'>
          <Star className='corner' />
          <CardMenu className='gat' img={gat} title='GAT-BNB LP' detail='BAKE'  detail2= 'BAKE' percent='126.45%' />
          <button className= {account ? ('set') : ("")}  onClick={() => {
            if (account) {pay()} 
              else {
                handleNoAccount()
              }
            }
          }>Deposit</button>
          <button>claim</button>
        </div>
        <div className='card13'>
          <Star className='corner' />
          <CardMenu className='poker' img={poker} title='POKER-BNB LP' detail='POKER-BNB LP' detail2='BAKE' percent='36.68%'  />
          <button className= {account ? ('set') : ("")}  onClick={() => {
            if (account) {pay()} 
              else {
                handleNoAccount()
              }
            }
          }>Deposit</button>
          <button>claim</button>
        </div>
        <div className='card14'>
          <Star className='corner' />
          <CardMenu className='pokert' img={poker} title='POKER TO BAKE' detail='POKER' detail2='BAKE' percent='42.31%'  />
          <button className= {account ? ('set') : ("")}  onClick={() => {
            if (account) {pay()} 
              else {
                handleNoAccount()
              }
            }
          }>Deposit</button>
          <button>claim</button>
        </div>
        <div className='card15'>
          <Star className='corner' />
          <CardMenu className='tokau' img={tokau} title='TOKAU-BNB LP' detail='TOKAU-BNB LP' detail2='BAKE' percent='13.32%'  />
          <button className= {account ? ('set') : ("")}  onClick={() => {
            if (account) {pay()} 
              else {
                handleNoAccount()
              }
            }
          }>Deposit</button>
          <button>claim</button>
        </div>
        <div className='card16'>
          <Star className='corner' />
          <CardMenu className='soccer' img={soccer} title='SOCCER-BNB LP' detail='SOCCER-BNB LP' detail2='BAKE' percent='37.80%'  />
          <button className= {account ? ('set') : ("")}  onClick={() => {
            if (account) {pay()} 
              else {
                handleNoAccount()
              }
            }
          }>Deposit</button>
          <button>claim</button>
        </div>
        <div className='card17'>
          <Star className='corner' />
          <CardMenu className='soccer' img={soccer} title='SOCCER' detail='SOCCER' detail2='BAKE' percent='37.64%'  />
          <button className= {account ? ('set') : ("")}  onClick={() => {
            if (account) {pay()} 
              else {
                handleNoAccount()
              }
            }
          }>Deposit</button>
          <button>claim</button>
        </div> */}
      </div>
    </div>
  )
}

export default Cards