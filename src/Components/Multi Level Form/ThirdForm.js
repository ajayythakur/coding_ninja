import React from 'react'
import ninja from '../../Images/ninja.png'

const ThirdForm = ({formData,setFormData}) => {
  return (
    <div className='classroom'>
    <div className='classroom-form'> 
    <div className='personal-details'>
        <form>
        <label>Your Goal</label>
        <input placeholder='Goal' onChange={(e)=>setFormData({...formData,goal:e.target.value})}/><br/>
        <label>Targeted Company</label>
        <input placeholder='Company' onChange={(e)=>setFormData({...formData,target_company:e.target.value})} /><br/>

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

export default ThirdForm