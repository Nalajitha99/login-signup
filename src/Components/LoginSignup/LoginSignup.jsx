import React, { useState } from 'react'
import './LoginSignup.css'
import  Axios  from 'axios'

export const LoginSignup = () => {

    const url =""
    const [data,setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            name: data.name,
            email: data.email,
            password: data.password
        })
        .then(res=>{
            console.log(res.data)
        })
    }

    function handle(e){
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)   
    }

    const [action,setAction] = useState("Sign Up")

  return ( 
    <form onSubmit={(e)=>  submit(e)}>
    <div className='Container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            {action==="Log In"?<div></div>:<div className='input'>
                <input type='text' onChange={(e)=>handle(e)} id="name" value={data.name} placeholder='Name'></input>
            </div>}
            <div className='input'>
                <input type='email' onChange={(e)=>handle(e)} id="email" value={data.email} placeholder='Email'></input>
            </div>
            <div className='input'>
                <input type='password' onChange={(e)=>handle(e)} id="password" value={data.password} placeholder='Password'></input>
            </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className='forgot-password'>Lost Password? <span>Click Here!</span></div>}
        <div className='submit-container'>
            <div className={action==="Log In"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Log In")}}>Log In</div>
        </div>
        
    </div>
    </form>
  )
}
