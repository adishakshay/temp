import React, { useState, useEffect } from 'react';
import '../../asserts/AdminPayment.css';

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

const AdminPayment = () => {
  const [payments, setPayments] = useState([]);
  const [editPaymentId, setEditPaymentId] = useState(null);
  const [editedUsername, setEditedUsername] = useState('');
  const [editedEmail, setEditedEmail] = useState('');
  const [editedPhone, setEditedPhone] = useState('');
  const [editedEvent, setEditedEvent] = useState('');
  const [editedAmount, setEditedAmount] = useState('');
  const [editedPaymentId, setEditedPaymentId] = useState('');

  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newEvent, setNewEvent] = useState('');
  const [newPaymentId, setNewPaymentId] = useState('');
  const [showAddPaymentForm, setShowAddPaymentForm] = useState(false);

  const [searchField, setSearchField] = useState('username');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPayments, setFilteredPayments] = useState([]);

  useEffect(() => {
    const storedPayments = JSON.parse(localStorage.getItem('payments')) || [];
    setPayments(storedPayments);
    setFilteredPayments(storedPayments);
  }, []);

  useEffect(() => {
    const filtered = payments.filter(payment => {
      const fieldValue = payment[searchField] ? payment[searchField].toLowerCase() : '';
      return fieldValue.includes(searchQuery.toLowerCase());
    });
    setFilteredPayments(filtered);
  }, [searchField, searchQuery, payments]);

  const handleEdit = (payment) => {
    setEditPaymentId(payment.paymentId);
    setEditedUsername(payment.username);
    setEditedEmail(payment.email);
    setEditedPhone(payment.phone);
    setEditedEvent(payment.event);
    setEditedAmount(payment.amount);
    setEditedPaymentId(payment.paymentId);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedPayments = payments.map(payment =>
      payment.paymentId === editPaymentId
        ? { ...payment, username: editedUsername, email: editedEmail, phone: editedPhone, event: editedEvent, amount: eventAmounts[editedEvent], paymentId: editedPaymentId }
        : payment
    );
    setPayments(updatedPayments);
    localStorage.setItem('payments', JSON.stringify(updatedPayments));
    setEditPaymentId(null);
  };

  const handleDelete = (paymentId) => {
    const updatedPayments = payments.filter(payment => payment.paymentId !== paymentId);
    setPayments(updatedPayments);
    localStorage.setItem('payments', JSON.stringify(updatedPayments));
  };

  const handleAddPayment = (e) => {
    e.preventDefault();
    const newPayment = {
      username: newUsername,
      email: newEmail,
      phone: newPhone,
      event: newEvent,
      amount: eventAmounts[newEvent],
      paymentId: newPaymentId,
    };
    const updatedPayments = [...payments, newPayment];
    setPayments(updatedPayments);
    localStorage.setItem('payments', JSON.stringify(updatedPayments));
    setNewUsername('');
    setNewEmail('');
    setNewPhone('');
    setNewEvent('');
    setNewPaymentId('');
    setShowAddPaymentForm(false);
  };

  return (
    <div className="admin-payment-page">
      <h1 className="admin-payment-title">Manage Payments</h1>
      <div className="search-bar">
        <select value={searchField} onChange={(e) => setSearchField(e.target.value)}>
          <option value="username">Username</option>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
          <option value="paymentId">Payment ID</option> {/* Add search by Payment ID */}
        </select>
        <input
          type="text"
          placeholder={`Search by ${searchField}`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="add-admin-payment-button-container">
        <button className="admin-button" onClick={() => setShowAddPaymentForm(!showAddPaymentForm)}>
          {showAddPaymentForm ? 'Cancel' : 'Add Payment'}
        </button>
      </div>
      {showAddPaymentForm && (
        <form className="admin-payment-form" onSubmit={handleAddPayment}>
          <h2>Add New Payment</h2>
          <input
            type="text"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            placeholder="Username"
          />
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="tel"
            value={newPhone}
            onChange={(e) => setNewPhone(e.target.value)}
            placeholder="Phone Number"
          />
          <select value={newEvent} onChange={(e) => setNewEvent(e.target.value)}>
            <option value="">Select Event</option>
            {Object.keys(eventAmounts).map(event => (
              <option key={event} value={event}>{event}</option>
            ))}
          </select>
          <input
            type="text"
            value={newPaymentId}
            onChange={(e) => setNewPaymentId(e.target.value)}
            placeholder="Payment ID"
          />
          <button type="submit">Add Payment</button>
        </form>
      )}
      <table className="admin-payment-table">
        <thead>
          <tr>
            <th>Payment ID</th> {/* Display Payment ID */}
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Event</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredPayments.map(payment => (
            <tr key={payment.paymentId}>
              <td>{payment.paymentId}</td> {/* Display Payment ID */}
              <td>{payment.username}</td>
              <td>{payment.email}</td>
              <td>{payment.phone}</td>
              <td>{payment.event}</td>
              <td>{payment.amount}</td>
              <td>
                <button className="admin-button" onClick={() => handleEdit(payment)}>Edit</button>
                <button className="admin-button" onClick={() => handleDelete(payment.paymentId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editPaymentId && (
        <form className="admin-payment-form" onSubmit={handleEditSubmit}>
          <h2>Edit Payment</h2>
          <input
            type="text"
            value={editedUsername}
            onChange={(e) => setEditedUsername(e.target.value)}
            placeholder="Username"
          />
          <input
            type="email"
            value={editedEmail}
            onChange={(e) => setEditedEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="tel"
            value={editedPhone}
            onChange={(e) => setEditedPhone(e.target.value)}
            placeholder="Phone Number"
          />
          <select value={editedEvent} onChange={(e) => setEditedEvent(e.target.value)}>
            <option value="">Select Event</option>
            {Object.keys(eventAmounts).map(event => (
              <option key={event} value={event}>{event}</option>
            ))}
          </select>
          <input
            type="text"
            value={editedPaymentId}
            onChange={(e) => setEditedPaymentId(e.target.value)}
            placeholder="Payment ID"
            readOnly
          />
          <button type="submit">Update Payment</button>
        </form>
      )}
    </div>
  );
};

export default AdminPayment;
