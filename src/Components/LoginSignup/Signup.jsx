import React, { useState } from 'react';
import './LoginSignup.css'



const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Signup successful:', data); 
        
        setFormData({
          username: '',
          email: '',
          password: '',
        });
      } else {
        console.error('Signup failed:', await response.text());
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  const [action,setAction] = useState("Sign Up")

  return (
    <form onSubmit={handleSubmit}>
    <div className='Container'>
      <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
      <div className='inputs'>
      <div className='input'>
        <input placeholder='Username' type="text" id="username" name="username" value={formData.username} onChange={handleInputChange}/>
      </div>
      <div className='input'>
        <input placeholder='Email' type="email" id="email" name="email" value={formData.email} onChange={handleInputChange}/>
      </div>
      <div className='input'>
        <input placeholder='Password' type="password" id="password" name="password" value={formData.password} onChange={handleInputChange}/>
      </div>
      {/* <div className='forgot-password'>Already Have An Account? <span>Click Here!</span></div> */}
      <div className='submit-container'>
      <button className='button' type="submit" onClick={()=>{setAction("Sign up")}}>Sign Up</button>
      </div>
      </div>
      </div>
    </form>
  );
};

export default SignupForm;
