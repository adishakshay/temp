import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import '../../asserts/Payment.css';

const eventAmounts = {
  'Corporate Event': 50000,
  'Wedding': 300000,
  'Birthday Party': 3000,
  'Christmas Event': 4000,
  'Diwali Celebration': 3000,
  'Food Fest': 10000,
  'Concert': 60000,
  'Exhibition': 40000,
  'Fashion Show': 100000,
  'Product Launch': 20000,
  'Tech Conference': 7000,
  'Charity Gala': 200000,
};

const Payment = () => {
  const [amount, setAmount] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEventChange = (e) => {
    const event = e.target.value;
    setSelectedEvent(event);
    setAmount(eventAmounts[event] || '');
  };

  const savePaymentDetails = async (paymentData) => {
    try {
      await axios.post('http://localhost:8080/payment/create', paymentData);
      alert('Payment details saved successfully!');
    } catch (error) {
      console.error('Error saving payment details:', error);
    }
  };

  const validateEmail = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.some(user => user.email === email);
  };

  const handlePayment = () => {
    if (!validateEmail()) {
      setErrorMessage('This email is not registered. Please use a registered email.');
      return;
    }

    const options = {
      key: 'rzp_test_OVdQrBXo4sL1ct', // Replace with your actual Razorpay Test Key ID
      amount: amount * 100, // Amount in paise (e.g., 1000 paise = INR 10)
      currency: 'INR',
      name: 'EcoFy',
      description: 'Event Booking Payment',
      handler: function (response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        const paymentData = {
          paymentId: response.razorpay_payment_id,
          username,
          email,
          phone,
          event: selectedEvent,
          amount,
        };
        savePaymentDetails(paymentData);
      },
      prefill: {
        name: username,
        email: email,
        contact: phone,
      },
      theme: {
        color: '#3399cc',
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div>
      <Navbar />
      <div className="payment-page">
        <h1>Advance Payment</h1>
        <p>Handle your payments securely with Razorpay.</p>
        <div className="payment-form">
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <label htmlFor="event">Select Event:</label>
          <select
            id="event"
            value={selectedEvent}
            onChange={handleEventChange}
          >
            <option value="">Select an Event</option>
            {Object.keys(eventAmounts).map((event) => (
              <option key={event} value={event}>
                {event}
              </option>
            ))}
          </select>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your name"
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone number"
          />
          <label htmlFor="amount">Amount (INR):</label>
          <input
            type="number"
            id="amount"
            value={amount}
            placeholder="Amount will be set based on event selection"
            readOnly
          />
          <button onClick={handlePayment}>Pay Now</button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
