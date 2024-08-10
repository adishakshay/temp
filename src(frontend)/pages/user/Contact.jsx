import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer'; 
import '../../asserts/Contact.css';
import contactImage from '../../asserts/Image/miles-burke-idhx-MOCDSk-unsplash.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    PhoneNumber: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.PhoneNumber.length !== 10 || isNaN(formData.PhoneNumber)) {
      alert('Phone number must be exactly 10 digits long.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/contact/add', formData);
      alert('We will connect you soon!');
      console.log('Response:', response.data);

      setFormData({
        name: '',
        PhoneNumber: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('There was an error!', error);
      alert('An error occurred while submitting the form. Please try again later.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="contact-page-content">
        <div className="contact-image-container">
          <img src={contactImage} alt="Contact" />
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h1>Contact Us</h1>
          <div className="contact-form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact-form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="text"
              id="PhoneNumber"
              name="PhoneNumber"
              value={formData.PhoneNumber}
              onChange={handleChange}
              required
              maxLength="10"
            />
          </div>
          <div className="contact-form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact-form-group">
            <label>Message:</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <Footer /> 
    </div>
  );
};

export default Contact;
