import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    username: '',
    age: '',
    gender: '',
    constValue: '',
    address: '',
    contactNo: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setSubmitted(true);
  };

  return (
    <div style={styles.container}>
      <h2>User Information Form</h2>
      {submitted && <p style={styles.success}>Form submitted successfully!</p>}
      <form onSubmit={handleSubmit} style={styles.form}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <label>Gender:</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">-- Select Gender --</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label>Const (e.g. District/Code):</label>
        <input
          type="text"
          name="constValue"
          value={formData.constValue}
          onChange={handleChange}
          required
        />

        <label>Address:</label>
        <textarea
          name="address"
          rows="3"
          value={formData.address}
          onChange={handleChange}
          required
        ></textarea>

        <label>Contact Number:</label>
        <input
          type="tel"
          name="contactNo"
          value={formData.contactNo}
          onChange={handleChange}
          pattern="[0-9]{10}"
          placeholder="10-digit number"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

// Simple inline styles
const styles = {
  container: {
    maxWidth: '500px',
    margin: '2rem auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  success: {
    color: 'green'
  }
};

export default Contact;
