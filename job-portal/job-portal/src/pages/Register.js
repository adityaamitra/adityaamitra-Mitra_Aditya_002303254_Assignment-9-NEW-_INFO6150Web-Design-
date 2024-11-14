import React, { useState } from 'react';
import api from '../utils/api';
import { TextField, Button, Typography } from '@mui/material';

const Register = () => {
  const [form, setForm] = useState({ fullName: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/user/create', form);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div>
      <Typography variant="h4">Register</Typography>
      <form onSubmit={handleSubmit}>
        <TextField name="fullName" label="Full Name" onChange={handleChange} />
        <TextField name="email" label="Email" type="email" onChange={handleChange} />
        <TextField name="password" label="Password" type="password" onChange={handleChange} />
        <Button type="submit" variant="contained">Register</Button>
      </form>
      <Typography>{message}</Typography>
    </div>
  );
};

export default Register;
