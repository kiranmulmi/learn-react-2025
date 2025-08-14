import React, { useState } from 'react';
import { useNavigate } from "react-router";
import { doLogin } from '../../services/auth';
import { toast } from 'react-toastify';

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
  const handleBtnClick = async () => {
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
    const loginStatus = await doLogin(email, password);
    if (loginStatus) {
      toast.success(`Login successful, welcome ${email}`);
      navigate('/admin/dashboard');
    } else {
      toast.error("Invalid email or password");
      setLoginError('Invalid email or password');
    }

  }
  return (
    <div>
      <div id="login-form">
        <h2>Admin Login</h2>
        <div>
          <label>Email</label>
          <div>
            <input 
              type="text"
              onChange={(e) => handleEmailChange(e)}
              value={email} />
          </div>
          <div style={{color: 'red'}}>{emailError}</div>
        </div>
        <br/>
        <div>
          <label>Password</label>
          <div>
            <input 
              type="password" 
              placeholder=""
              onChange={(e) => handlePasswordChange(e)}
              value={password} />
              <div style={{color: 'red'}}>{passwordError}</div>
          </div>  
        </div>
        <div style={{color: 'red'}}>{loginError}</div>
        <br/>
        <button type='button' onClick={() => handleBtnClick()} className='btn-primary'>Login</button>
      </div>
    </div>
  );
}

export default Login;