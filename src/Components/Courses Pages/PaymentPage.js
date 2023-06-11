import React, { useEffect, useState } from 'react'
import {useAuth} from '../context/auth'
import DropIn from "braintree-web-drop-in-react"
import { useOrder } from '../context/order';
import axios from 'axios';


const PaymentPage = () => {
  const [auth,setAuth]=useAuth();
  const [order,setOrder]=useOrder();
  const [clientToken, setClientToken]=useState('')
  const [instance,setInstance]=useState('')
  const [loading,setLoading]=useState(false);

  const getToken = async()=>{
    try {
      const {data}=await axios.get('http://localhost:8080/braintree/token')
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
      const {data} = await axios.post('http://localhost:8080/braintree/payment',{
        nonce,order
      })
      setLoading(false)
      localStorage.removeItem('order')
      setOrder([]);

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
          {loading ? 'Processing...' : 'Make Payment'}
        </button>
            </>
          )
         }

        </div>
  )
}

export default PaymentPage