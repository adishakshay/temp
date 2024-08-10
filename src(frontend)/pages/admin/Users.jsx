import React, { useState, useEffect } from 'react';
import '../../asserts/Users.css';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [editedFirstName, setEditedFirstName] = useState('');
  const [editedLastName, setEditedLastName] = useState('');
  const [editedEmail, setEditedEmail] = useState('');
  const [editedPassword, setEditedPassword] = useState('');

  const [newFirstName, setNewFirstName] = useState('');
  const [newLastName, setNewLastName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showAddUserForm, setShowAddUserForm] = useState(false);

  const [searchField, setSearchField] = useState('name');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    // Fetch users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
    setFilteredUsers(storedUsers);
  }, []);

  useEffect(() => {
    // Filter users based on search query and field
    const filtered = users.filter(user => {
      const fieldValue = searchField === 'name'
        ? `${user.firstName} ${user.lastName}`
        : user[searchField];
      return fieldValue.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setFilteredUsers(filtered);
  }, [searchField, searchQuery, users]);

  const handleEdit = (user) => {
    setEditUser(user.email);
    setEditedFirstName(user.firstName);
    setEditedLastName(user.lastName);
    setEditedEmail(user.email);
    setEditedPassword(user.password);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedUsers = users.map(user => 
      user.email === editedEmail 
        ? { ...user, firstName: editedFirstName, lastName: editedLastName, password: editedPassword }
        : user
    );
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setEditUser(null);
  };

  const handleDelete = (email) => {
    const updatedUsers = users.filter(user => user.email !== email);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      firstName: newFirstName,
      lastName: newLastName,
      email: newEmail,
      password: newPassword
    };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setNewFirstName('');
    setNewLastName('');
    setNewEmail('');
    setNewPassword('');
    setShowAddUserForm(false);
  };

  const handleSearchFieldChange = (e) => {
    setSearchField(e.target.value);
  };

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="users-container">
      <h1 className="users-title">Manage Users</h1>
      <div className="search-bar">
        <select value={searchField} onChange={handleSearchFieldChange}>
          <option value="name">Name</option>
          <option value="email">Email</option>
        </select>
        <input
          type="text"
          placeholder={`Search by ${searchField}`}
          value={searchQuery}
          onChange={handleSearchQueryChange}
        />
      </div>
      <div className="add-user-button-container">
        <button className="users-button" onClick={() => setShowAddUserForm(!showAddUserForm)}>
          {showAddUserForm ? 'Cancel' : 'Add User'}
        </button>
      </div>
      {showAddUserForm && (
        <div className="add-user-form-container">
          <h2>Add User</h2>
          <form onSubmit={handleAddUser}>
            <label htmlFor="newFirstName">First Name</label>
            <input
              type="text"
              id="newFirstName"
              value={newFirstName}
              onChange={(e) => setNewFirstName(e.target.value)}
              required
            />

            <label htmlFor="newLastName">Last Name</label>
            <input
              type="text"
              id="newLastName"
              value={newLastName}
              onChange={(e) => setNewLastName(e.target.value)}
              required
            />

            <label htmlFor="newEmail">Email</label>
            <input
              type="email"
              id="newEmail"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              required
            />

            <label htmlFor="newPassword">Password</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />

            <button type="submit">Add User</button>
          </form>
        </div>
      )}
      {editUser && (
        <div className="edit-form-container">
          <h2>Edit User</h2>
          <form onSubmit={handleEditSubmit}>
            <label htmlFor="editedFirstName">First Name</label>
            <input
              type="text"
              id="editedFirstName"
              value={editedFirstName}
              onChange={(e) => setEditedFirstName(e.target.value)}
              required
            />

            <label htmlFor="editedLastName">Last Name</label>
            <input
              type="text"
              id="editedLastName"
              value={editedLastName}
              onChange={(e) => setEditedLastName(e.target.value)}
              required
            />

            <label htmlFor="editedEmail">Email</label>
            <input
              type="email"
              id="editedEmail"
              value={editedEmail}
              onChange={(e) => setEditedEmail(e.target.value)}
              readOnly
            />

            <label htmlFor="editedPassword">Password</label>
            <input
              type="password"
              id="editedPassword"
              value={editedPassword}
              onChange={(e) => setEditedPassword(e.target.value)}
              required
            />

            <button type="submit">Save Changes</button>
          </form>
        </div>
      )}
      <table className="users-table">
        <thead>
          <tr>
            <th className="users-table-header">First Name</th>
            <th className="users-table-header">Last Name</th>
            <th className="users-table-header">Email</th>
            <th className="users-table-header">Password</th>
            <th className="users-table-header">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.email}>
              <td className="users-table-cell">{user.firstName}</td>
              <td className="users-table-cell">{user.lastName}</td>
              <td className="users-table-cell">{user.email}</td>
              <td className="users-table-cell">{user.password}</td>
              <td className="users-table-cell">
                <button className="users-button" onClick={() => handleEdit(user)}>Edit</button>
                <button className="users-button" onClick={() => handleDelete(user.email)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
