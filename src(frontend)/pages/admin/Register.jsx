import React, { useState, useEffect } from 'react';
import '../../asserts/Register.css';

const Register = () => {
  const [events, setEvents] = useState([]);
  const [searchField, setSearchField] = useState('name');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [editEvent, setEditEvent] = useState(null);
  const [newEvent, setNewEvent] = useState({
    name: '',
    phone: '',
    startDate: '',
    endDate: '',
    eventType: '',
    city: '',
    state: '',
    pincode: ''
  });
  const [minDate, setMinDate] = useState('');

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(storedEvents);
    setFilteredEvents(storedEvents);
  }, []);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setMinDate(today);
  }, []);

  useEffect(() => {
    const filtered = events.filter(event =>
      event[searchField]
        ? event[searchField].toLowerCase().includes(searchQuery.toLowerCase())
        : false
    );
    setFilteredEvents(filtered);
  }, [searchField, searchQuery, events]);

  const handleSearchFieldChange = (e) => {
    setSearchField(e.target.value);
  };

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDelete = (index) => {
    const updatedEvents = events.filter((_, i) => i !== index);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
    setEvents(updatedEvents);
  };

  const handleEdit = (index) => {
    setEditEvent({ ...events[index], index });
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    const updatedEvents = events.map((event, index) =>
      index === editEvent.index ? editEvent : event
    );
    localStorage.setItem('events', JSON.stringify(updatedEvents));
    setEvents(updatedEvents);
    setIsEditing(false);
    setEditEvent(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // setEditEvent((prev) => ({ ...prev, [name]: value }));
    // setNewEvent((prev) => ({ ...prev, [name]: value }));
    setNewEvent({
      ...newEvent,
      [name]: value
    });
    setEditEvent({
      ...editEvent,
      [name]: value
    });
  };

  const handleAddNewEvent = () => {
    const updatedEvents = [...events, newEvent];
    localStorage.setItem('events', JSON.stringify(updatedEvents));
    setEvents(updatedEvents);
    setIsAdding(false);
    setNewEvent({
      name: '',
      phone: '',
      startDate: '',
      endDate: '',
      eventType: '',
      city: '',
      state: '',
      pincode: ''
    });
  };

  return (
    <div className="register-container">
      <h1>Registered Events</h1>
      {isAdding ? (
        <div className="register-add-form">
          <h2>Add New Event</h2>
          <input
            type="text"
            name="name"
            value={newEvent.name}
            onChange={handleChange}
            placeholder="Name"
            equired
          />
          <input
            type="text"
            name="phone"
            value={newEvent.phone}
            onChange={handleChange}
            placeholder="Phone"
            equired
          />
          <input
            type="datetime-local"
            name="startDate"
            value={newEvent.startDate}
            onChange={handleChange}
            min={newEvent.startDate || minDate}
            equired
          />
          <input
            type="datetime-local"
            name="endDate"
            value={newEvent.endDate}
            onChange={handleChange}
            min={newEvent.startDate || minDate}
            equired
          />
          <select className="register-add-form-b"
            name="eventType"
            value={newEvent.eventType}
            onChange={handleChange}
            equired
          >
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
          <input
            type="text"
            id="add-city"
            name="city"
            value={newEvent.city}
            onChange={handleChange}
            placeholder="City"
            required
          />
          <select className="register-add-form-b"
            id="add-state"
            name="state"
            value={newEvent.state}
            onChange={handleChange}
            required
          >
            <option value="">Select State</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
            <option value="Delhi">Delhi</option>
          </select>
          <input
            type="text"
            id="add-pincode"
            name="pincode"
            value={newEvent.pincode}
            onChange={handleChange}
            placeholder="Pincode"
            required
          />
          <div class="add-register-button-container">
          <button class="register-add-btn" onClick={handleAddNewEvent}>Add Event</button>
          <button class="register-add-btn" onClick={() => setIsAdding(false)}>Cancel</button>
          </div>
        </div>
      ) : isEditing ? (
        <div className="register-edit-form">
          <h2>Edit Event</h2>

          <input
            type="text"
            name="name"
            value={editEvent.name}
            onChange={handleChange}
            placeholder="Name"
          />

          <input
            type="text"
            name="phone"
            value={editEvent.phone}
            onChange={handleChange}
            placeholder="Phone"
          />

          <input
            type="datetime-local"
            name="startDate"
            value={editEvent.startDate}
            onChange={handleChange}
            required min={new Date().toISOString().slice(0, -8)}
            // min={editEvent.startDate || minDate}
          />

          <input
            type="datetime-local"
            name="endDate"
            value={editEvent.endDate}
            onChange={handleChange}
            required min={new Date().toISOString().slice(0, -8)}
            // min={editEvent.startDate || minDate}
          />

          <select className="register-edit-form-b"
            name="eventType"
            value={editEvent.eventType}
            onChange={handleChange}
          >
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

          <input
            type="text"
            // id="edit-city"
            name="city"
            value={editEvent.city}
            onChange={handleChange}
            placeholder="City"
          />

          <select className="register-edit-form-b"
            // id="edit-state"
            name="state"
            value={editEvent.state}
            onChange={handleChange}
          >
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
            <option value="Delhi">Delhi</option>
          </select>
          <input
            type="text"
            id="edit-pincode"
            name="pincode"
            value={editEvent.pincode}
            onChange={handleChange}
            placeholder="Pincode"
            required
          />
             
          <button onClick={handleSaveEdit}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <>
          <div className="register-search-bar">
            <select value={searchField} onChange={handleSearchFieldChange}>
              <option value="name">Name</option>
              <option value="phone">Phone</option>
              <option value="startDate">Start Date</option>
              <option value="endDate">End Date</option>
              <option value="eventType">Event Type</option>
              <option value="city">City</option>
              <option value="state">State</option>
            </select>
            <input
              type="text"
              placeholder={`Search by ${searchField}`}
              value={searchQuery}
              onChange={handleSearchQueryChange}
            />
          </div>
          <button className="register-add-btn" onClick={() => setIsAdding(true)}>Add Event</button>
          {filteredEvents.length === 0 ? (
            <p>No events registered yet.</p>
          ) : (
            <table className="register-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Event Type</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Pincode</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredEvents.map((event, index) => (
                  <tr key={index}>
                    <td>{event.name}</td>
                    <td>{event.phone}</td>
                    <td>{event.startDate}</td>
                    <td>{event.endDate}</td>
                    <td>{event.eventType}</td>
                    <td>{event.city}</td>
                    <td>{event.state}</td>
                    <td>{event.pincode}</td>
                    <td>
                      <button onClick={() => handleEdit(index)}>Edit</button>
                      <button onClick={() => handleDelete(index)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      )}
    </div>
  );
};

export default Register;
