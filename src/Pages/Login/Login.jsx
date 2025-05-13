import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/logo.png';
import {login,signup} from '../../firebase'

function Login() {
  const [signState, setSignState] = useState('Sign Up');

  const[name,setName]=useState('')
    const[email,setemail]=useState('')
      const[password,setpassword]=useState('')

      const user_auth = async (event)=>{
        event.preventDefault()
       if(signState==='Sign In'){
        await login (email,password)
       }else{
        await signup(name,email,password)
       }
      }

  const toggleSignState = () => {
    setSignState((prev) => (prev === 'Sign Up' ? 'Sign In' : 'Sign Up'));
  };

  return (
    <div className="login">
      <img src={logo} className="login-logo" alt="Netflix Logo" />
      <div className="login-form">
        <h2>{signState}</h2>
        <form>
          {signState === 'Sign Up' && <input type="text" value={name}  onChange={(e)=>{setName(e.target.value)}} placeholder="Your Name" />}
          <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Your Email" />
          <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="Your Password" />
          <button onClick={user_auth} type="submit">{signState}</button>
          <div className="form-help">
            <div className="remember">
              <label>
                <input type="checkbox" /> Remember Me
              </label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === 'Sign In' ? (
            <p>
              Already have an account?{' '}
              <span onClick={toggleSignState}>Sign In Now</span>
            </p>
          ) : (
            <p>
              New to Netflix? <span onClick={toggleSignState}>Sign Up Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
