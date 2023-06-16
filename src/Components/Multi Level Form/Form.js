import React, { useState } from 'react'
import FirstForm from './FirstForm';
import SecondForm from './SecondForm';
import ThirdForm from './ThirdForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const FormTitles = ["FirstForm", "SecondForm", "ThirdForm"];

  const [formData, setFormData] = useState({
    name: "",
    country: "",
    email: "",
    phone: "",
    address_one: "",
    address_two: "",
    pincode: "",
    state: "",
    city: "",
    gradYear: "",
    College: "",
    degree: "",
    goal: "",
    target_company: ''
  });

  const PageDisplay = () => {
    if (page === 0) {
      return <FirstForm formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <SecondForm formData={formData} setFormData={setFormData} />;
    } else {
      return <ThirdForm formData={formData} setFormData={setFormData} />;
    }
  };

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://backend-coding-ninja3.onrender.com/classroom_details", {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        gradYear: formData.gradYear,
        college: formData.college,
        degree: formData.degree,
        country: formData.country,
        state: formData.state,
        city: formData.city,
        pincode: formData.pincode,
        address_one: formData.address_one,
        address_two: formData.address_two,
        goal: formData.goal,
        target_company: formData.target_company,
      })
      if (res) {
        alert("Data Saved..Thank You !")
        console.log('Data saved', res)
        navigate('/home')
      }
    } catch (error) {
      console.log('Error in sending data', error);
    }
  }
  return (
    <div className='data-form'>

      <div >{PageDisplay()}</div>

      <div className='form-buttons'>
        <button className='next-prev-button'
          disabled={page === 0}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        >
          Prev 
        </button>
        <button className='next-prev-button'
          onClick={() => {
            if (page === FormTitles.length - 1) {
              alert("FORM SUBMITTED");
              console.log(formData);
            } else {
              setPage((currPage) => currPage + 1);
            }
          }}
        >
          {page === FormTitles.length - 1 ? (<span onClick={submitData}>Submit</span>) : "Next"}
        </button>

      </div>
    </div>
  )
}

export default Form