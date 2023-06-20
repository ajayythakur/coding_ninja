import React, { useState } from 'react'
import axios from 'axios'

const CallBackQueryForm = () => {
    const [first_name,setName]=useState('')
    const [contact,setContact]=useState('')
    const [email,setEmail]=useState('')
    const [gradYear,setGradYear]=useState('')

    const handleSubmit=async(e)=>{
        e.preventDefault();
        // https://backend-coding-ninja3.onrender.com
        try {
            const res=await axios.post('https://backend-coding-ninja3.onrender.com/callback',{
                first_name,
                contact,
                email,
                gradYear
            });
            console.log(res.data)
            if(first_name.length===0){
                alert("Name can't be empty");
              }
              if(email.length===0){
                alert("Email must be provided");
              }      
              if(gradYear.length===0){
                alert("Please fill Graduation Year");
              }      
              if(contact.length===0 || contact.length<10){
                alert("Contact number is invalid");
              }
            else{
                alert("Details Submitted..Thank you for your interest");
                setName('');
                setContact('');
                setEmail('');
                setGradYear('');
            }
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className='callbackform'>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='First name' value={first_name} required onChange={(e)=>setName(e.target.value)} />
            <input type='email' placeholder='Email' value={email} required onChange={(e)=>setEmail(e.target.value)} />
            <input type='Number' placeholder='Contact Number' value={contact} required onChange={(e)=>setContact(e.target.value)} />
            <input type='text' placeholder='Graduation Year' value={gradYear} required onChange={(e)=>setGradYear(e.target.value)} />
            <button type='submit'>Request Callback</button>
        </form>
    </div> 
  )
}

export default CallBackQueryForm