import React, { useEffect, useState } from 'react'
import {useAuth} from '../context/auth'
import DropIn from "braintree-web-drop-in-react"
import { useOrder } from '../context/order';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const PaymentPage = () => {
  // eslint-disable-next-line
  const [auth,setAuth]=useAuth();
  const [order,setOrder]=useOrder();
  const [clientToken, setClientToken]=useState('')
  const [instance,setInstance]=useState('')
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();

  const getToken = async()=>{
    try {
      const {data}=await axios.get('https://backend-coding-ninja3.onrender.com/braintree/token')
      // alert("Redirecting to payment page");
      console.log(data)
      setClientToken(data?.clientToken)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getToken();
  },[auth?.token]);

  // handle payments
  const handlePayment=async()=>{
    try {
      setLoading(true)
      const{nonce}=await instance.requestPaymentMethod()
      // https://backend-coding-ninja3.onrender.com/braintree
      // eslint-disable-next-line
      const {datas} = await axios.post(' https://backend-coding-ninja3.onrender.com/braintree/payment',{
        nonce,order
      }) 
      setLoading(false)
      localStorage.removeItem('order')
      setOrder([]);
      alert("Problem")
      navigate('/classroom_details' || '/home');
    } catch (error) {
      console.log(error)
      setLoading(false);
    }
  }
  return (
    <div className='payment-gateway'>
         {
          !clientToken || !order?.length? (''):(
            <>
            <DropIn
            options={{ authorization:clientToken ,
              paypal:{
                flow:'vault'
              }
            }}
            onInstance={instance=> setInstance(instance)}
          />
          <button onClick={handlePayment}
          
          >
          {loading ? 'Done' : 'Make Payment'}
        </button>
            </>
          )
         }

        </div>
  )
}

export default PaymentPage