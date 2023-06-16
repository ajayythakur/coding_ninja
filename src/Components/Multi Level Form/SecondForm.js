import React from 'react'
import ninja from '../../Images/ninja.png'


const SecondForm = ({formData,setFormData}) => {
  return (
    <div className='classroom'>
    <div className='classroom-form'> 
    <div className='personal-details'>
        <form>
        <input placeholder='Graduation Year' onChange={(e)=>setFormData({...formData,gradYear:e.target.value})}/><br/>
        <input placeholder='College' onChange={(e)=>setFormData({...formData,college:e.target.value})} /><br/>
        <input placeholder='Degree' onChange={(e)=>setFormData({...formData,degree:e.target.value})}/><br/>
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

export default SecondForm