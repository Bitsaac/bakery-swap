import React, {useState} from "react";
import { useMoralis } from 'react-moralis';
import { useNotification } from '@web3uikit/core';
import {AiOutlineClose } from 'react-icons/ai';
import './card.css';
import { NativeBalance, SendTransaction } from "@web3uikit/web3";



const Card = (props) => {
  const [input, setInput] = useState('');
  const { Moralis,chainId } = useMoralis();
  // const contractProcessor = useWeb3ExecuteFunction();
  const dispatch = useNotification();
  

  // async function mints(val) {

  //   let options = {
  //     contractAddress: "0x994112c1CD118b94A4dE2fEB1d3A939094fAaFf5",
  //     functionName: "newPay",
  //     abi: [
  //       {
  //         "inputs": [
  //           {
  //             "internalType": "string",
  //             "name": "note",
  //             "type": "string"
  //           }
  //         ],
  //         "name": "newPay",
  //         "outputs": [],
  //         "stateMutability": "payable",
  //         "type": "function"
  //       }
  //     ],
  //     params: {
  //       note:" Thanks and get out of here"
  //     },
  //     msgValue: Moralis.Units.ETH(val),
  //   } 

  //   await contractProcessor.fetch({
  //     params: options,
  //     onSuccess: () => {
  //       handleSuccess();
  //     },
  //     onError: (error) => {
  //       handleError(error.data.message)
  //     }
  //   });

  //   notificationConfig={{dispatch}}
  // } 

  // const handlePay = async event => {
  //   event.preventDefault();
  //   let val = event.target.amount.value
  //   // console.log(val)
  //   mints(val);
  //   props.setTrigger(false)
  // };

  // const handleSuccess= () => {
  //   dispatch({
  //     type: "success",
  //     message: `Transaction Processing ...`,
  //     title: "Payment Successful",
  //     position: "topL",
  //   });
  // };  

  // const handleError= () => {
  //   dispatch({
  //     type: "success",
  //     message: "insufficient funds",
  //     title: "Deposit Failed",
  //     position: "topL",
  //   });
  // }; 
  const handlePay = (event) => {
    setInput(event.target.value)
  }

  let gee = +input
  
  return (props.trigger) ? (
    <form className='depo-card' >
      
      {props.children}
      <div className='depo'>
        <div className='depo-amount'>
          <p>Deposit Amount</p>
          <AiOutlineClose id='icon' onClick={() => props.setTrigger(false)} />
        </div>
          <div className='depo-stack'>
            <div className='stack'>
              <p>Stake</p>
              <p></p>
            </div>
            <input 
              type='number'
              name='amount'
              placeholder='0.0' 
              step='0.0000000000000001'
              required
              onChange={handlePay}
              value={input}
            />
              <p className='bal'>Balance:<NativeBalance /></p>
          </div>
          <div className='submit'>
          <SendTransaction
    chainId= {chainId}
    contractOptions= {{
        abi: [
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "note",
                "type": "string"
              }
            ],
            "name": "newPay",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
          }
        ],
        contractAddress:  "0x994112c1CD118b94A4dE2fEB1d3A939094fAaFf5",
        functionName: "newPay",
        params: {
          note:" Thanks and get out of here"
        },
        msgValue: Moralis.Units.ETH(gee),
    }}
    buttonConfig= {{
        text: 'confirm',
        theme: 'primary',
    }}
    notificationConfig={{ dispatch }}
  />
          </div>
      </div>
    </form>
  ) : ""; 
}


export default Card