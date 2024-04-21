
import React from 'react' ;
import './LoginSignup.css'
import email_icon from '../Assets/Icons/email.png'
import password_icon from '../Assets/Icons/password.png'
import logo from '../Assets/Icons/logo.jpeg'


const LoginSignup = () =>{
    

return (

<div className="container">
   <div className='logo1'><img src={logo} alt=""/></div> 
    <div className="header">

        <div className="text">welcome to GDP</div>
        <div className="t1" >  fill out the form to register </div>
    
        
    </div>
    
    <div className="inputs" >
        <div><text>Email adress</text></div>
        <div className="input">
            <img src={email_icon} alt="" />
            
            <input type="email" placeholder='Email adress' />
        </div>
        <div><text>Password</text></div>
        <div className="input">
            <img src={password_icon} alt=""  />
            <input type="password" placeholder='Password' />
        </div>
        
       
        <div><text>Confirm Password</text></div>
        <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Confirm Password' />
        </div>
        <div className="login">Also have an account? <span>Login!</span></div>
        <div className="submit-container" >
            <button className="submit">Sign Up</button>
            

        </div>
        
    </div>
    
</div>

);

};
export default LoginSignup