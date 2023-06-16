import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [last_name,setLastname]=useState('');
    const [address,setAddress]=useState('');
    const [age,setAge]=useState(''); 
    const [password,setPassword]=useState('');
    const [phone,setPhone]=useState('');
  
    const navigate=useNavigate();

    const submitFn=async(e)=>{
        e.preventDefault();
        try {
    // Check if the First Name is an Empty string or not.

    if (name.length === 0) {
        alert('Invalid Form, First Name can not be empty')
        return
      }
      if (last_name.length === 0) {
        alert('Invalid Form, First Name can not be empty')
        return
      }
  
      // Check if the Email is an Empty string or not.
  
      if (email.length === 0) {
        alert('Invalid Form, Email Address can not be empty')
        return
      }
  
      // check if the password follows constraints or not.
  
      // if password length is less than 8 characters, alert invalid form.
  
      if (password.length < 8) {
        alert(
          'Invalid Form, Password must contain greater than or equal to 8 characters includes Uppercase,Lowercase letter,Numbers,Special Characters',
        )
        return
      }
  
      // variable to count upper case characters in the password.
      let countUpperCase = 0
      // variable to count lowercase characters in the password.
      let countLowerCase = 0
      // variable to count digit characters in the password.
      let countDigit = 0
      // variable to count special characters in the password.
      let countSpecialCharacters = 0
  
      for (let i = 0; i < password.length; i++) {
        const specialChars = ['!','@','#','$','%','^','&','*','(',')','_','-','+','=','[','{',']','}',':',';','<','>',]
  
        if (specialChars.includes(password[i])) {
          // this means that the character is special, so increment countSpecialCharacters
          countSpecialCharacters++
        } else if (!isNaN(password[i] * 1)) {
          // this means that the character is a digit, so increment countDigit
          countDigit++
        } else {
          if (password[i] === password[i].toUpperCase()) {
            // this means that the character is an upper case character, so increment countUpperCase
            countUpperCase++
          }
          if (password[i] === password[i].toLowerCase()) {
            // this means that the character is lowercase, so increment countUpperCase
            countLowerCase++
          }
        }
      }
  
      if (countLowerCase === 0) {
        // invalid form, 0 lowercase characters
        alert('Invalid Form, 0 lower case characters in password')
        return
      }
  
      if (countUpperCase === 0) {
        // invalid form, 0 upper case characters
        alert('Invalid Form, 0 upper case characters in password')
        return
      }
  
      if (countDigit === 0) {
        // invalid form, 0 digit characters
        alert('Invalid Form, 0 digit characters in password')
        return
      }
  
      if (countSpecialCharacters === 0) {
        // invalid form, 0 special characters characters
        alert('Invalid Form, 0 special characters in password')
        return
      }
  
      // if all the conditions are valid, this means that the form is valid
  
      alert('Form is valid')


            // sending user detials to backend
            const details=await axios.post('https://backend-coding-ninja3.onrender.com/register',{
                name,
                last_name,
                email,
                address,
                phone,
                age,
                password
            })
            if(details){
                alert('Detials Submitted. Please Login to continue');
                console.log('User Registered');
                navigate('/login')
            }
        } catch (error) {
            console.log('Error in user registration',error);
        }
    }
  return (
    <div className='logout'>
    <form onSubmit={submitFn}>
    <label>Name</label>
    <input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>
    <label>Last Name</label>
    <input type='text' value={last_name} onChange={(e)=>setLastname(e.target.value)}></input>
    <label>E-mail</label>
    <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
    <label>Address</label>
    <input type='text' value={address} onChange={(e)=>setAddress(e.target.value)}></input>
    <label>Phone No.</label>
    <input type='text' value={phone} onChange={(e)=>setPhone(e.target.value)}></input>
    <label>Age</label>
    <input type='text' value={age} onChange={(e)=>setAge(e.target.value)}></input>
    <label>Password</label>
    <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
    
    <button type='submit'>Submit</button>
    </form>
    </div>
  )
}

export default Logout