import React, { useState } from 'react';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

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
    if (email === '') {
      emailError = "Email is required";
    }
    console.log('Email', email);
    console.log('Password', password);
  }
  return (
    <div>
      <div>
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
        </div>
        <button type='button' onClick={() => handleBtnClick()}>Login</button>
      </div>
    </div>
  );
}

export default Login;