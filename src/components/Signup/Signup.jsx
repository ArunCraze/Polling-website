import React, { useState } from 'react';
import './Signup.css';
import f1 from './Elections.jpg';
//import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const nav=useNavigate();
  const [action, setAction] = useState("Sign Up");
  const handleSignup =() =>{
    nav('/home')
  }

  return (
    <div style={{ backgroundImage: `url(${f1})`, backgroundSize: 'cover', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className='container'>
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <input type="text" placeholder='Name' />
          </div>
          <div className="input">
            <input type="email" placeholder='Email ID' />
          </div>
          <div className="input">
            <input type="password" placeholder='Password' />
          </div>
          <div className="input">
            <input type="text" placeholder='Phone' />
          </div>
        </div>
        <div className="sumit-container">
          { <div to={'/'} className="sumit" onClick={handleSignup}>Sign Up</div> }
          
        </div>
      </div>
    </div>
  );
};
export default Signup;