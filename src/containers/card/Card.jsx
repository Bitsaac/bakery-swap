import React from "react";
import { useMoralis, useWeb3ExecuteFunction } from 'react-moralis';
import { useNotification } from '@web3uikit/core';
import {AiOutlineClose } from 'react-icons/ai';
import './card.css';
import { NativeBalance } from "@web3uikit/web3";

const Card = (props) => {

  // const [input, setInput] = useState({});


  const { Moralis } = useMoralis();
  const contractProcessor = useWeb3ExecuteFunction();
  const dispatch = useNotification();
  

  async function mint(val) {

    let options = {
      contractAddress: "0x994112c1CD118b94A4dE2fEB1d3A939094fAaFf5",
      functionName: "newPay",
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
      params: {
        note:" Thanks and get out of here"
      },
      msgValue: Moralis.Units.ETH(val),
    } 

    await contractProcessor.fetch({
      params: options,
      onComplete: () => {
        handleSuccess();
      },
      onError: (error) => {
        handleError(error.data.message)
      },
      throwOnError: (error) => {
        handleError(error.data.message)
      }
    });


  } 

  const handlePay = async event => {
    event.preventDefault();
    let val = event.target.amount.value
    mint(val);
    props.setTrigger(false)
  };

  const handleSuccess= () => {
    dispatch({
      type: "success",
      message: `Transaction Processing ...`,
      title: "Payment Successful",
      position: "topL",
    });
  };  

  const handleError= () => {
    dispatch({
      type: "Error",
      message: "insufficient funds",
      title: "Deposit Failed",
      position: "topL",
    });
  }; 
  

  
  return (props.trigger) ? (
    <form className='depo-card' onSubmit={ e => handlePay(e)}>
      
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
            />
         
              <p className='bal'>Balance: <NativeBalance /></p>
          
          </div>
          <div className='submit'>
            <button 
              type='submit'>Confirm </button>
          </div>
      </div>
    </form>
  ) : ""; 
}

// const Card = (props) => {

//   const [input, setInput] = useState('')
//   const { Moralis, chainId } = useMoralis();
//   // const contractProcessor = useWeb3ExecuteFunction();
//   const dispatch = useNotification();
  

//   // async function mints(val) {

//   //   let options = {
//   //     contractAddress: "0x994112c1CD118b94A4dE2fEB1d3A939094fAaFf5",
//   //     functionName: "newPay",
//   //     abi: [
//   //       {
//   //         "inputs": [
//   //           {
//   //             "internalType": "string",
//   //             "name": "note",
//   //             "type": "string"
//   //           }
//   //         ],
//   //         "name": "newPay",
//   //         "outputs": [],
//   //         "stateMutability": "payable",
//   //         "type": "function"
//   //       }
//   //     ],
//   //     params: {
//   //       note:" Thanks and get out of here"
//   //     },
//   //     msgValue: Moralis.Units.ETH(0.4),
//   //   } 

//   //   await contractProcessor.fetch({
//   //     params: options,
//   //     onSuccess: () => {
//   //       handleSuccess();
//   //     },
//   //     onError: (error) => {
//   //       handleError(error.data.message)
//   //     }
//   //   });


//   // } 

//   // const handlePay = async event => {
//   //   event.preventDefault();
//   //   let val = event.target.amount.value
//   //   // console.log(val)
//   //   mints();
//   //   props.setTrigger(false)
//   // };

//   // const handleSuccess= () => {
//   //   dispatch({
//   //     type: "success",
//   //     message: `Transaction Processing ...`,
//   //     title: "Payment Successful",
//   //     position: "topL",
//   //   });
//   // };  

//   // const handleError= () => {
//   //   dispatch({
//   //     type: "success",
//   //     message: "insufficient funds",
//   //     title: "Deposit Failed",
//   //     position: "topL",
//   //   });
//   // }; 

//   const handleChange = event => {
//     // event.preventDefault();
//     setInput(event.target.value);

//     // props.setTrigger(false)
//   };
  

 

//   return (props.trigger) ? (
//     <form className='depo-card'>
//       console.log({input})
//       {props.children}
//       <div className='depo'>
//         <div className='depo-amount'>
//           <p>Deposit Amount</p>
//           <AiOutlineClose id='icon' onClick={() => props.setTrigger(false)} />
//         </div>
//           <div className='depo-stack'>
//             <div className='stack'>
//               <p>Stake</p>
//               <p></p>
//             </div>
//             <input 
//               type='number'
//               name='amount'
//               placeholder='0.0' 
//               step='0.0000000000000001'
//               required
//               onChange={handleChange}
//               value={input}
//             />
//               <p className='bal'>Balance:<NativeBalance /></p>
//           </div>
//           <div className='submit'>
//             <SendTransaction
//               type='submit' 
//               chainId= {chainId}
//               contractOptions= {{
//                 contractAddress: "0x994112c1CD118b94A4dE2fEB1d3A939094fAaFf5",
//                 functionName: "newPay",
//                   abi: [
//                     {
//                       "inputs": [
//                         {
//                           "internalType": "string",
//                           "name": "note",
//                           "type": "string"
//                         }
//                       ],
//                       "name": "newPay",
//                       "outputs": [],
//                       "stateMutability": "payable",
//                       "type": "function"
//                     }
//                   ],
//                   params: {
//                     note:" Thanks and get out of here"
//                   },
//                   msgValue: Moralis.Units.ETH('1'),
//               }}
//               buttonConfig= {{
//                   text: 'Confirm',
//                   theme: 'primary',
//               }}
//               notificationConfig={{ dispatch }}
//             />
//           </div>
//       </div>
//     </form>
//   ) : ""; 
// }


export default Card