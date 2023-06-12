import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';


const NoWork = () => {
    const[data,setData]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/course')
        .then((res)=>setData(res.data))
        .catch(err=>console.log(err));
    },[])
  return (
    <div className='course-flex'>
    <div className='course-container'>
                {
            data.filter((item)=>item.category==='Web Development').map((n,index)=>{
                return(
                    <Link className='link' to='/course-detail' state={n}>
                    <div key={index} className='course-card'>
                        <div className='card-1'>
                            <div>
                            <div style={{opacity:'.6'}}>{n.type}</div>
                            <div><h5>{n.name}</h5></div>
                            </div>
                            <img src={n.image} alt='404 course' />
                            </div>
                        <div className='card-2'>
                            <div>
                                <img src={n.time_img} alt='404 time'/>{n.time}  
                            </div>
                            <div><img alt='404' src={n.project_img}/>{n.projects}</div>
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

export default NoWork