import React, { useState } from 'react';
import { useNavigate } from "react-router";
import { doLogin } from '../../services/auth';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
  }

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
  }

  // Handle Form Submission
  const handleBtnClick = () => {
    let error = false;
    if (email === '') {
      setEmailError("Email is required");
      error = true;
    } else if (password === '') {
      setPasswordError("Password is required");
      error = true;
    }

    if (error) {
      return;
    }
    const loginStatus = doLogin(email, password);
    if (loginStatus) {
      navigate('/admin/dashboard');
    } else {
      setLoginError('Invalid email or password');
    }

  }
  return (
    <div>
      <div id="login-form">
        <h2>Admin Login</h2>
        <div>
          <label>Email</label>
          <input 
            type="text" 
            placeholder="Enter your email"
            onChange={(e) => handleEmailChange(e)}
            value={email} />
            <div style={{color: 'red'}}>{emailError}</div>
        </div>
        <br/>
        <div>
          <label>Password</label>
          <input 
            type="password" 
            placeholder=""
            onChange={(e) => handlePasswordChange(e)}
            value={password} />
            <div style={{color: 'red'}}>{passwordError}</div>
        </div>
        <div style={{color: 'red'}}>{loginError}</div>
        <br/>
        <button type='button' onClick={() => handleBtnClick()}>Login</button>
      </div>
    </div>
  );
}

export default Login;