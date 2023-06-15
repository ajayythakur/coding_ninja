import React, { useEffect, useState } from 'react'
import axios from 'axios';
const AluminiStories = () => {
const[data,setData]=useState([]);

useEffect(()=>{
    axios.get("http://localhost:8080/alumini_stories")
    .then((res)=>setData(res.data))
    .catch((error)=>console.log(error));
},[])
console.log(data);
  return (
    <div className='story-flex'>
    {
        data.map((story,index)=>{
            return(
                <div className="page-wrapper">  
  <div className="card-wrapper">
    <div className="card-details">
      <h3 className="card-title" key={index}>{story.info}</h3>
      <br/> 
      </div>{/* end card-details */}
    <div className="reveal-details">
    <p>{story.description}</p>
      <p>{story.name}<br/>{story.designation}</p>
      <img alt='404' src={story.company_logo}/>
    </div>{/* end reveal-details */}
      <img className='student-img' src={story.photo} alt='404' />
    </div>
    </div>

            )
        })
    }    
    </div>
  )
}

export default AluminiStories