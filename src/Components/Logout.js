import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [last_name,setLastname]=useState('');
    const [address,setAddress]=useState('');
    const [age,setAge]=useState('');
    const [password,setPassword]=useState('');
    const [phone,setPhone]=useState('');
  
    const navigate=useNavigate();

    const submitFn=async(e)=>{
        e.preventDefault();
        try {
            const details=await axios.post('http://localhost:8080/register',{
                name,
                last_name,
                email,
                address,
                phone,
                age,
                password
            })
            if(details){
                alert('Detials Submitted. Please Login to continue');
                console.log('User Registered');
                navigate('/login')
            }
        } catch (error) {
            console.log('Error in user registration',error);
        }
    }
  return (
    <div className='logout'>
    <form onSubmit={submitFn}>
    <label>Name</label>
    <input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>
    <label>Last Name</label>
    <input type='text' value={last_name} onChange={(e)=>setLastname(e.target.value)}></input>
    <label>E-mail</label>
    <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
    <label>Address</label>
    <input type='text' value={address} onChange={(e)=>setAddress(e.target.value)}></input>
    <label>Phone No.</label>
    <input type='text' value={phone} onChange={(e)=>setPhone(e.target.value)}></input>
    <label>Age</label>
    <input type='text' value={age} onChange={(e)=>setAge(e.target.value)}></input>
    <label>Password</label>
    <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
    
    <button type='submit'>Submit</button>
    </form>
    </div>
  )
}

export default Logout