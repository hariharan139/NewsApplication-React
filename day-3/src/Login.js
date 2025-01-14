import React, { useState } from 'react'

function Login() {
    const [isLoggedin,setisLoggedin]=useState(false)
  const  togglebutton=()=>{
        setisLoggedin((prev)=>!prev)

    }
    return (
        <div >
      <h1 >
        {isLoggedin ? "Welcome back!" : "Please log in"}
      </h1>
            
            <button onClick={togglebutton} >
                {isLoggedin ? 'Logout' : 'Login'}
            </button>
            
        </div>
    )
}

export default Login
