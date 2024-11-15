import React from 'react';
import { Outlet } from 'react-router-dom';
import { Typography, Box, Container } from '@mui/material';

function Home() {
  return (
    <Container component="main" maxWidth="lg" sx={{ marginTop: 4 }}>
      <Box sx={{ padding: 4, backgroundColor: 'white', borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Welcome to the Home Page!
        </Typography>
        <Typography 
          variant="body1" 
          align="center" 
          sx={{ marginTop: 2, lineHeight: 1.5 }}
        >
          TLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Typography>

        <Box sx={{ marginTop: 3 }}>
         
          <Outlet />
        </Box>
      </Box>
    </Container>
  );
}

export default Home;
