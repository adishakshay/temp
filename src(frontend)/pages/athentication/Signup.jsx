import React, { useState } from 'react';
import axios from 'axios';
import { useUser } from '../../context/UserContext';
import Navbar from '../../components/Navbar';
import '../../asserts/Signup.css';
import signupImage from '../../asserts/Image/yutacar-JKMnm3CIncw-unsplash.jpg';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const { setUser } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const user = { firstName, lastName, email: email.toLowerCase(), password };

    try {
      // Replace the URL with your backend endpoint
      const response = await axios.post('http://localhost:8080/signup/add', user);

      if (response.status === 201) {
        // Assuming the response contains the user data
        const registeredUser = response.data;
        setUser(registeredUser);
        localStorage.setItem('loggedInEmail', registeredUser.email);

        alert('Signup successful!');
        window.location.href = '/login';
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        // Assuming 409 is returned when user already exists
        setError('User already exists');
      } else {
        setError('An error occurred during signup');
        console.error('Signup error:', error);
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="signup-page-content">
        <div className="signup-form-container">
          <h1>Signup</h1>
          {error && <p className="signup-error-message">{error}</p>}
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />

            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <button type="submit">Signup</button>
            <div className="signup-form-footer">
              <p>Already have an account? <a href="/login">Login here</a></p>
            </div>
          </form>
        </div>
        <div className="signup-image-container">
          <img src={signupImage} alt="Signup" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
