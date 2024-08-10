import React from 'react';
import { Link } from 'react-router-dom';
import '../../asserts/AdminSidebar.css';

const AdminSidebar = ({ onLogout }) => {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li><Link to="/admin/dashboard">Dashboard</Link></li>
        <li><Link to="/admin/users">Manage Users</Link></li>
        <li><Link to="/admin/register">Registered Events</Link></li>
        <li><Link to="/admin/adminpayment">Payments</Link></li>
        <li><Link to="/admin/settings">Settings</Link></li>
      </ul>
      <button className="sidebar-logout-button" onClick={onLogout}>Logout</button>
    </div>
  );
};

export default AdminSidebar;
