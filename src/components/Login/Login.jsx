import React, { useState } from 'react'
import './Login.css'
import f1 from './Elections.jpg';
//import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const nav=useNavigate();{
    };
    const handleLogin = () =>{
        nav('/home')
    };
    const handleSignup = () =>{
        nav('/sign')
    };

  const[action,setAction]=useState("Login")


  return (
    <div style={{ backgroundImage: `url(${f1})`, backgroundSize: 'cover', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
        
          <input type="text" placeholder='Name'/>
        </div>
        <div className="input">
         
          <input type="email" placeholder='Email ID'/>
        </div>
        <div className="input">
        
          <input type="password" placeholder='Password'/>
        </div>
        <div className="input">
          
          <input type="text" placeholder='Phone'/>
        </div>
      </div>
      
      <div className="sumit-container">
       
        { <div  to={'/home'} className="sumit" button type="button" onClick={handleLogin}>Login</div> }
        { <div to={'/sign'} className="sumit" onClick={handleSignup}>SignUp</div> }
      </div>
     </div> 
 </div>
  )
}
export default Login;