import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useUser } from '../context/UserContext';
import Navbar from '../components/Navbar';
import '../asserts/SettingsPage.css';

const SettingsPage = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, setUser } = useUser();
  const [profile, setProfile] = useState({ firstName: '', lastName:'', email: '' });
  const [password, setPassword] = useState({ current: '', new: '' });

  useEffect(() => {
    if (user) {
      setProfile({ firstName: user.firstName, lastName: user.lastName, email: user.email });
    }
  }, [user]);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPassword({ ...password, [name]: value });
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    // Handle profile update logic
    console.log('Profile updated:', profile);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // Handle password change logic
    console.log('Password changed:', password);
  };

  return (
    <div className={`settings-page ${theme}`}>
      <Navbar />
      <header className="settings-header">
        <h1>Welcome, {profile.firstName} {profile.lastName}!</h1>
      </header>
      <button onClick={toggleTheme} className="theme-toggle">
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>

      <div className="profile-section">
        <h2>Edit Profile</h2>
        <form onSubmit={handleProfileSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">Name:</label>
            <input type="text" id="firstName" name="firstName" value={profile.firstName} onChange={handleProfileChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={profile.email} onChange={handleProfileChange} />
          </div>
          <button type="submit" className="save-button">Save</button>
        </form>
      </div>

      <div className="password-section">
        <h2>Change Password</h2>
        <form onSubmit={handlePasswordSubmit}>
          <div className="form-group">
            <label htmlFor="current-password">Current Password:</label>
            <input type="password" id="current-password" name="current" value={password.current} onChange={handlePasswordChange} />
          </div>
          <div className="form-group">
            <label htmlFor="new-password">New Password:</label>
            <input type="password" id="new-password" name="new" value={password.new} onChange={handlePasswordChange} />
          </div>
          <button type="submit" className="save-button">Save</button>
        </form>
      </div>
    </div>
  );
};

export default SettingsPage;
