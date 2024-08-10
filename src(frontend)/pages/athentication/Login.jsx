import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import '../../asserts/Login.css';
import loginImage from '../../asserts/Image/brooke-lark-YwSy97_Rk1o-unsplash.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    console.log(isLoading);

    // Check for admin credentials directly
    if (role === 'admin' && email === 'admin@eco.com' && password === 'EcoFy') {
      alert('Admin login successful!');
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('role', 'admin');
      window.location.href = '/admin';
      return;
    }

    try {
      let response;

      if (role === 'admin') {
        response = await axios.post('http://localhost:8080/admin/login', {
          email,
          password,
        });
      } else {
        response = await axios.post('http://localhost:8080/user/login', {
          email,
          password,
        });
      }

      const token = response.data.token;
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('role', role);
      localStorage.setItem('token', token);

      if (role === 'admin') {
        window.location.href = '/admin';
      } else {
        window.location.href = '/';
      }
    } catch (error) {
      setError('Login failed. Please check your credentials and try again.');
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      {isLoading && (
        <div className="spinner-overlay">
          <div className="spinner"></div>
        </div>
      )}
      <div className={`login-page-content ${isLoading ? 'blur' : ''}`}>
        <div className="login-image-container">
          <img src={loginImage} alt="Login" />
        </div>
        <div className="login-form-container">
          <h1>Login</h1>
          {error && <p className="login-error-message">{error}</p>}
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
            />

            <label htmlFor="password">Password</label>
            <div className="password-container-login">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
              />
              <span className="password-toggle-login" onClick={() => setShowPassword(!showPassword)}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
            </div>

            <label htmlFor="role">Role</label>
            <select
              id="role"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              disabled={isLoading}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>

            <button type="submit" disabled={isLoading}>
              Login
            </button>
            <div className="login-form-footer">
              <p>Don't have an account? <a href="/signup">Signup here</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
