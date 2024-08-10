import React from 'react';
import '../asserts/Model.css';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Welcome to EcoFy!</h2>
        <p>Please sign up to continue.</p>
        <button onClick={onClose}>Close</button>
        <button onClick={() => window.location.href = '/signup'}>Sign Up</button>
      </div>
    </div>
  );
};

export default Modal;
