import React, { useState } from 'react'
import '../App.css'
import ninja from '../Images/ninja.png'
import bar from '../Images/bar.png'
import badge from '../Images/badge.png'
import axios from 'axios'
import { useAuth } from './context/auth'
import { useNavigate } from 'react-router-dom'

const MyClasssroom = () => {
    const [name,setName]=useState('');
    // eslint-disable-next-line
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [gradYear,setGradYear]=useState('');
    const [college,setCollege]=useState('');
    const [country,setCountry]=useState('');
    const [date,setDate]=useState('');
    // eslint-disable-next-line
    const [auth,setAuth]=useAuth();
    const navigate=useNavigate(); 

    const submitEvent=async(e)=>{
        e.preventDefault();
        try {
            const res=await axios.post("http://localhost:8080/classroom_details",{
                name,
                phone,
                email,
                gradYear,
                college,
                country,
                date
            })
            if(res){
                alert("Data Saved..Thank You !")
                console.log('Data saved',res)
                navigate('/home')
            }
        } catch (error) {
            console.log('Error in sending data',error);
        }
    }
  return (
    <div className='classroom'>
        <div className='classroom-form'> 
        <div className='greeting'>
        <h2>Welcome to Ninja Family</h2>
        <img alt='404' src={bar} style={{height:'10px',width:'80px'}} />
        <div style={{display:'flex'}}>
            
            <img src={badge} alt='404' style={{height:'70px',width:'70px'}}/>
            <span>
            <span style={{fontSize:'25px',fontWeight:'bold'}}>Congratulations! </span><br/><span style={{opacity:'.5'}}>You have successfully signed up for a </span>free trial of the course
            </span>
        </div>
        </div>
        <div className='personal-details'>
            <h3>Personal Detials</h3>
            <img alt='404' src={bar} style={{height:'10px',width:'80px'}} />
            <form onSubmit={submitEvent}>
                <span>
            <input type='radio' onChange={()=>setCountry('Indian')} />
            <label>I am a Indian Student</label>
            
            <input type='radio'  onChange={()=>setCountry("International")}/>
            <label>I am an international student</label>
            </span>

            <input placeholder='Name' onChange={(e)=>setName(e.target.value)} /><br/>
            <input placeholder='Phone Number' onChange={(e)=>setPhone(e.target.value)}/><br/>
            <input placeholder={auth?.user?.email} disabled/><br/>
            <input placeholder='Graduation Year'onChange={(e)=>setGradYear(e.target.value)}/><br/>
            <input placeholder='College Name' onChange={(e)=>setCollege(e.target.value)}/><br/>
            <input placeholder='Date Expecting for placement (dd-mm-yyy)' onChange={(e)=>setDate(e.target.value)}/><br/>
            <input type='submit'/>
            </form>
        </div>
        </div>
        <div>
            <img alt='404' src={ninja}/>
        </div>
    </div>
  )
}

export default MyClasssroom