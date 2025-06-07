// src/pages/Login.jsx
import React, { useState } from 'react';
import {login} from "../utils/api"
import { useNavigate } from 'react-router-dom';
import '../styles/login.css'; // Assuming you have a CSS file for styling

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await login(form);
    if (res.token) {
      alert("Login successful!");
      localStorage.setItem('token', res.token); // Store the token after successful login
      navigate('/profile'); // Redirect user to profile page
    } else {
      alert(res.msg || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} />
        <button type="submit">Sign In</button>
        <div>or</div>
        <a href="http://localhost:5000/api/auth/google">Sign up with Google</a>
        <div>Don't have an account? <a href="/signup">Sign Up</a></div>
        <div>By signing in, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.</div>


        
      </form>
    </div>
  );
};

export default Login;
