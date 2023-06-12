import React,{useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useOrder } from '../context/order';





const DetailComp = () => {
    const location=useLocation();
    const data=[location.state];
    // console.log(data);
// eslint-disable-next-line
    const [order,setOrder]=useOrder();
    // console.log(order)

    const [price,setPrice]=useState([]);
    console.log(price);
  return (
    <div> 
        {data.map((n,index)=>{
            return(
        <div key={index} className='detail-section'>
        <div className='detail-area'>
            <div>
            <h1>{n.type}-{n.name}</h1><br/>
            <h5>{n.for}</h5><br/>
            <p>{n.description}</p><br/>
            <p>4.8 &nbsp;<span><img src={n.rating} alt='404' />&nbsp; {n.ratedBy}</span></p>
            </div>
            <div className='enroll-btn'>
        <button className=' btn-1'>Enroll Now</button><button className=' btn-2'>Try for free</button>
        </div>
        <hr/>
        <div className='mini-details'>
            <div>{n.enrolled}</div>
            <div>{n.projects}</div>
            <div>{n.duration}</div>
            <div>{n.time} of lecture videos</div>
        </div>
        </div>
        <div className='image-section'>
            <img src={n.courseImg} alt='404'/>
        </div>
        
    </div>
    )
        })}

        <div >
            <img style={{width:'100%'}} src='https://files.codingninjas.com/gsst-homepage_web-27881.svg' alt='404' />
        </div>    
{
    data.map((n)=>{
        return(
            <div className='price-section'>
    <div><h1>Select a plan based on your needs</h1></div>
    <div className='price-flex'>
        <div className='price-flex-card'>
            <h1>Basic</h1>
            <h5>
            Rs. {n.early_price}/-
            </h5>
            <Link className='link' to='/payment-page' onClick={() => {
                setOrder([n]);
                localStorage.setItem('order', JSON.stringify([n]));
                console.log("Item Added to Order");

                setPrice(...[n.name])
                console.log(price);
              }}>
            <h6>
            Proceed to checkout
            </h6>
            </Link>

            </div>
            
        <div className='price-flex-card'>
        <h1>Standard</h1>
            <h5>
                
           Rs. {n.price}/-
          
            </h5>
            <Link className='link' to='/payment-page' onClick={() => {
                setOrder([n]);
                localStorage.setItem('order', JSON.stringify([n]));
                console.log("Item Added to Order");
              }}>
            <h6> 
                Proceed to checkout
            </h6>
            </Link>
        </div>
    </div>
    <div className='pay-detail'>
        <div><img src='https://files.codingninjas.com/percentage-1-11045.png' alt='404'/>No Cost EMI on all major credit cards*</div>
        <div><img src='https://files.codingninjas.com/group-11044.png' alt='404'/>No Cost EMI on all major credit cards*</div>
        <div><img src='https://files.codingninjas.com/calendar-11043.png' alt='404'/>7-day money back Guarantee</div>
    </div>
</div>
        )
    })
}

    </div>
  )
}

export default DetailComp