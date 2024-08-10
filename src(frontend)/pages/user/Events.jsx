import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../asserts/Events.css';
import eventImage from '../../asserts/Image/360_F_733502690_GYuQrHyM4W7xxhRW0UPGrySJxJoRnNz4.jpg';
import Modal from '../../components/Model';
import axios from 'axios';

const Events = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    startDate: '',
    endDate: '',
    eventType: '',
    city: '',
    state: '',
    pincode: ''
  });

  const [showPopup, setShowPopup] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [minDate, setMinDate] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setMinDate(today);

    // Check login status
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInStatus);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      setShowModal(true);
      return;
    }

    if (formData.phone.length !== 10 || isNaN(formData.phone)) {
      alert('Phone number must be exactly 10 digits long.');
      return;
    }

    if (formData.pincode.length !== 6 || isNaN(formData.pincode)) {
      alert('Pincode must be exactly 6 digits long.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/event/add', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        setShowPopup(true);
      } else {
        alert('Failed to register event. Please try again.');
      }
    } catch (error) {
      console.error('Error during event registration:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    navigate('/');
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
    'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
    'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Delhi'
  ];

  return (
    <div>
      <Navbar />
      <div className="events-page-content">
        <img src={eventImage} alt="Event Background" className="event-background-image" />
        <h1 className="event-title">Register Your Event</h1>
        <p className="event-description">Fill out the form below to register your event and make it a memorable experience.</p>
        <form className="event-form" onSubmit={handleSubmit}>
          <div className="event-form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="event-form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              maxLength="10"
            />
          </div>
          <div className="event-form-group">
            <label htmlFor="startDate">Start Date and Time:</label>
            <input type="datetime-local" id="startDate" name="startDate" value={formData.startDate} onChange={handleChange} required min={new Date().toISOString().slice(0, -8)} />
          </div>
          <div className="event-form-group">
            <label htmlFor="endDate">End Date and Time:</label>
            <input type="datetime-local" id="endDate" name="endDate" value={formData.endDate} onChange={handleChange} required min={formData.startDate || new Date().toISOString().slice(0, -8)} />
          </div>
          <div className="event-form-group">
            <label htmlFor="eventType">Event Type:</label>
            <select id="eventType" name="eventType" value={formData.eventType} onChange={handleChange} required>
              <option value="">Select an Event</option>
              <option value="Corporate Event">Corporate Event</option>
              <option value="Wedding">Wedding</option>
              <option value="Birthday Party">Birthday Party</option>
              <option value="Christmas Event">Christmas Event</option>
              <option value="Diwali Celebration">Diwali Celebration</option>
              <option value="Food Fest">Food Fest</option>
              <option value="Concert">Concert</option>
              <option value="Exhibition">Exhibition</option>
              <option value="Fashion Show">Fashion Show</option>
              <option value="Product Launch">Product Launch</option>
              <option value="Tech Conference">Tech Conference</option>
              <option value="Charity Gala">Charity Gala</option>
            </select>
          </div>
          <div className="event-form-group">
            <label htmlFor="city">City:</label>
            <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />
          </div>
          <div className="event-form-group">
            <label htmlFor="state">State:</label>
            <select id="state" name="state" value={formData.state} onChange={handleChange} required>
              <option value="">Select a State</option>
              {states.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>
          <div className="event-form-group">
            <label htmlFor="pincode">Pincode:</label>
            <input type="text" id="pincode" name="pincode" value={formData.pincode} onChange={handleChange} required maxLength="6" />
          </div>
          <button type="submit" className="event-submit-button">Submit</button>
        </form>
        {showPopup && (
          <div className="event-popup">
            <div className="event-popup-content">
              <h2>Confirm Registration</h2>
              <p>Name: {formData.name}</p>
              <p>Phone: {formData.phone}</p>
              <p>Start Date and Time: {formData.startDate}</p>
              <p>End Date and Time: {formData.endDate}</p>
              <p>Event Type: {formData.eventType}</p>
              <p>City: {formData.city}</p>
              <p>State: {formData.state}</p>
              <p>Pincode: {formData.pincode}</p>
              <button onClick={handlePopupClose}>Close</button>
            </div>
          </div>
        )}
        {showModal && <Modal isOpen={showModal} onClose={handleCloseModal} />}
        <div className="event-facts">
          <h2>Interesting Facts</h2>
          <ul>
            <li>Corporate events can boost employee morale and productivity.</li>
            <li>Weddings have been celebrated for centuries, with various customs around the world.</li>
            <li>Food festivals offer a unique opportunity to explore different cuisines.</li>
            <li>Concerts are a great way to enjoy live music and connect with artists.</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Events;
