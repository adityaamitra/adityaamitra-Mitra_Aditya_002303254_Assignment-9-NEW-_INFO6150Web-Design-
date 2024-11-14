import React, { useState } from 'react';
import api from '../utils/api';
import { Button, Typography, Container } from '@mui/material';

const Profile = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', file);
    
    try {
      const response = await api.post('/user/uploadImage', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Upload failed');
    }
  };

  return (
    <Container>
      <Typography variant="h4">Profile</Typography>
      <input type="file" onChange={handleFileChange} />
      <Button onClick={handleUpload} variant="contained">Upload Image</Button>
      <Typography>{message}</Typography>
    </Container>
  );
};

export default Profile;
