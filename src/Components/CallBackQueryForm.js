import React, { useState } from 'react'
import axios from 'axios'

const CallBackQueryForm = () => {
    const [first_name,setName]=useState()
    const [contact,setContact]=useState()
    const [email,setEmail]=useState()
    const [gradYear,setGradYear]=useState()

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const res=await axios.post('https://backend-coding-ninja3.onrender.com/callback',{
                first_name,
                contact,
                email,
                gradYear
            });
            console.log(res)
            if(res){
                alert("Details Submitted..Thank you for your interest");
            }
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className='callbackform'>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='First name' required onChange={(e)=>setName(e.target.value)} />
            <input type='email' placeholder='Email' required onChange={(e)=>setEmail(e.target.value)} />
            <input type='Number' placeholder='Contact Number ' required onChange={(e)=>setContact(e.target.value)} />
            <input type='text' placeholder='Graduation Year' required onChange={(e)=>setGradYear(e.target.value)} />
            <button type='submit'>Request Callback</button>
        </form>
    </div> 
  )
}

export default CallBackQueryForm