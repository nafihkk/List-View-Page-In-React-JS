import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';  // Optional styling

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Add this line for navigation

  const handleLogin = (e) => {
    e.preventDefault();
    // For this demo, just log in without authentication
    console.log('Logging in:', { username, password });
    // Navigate to List View after login
    navigate('/posts');  // Redirect to the List View page
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
