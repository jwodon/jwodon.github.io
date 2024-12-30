import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message Sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: 'auto' }}>
        <div style={{ marginBottom: '10px' }}>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ width: '100%', padding: '10px', marginTop: '5px' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: '100%', padding: '10px', marginTop: '5px' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required style={{ width: '100%', padding: '10px', marginTop: '5px', height: '100px' }} />
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>Send</button>
      </form>
    </div>
  );
};

export default Contact;
