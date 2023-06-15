import React, { useEffect, useState } from 'react'
import axios from 'axios';
import blueBg from '../Images/blueBg.png'
import NoWork from './Courses Pages/NoWork';
import WorkEx from './Courses Pages/WorkEx';


const Enroll = () => {
    // eslint-disable-next-line
    const[data,setData]=useState([]);

    useEffect(()=>{
        // https://backend-coding-ninja3.onrender.com/course
        axios.get('https://backend-coding-ninja3.onrender.com/course')
        .then((res)=>setData(res.data))
        .catch(err=>console.log(err));
    },[])
 
    // console.log(data);
  return (
    <div>
        <img className='enroll-bg-img' alt='404' src={blueBg} />
    
    <div className='enroll-bg'>
        
        <p><h1>Online Coding Courses</h1> </p>
        <h6>Most loved online coding courses for college students and working professionals</h6>
        <div className='enroll-btn'>
        <button className=' btn-1'>Browse Popular Course</button><button className=' btn-2'>Try for free</button></div>
        </div>

        <div className='advt'>
            <img src='https://files.codingninjas.com/gsst-homepage_web-27881.svg' alt='404' />
        </div>
        <div className='course-section'>
        <h2>Courses specially curated for</h2>
        <div className='choice'>
        <div  className='no-work-ex'>
        <h6 style={{backgroundColor:'greenyellow',textAlign:'center'}}>No Work Experience</h6>
        <h3>Recommended courses for students</h3>
        <div className='no-work'>
        <NoWork/>
        </div>
        </div>
        <div className='work-exp'>
        <h5 style={{backgroundColor:'greenyellow',textAlign:'center'}}>
        Having work experience</h5>
        <h3>Recommended courses for professionals</h3>
        <div className='work-ex'>
            <WorkEx/>
        </div>
        
        </div>
        </div>
        </div>
        {/* {
            data.map((n,index)=>{
                return(
                    <div key={index} className='course-card'>
                        <div className='card-1'>
                            <div>
                            <div style={{opacity:'.6'}}>{n.type}</div>
                            <div><h5>{n.name}</h5></div>
                            </div>
                            <img src={n.image} alt='404 course-image' />
                            </div>
                        <div className='card-2'>
                            <div>
                                <img src={n.time_img} alt='404 time-image'/>{n.time}  
                            </div>
                            <div><img src={n.project_img}/>{n.projects}</div>
                            <div>4.8<img style={{width:'90px'}} src={n.rating} />({n.enrolled})</div>
                        </div>

                    </div>
                )
            })
        } */}
    </div>
  )
}

export default Enroll