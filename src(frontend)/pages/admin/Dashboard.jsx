import React, { useState, useEffect } from 'react';
import '../../asserts/Dashboard.css'; // Make sure to correct the path

const Dashboard = () => {
  const [userCount, setUserCount] = useState(0);
  const [activeUserCount, setActiveUserCount] = useState(0);
  const [eventCount, setEventCount] = useState(0);

  useEffect(() => {
    // Fetch users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUserCount(storedUsers.length);

    // Calculate active users
    const activeUsers = storedUsers.filter(user => user.isActive).length;
    setActiveUserCount(activeUsers);

    // Fetch events from localStorage
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEventCount(storedEvents.length);
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Admin Dashboard</h1>
      <div className="dashboard-stats-container">
        <div className="dashboard-stat-box">
          <div className="stat-value">{userCount}</div>
          <div className="stat-label">Total Users</div>
        </div>
        <div className="dashboard-stat-box">
          <div className="stat-value">{activeUserCount}</div>
          <div className="stat-label">Active Users</div>
        </div>
        <div className="dashboard-stat-box">
          <div className="stat-value">{eventCount}</div>
          <div className="stat-label">Total Event Registrations</div>
        </div>
      </div>
      {/* Remove the charts temporarily */}
      <div className="dashboard-charts">
        <p>Charts will appear here.</p>
      </div>
    </div>
  );
};

export default Dashboard;