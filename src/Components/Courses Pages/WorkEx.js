import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';


const WorkEx = () => {
    const[data,setData]=useState([]);

    useEffect(()=>{
        //  https://backend-coding-ninja3.onrender.com
        axios.get('http://localhost:8080/course')
        .then((res)=>setData(res.data))
        .catch(err=>console.log(err));
    },[])
  return (
    <div className='course-flex'>
    <div className='course-container'>
    {
data.map((n,index)=>{
    return(
        <Link className='link' to='/course-detail' state={n}>
        <div key={index} className='course-card'>
            <div className='card-1'>
                <div>
                <div style={{opacity:'.6'}}>{n.type}</div>
                <div><h5>{n.name}</h5></div>
                </div>
                <img  src={n.image} alt='404 course' />
                </div>
            <div className='card-2'>
                <div>
                    <img alt='404 course' src={n.time_img} />{n.time}  
                </div>
                <div><img alt='404 course' src={n.project_img}/>{n.projects}</div>
                <div>4.8<img alt='404' style={{width:'90px'}} src={n.rating} />({n.enrolled})</div>
            </div>

        </div>
        </Link>
    )
})
}

</div>
</div>
  )
}

export default WorkEx