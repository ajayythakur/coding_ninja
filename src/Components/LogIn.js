import React, { useState } from 'react'
import axios from 'axios';
import {useAuth} from './context/auth'
import { Link, useNavigate } from 'react-router-dom';


const LogIn = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState(''); 
  const [auth,setAuth]=useAuth();
const navigate=useNavigate();
  const submitHandler=async(e)=>{
    e.preventDefault(); 
    console.log(email,password)
    try {
      if(email.length===0){
        alert("Please Enter Valid Email")
      }
      if(password.length===0){
        alert("Please enter a valid Password.Password length should be 8 contains UpperCase,Lowercase Letter,Numbers,Special Character(!,@,# etc)");
      }
      const res=await axios.post("https://backend-coding-ninja3.onrender.com/login",{
        email,
        password
      });
      if(res){
        alert(`Welcome Ninja!`)
        navigate('/home')
        console.log("Login Successfully");
        setAuth({
          ...auth,
          user:res.data.user,
          token:res.data.token
        });
        localStorage.setItem("auth",JSON.stringify(res.data));
      }
    } catch (error) {
      console.log('Error in login',error)
    } 
  }
  return (
    <div>
        <div className='login'>
            <span>Login/Sign Up</span>
            <div>
                <img alt='404' style={{display:'inline'}} src='https://files.codingninjas.in/icon-google-24742.png' />
                <span style={{display:'inline'}}><a target='blank' href='https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?access_type=offline&client_id=974791617509-tbrgtb2s7r15h1pqe6qb9rhvvk3mh161.apps.googleusercontent.com&prompt=select_account&redirect_uri=https%3A%2F%2Fadmin.codingninjas.com%2Fusers%2Fauth%2Fgoogle_oauth2%2Fcallback&response_type=code&scope=email%20profile&state=edb35552d0d5cdc2c804131eb3bbf00723367fbd5aab37c8&service=lso&o2v=1&flowName=GeneralOAuthFlow'>Login with Google</a></span>
            </div>
            <div>
                <img alt='404' style={{display:'inline'}} src='https://files.codingninjas.in/icon-fb-24743.png' />
                <span style={{display:'inline'}}>Login with facebook</span>
            </div>
            <div>
                <img alt='404' style={{display:'inline',height:'40px',width:'20px'}} src='https://files.codingninjas.in/naukri-21404.svg' />
                <span style={{display:'inline'}}>Login with Naukri</span>
            </div>
            <p>OR</p>
            <p style={{textDecoration:'none'}}>use your email address</p>

            <form onSubmit={submitHandler}>
            <input placeholder='Email address *' required
            onChange={(e)=>setEmail(e.target.value)}  value={email}
            /> 
            <input placeholder='Enter password' type='password' required
            onChange={(e)=>setPassword(e.target.value)} value={password}
            />
            <br/>
            <button type='submit' >Proceed</button>
            </form>
            <div>Not have an account? <Link to='/logout' >Signup</Link></div>


        </div>
    </div>
  )
}

export default LogIn