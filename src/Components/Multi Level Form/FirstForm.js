import React from 'react'
import ninja from '../../Images/ninja.png'
import bar from '../../Images/bar.png'
import badge from '../../Images/badge.png'
import { useAuth } from '../context/auth';

const FirstForm = ({formData,setFormData}) => {
// eslint-disable-next-line
    const [auth,setAuth]=useAuth();

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
        <form >
            <span>
        <input type='radio' value='India' onChange={(e)=>setFormData({...formData, country:e.target.value})} />
        <label>I am a Indian Student</label>

        <input type='radio' value='International' onChange={(e)=>setFormData({...formData, country:e.target.value})}/>
        <label>I am an international student</label>
        </span>

        <input type='text' placeholder='Name' onChange={(e)=>setFormData({...formData, name:e.target.value})} /><br/>
        <input type='text' placeholder='Phone' onChange={(e)=>setFormData({...formData, phone:e.target.value})}/><br/>
        <input type='text' placeholder="Email" onChange={(e)=>setFormData({...formData,email:e.target.value})} /><br/>
        <input type='text' placeholder='Address Line 1' onChange={(e)=>setFormData({...formData, address_one : e.target.value})}/><br/>
        <input type='text' placeholder='Address Line 2' onChange={(e)=>setFormData({...formData, address_two : e.target.value})}/><br/>
        <input type='text' placeholder='State' onChange={(e)=>setFormData({...formData, state : e.target.value})}/><br/>
        <input type='text' placeholder='City' onChange={(e)=>setFormData({...formData, city : e.target.value})}/><br/>
        <input type='Number' placeholder='Pincode' onChange={(e)=>setFormData({...formData, pincode : e.target.value})}/><br/>
        </form>
        
    </div>
    </div>
    <span>
    <div className='ninja-bg'>
        <img alt='404' src={ninja}/>
    </div>
    </span>
        
    </div>
  )
}

export default FirstForm