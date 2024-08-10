import React, { useState } from 'react';
import '../../asserts/Settings.css';

const Settings = () => {
  const [siteTitle, setSiteTitle] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [enableRegistration, setEnableRegistration] = useState(false);
  const [defaultUserRole, setDefaultUserRole] = useState('user');
  const [theme, setTheme] = useState('light');
  const [customCSS, setCustomCSS] = useState('');
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  const handleSaveChanges = (e) => {
    e.preventDefault();
    // Implement save logic (e.g., API call or localStorage)
    console.log('Settings saved:', {
      siteTitle,
      adminEmail,
      enableRegistration,
      defaultUserRole,
      theme,
      customCSS,
      twoFactorAuth,
    });
    alert('Settings have been saved successfully!');
  };

  return (
    <div className="settings-container">
      <h1 className="settings-title">Settings</h1>
      <form className="settings-form" onSubmit={handleSaveChanges}>
        {/* General Settings */}
        <section>
          <h2 className="settings-section-title">General Settings</h2>
          <label htmlFor="siteTitle" className="settings-label">Site Title</label>
          <input
            type="text"
            id="siteTitle"
            name="siteTitle"
            className="settings-input"
            placeholder="Enter the site title"
            value={siteTitle}
            onChange={(e) => setSiteTitle(e.target.value)}
            required
          />

          <label htmlFor="adminEmail" className="settings-label">Admin Email</label>
          <input
            type="email"
            id="adminEmail"
            name="adminEmail"
            className="settings-input"
            placeholder="Enter the admin email"
            value={adminEmail}
            onChange={(e) => setAdminEmail(e.target.value)}
            required
          />
        </section>

        {/* User Management */}
        <section>
          <h2 className="settings-section-title">User Management</h2>
          <label htmlFor="enableRegistration" className="settings-label">
            Enable User Registration
          </label>
          <input
            type="checkbox"
            id="enableRegistration"
            name="enableRegistration"
            className="settings-checkbox"
            checked={enableRegistration}
            onChange={(e) => setEnableRegistration(e.target.checked)}
          />

          <label htmlFor="defaultUserRole" className="settings-label">Default User Role</label>
          <select
            id="defaultUserRole"
            name="defaultUserRole"
            className="settings-input"
            value={defaultUserRole}
            onChange={(e) => setDefaultUserRole(e.target.value)}
            required
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </section>

        {/* Appearance */}
        <section>
          <h2 className="settings-section-title">Appearance</h2>
          <label htmlFor="theme" className="settings-label">Theme</label>
          <select
            id="theme"
            name="theme"
            className="settings-input"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            required
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>

          <label htmlFor="customCSS" className="settings-label">Custom CSS</label>
          <textarea
            id="customCSS"
            name="customCSS"
            className="settings-textarea"
            placeholder="Enter custom CSS"
            value={customCSS}
            onChange={(e) => setCustomCSS(e.target.value)}
          ></textarea>
        </section>

        {/* Security */}
        <section>
          <h2 className="settings-section-title">Security</h2>
          <label htmlFor="twoFactorAuth" className="settings-label">
            Two-Factor Authentication
          </label>
          <input
            type="checkbox"
            id="twoFactorAuth"
            name="twoFactorAuth"
            className="settings-checkbox"
            checked={twoFactorAuth}
            onChange={(e) => setTwoFactorAuth(e.target.checked)}
          />
        </section>

        <button type="submit" className="settings-button">Save Changes</button>
      </form>
    </div>
  );
};

export default Settings;
