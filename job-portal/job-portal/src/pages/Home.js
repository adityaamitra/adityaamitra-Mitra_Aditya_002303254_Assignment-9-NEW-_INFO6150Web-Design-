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
          This is the main area where you can explore various features of the application. 
          Use the navigation menu to go to other pages.
        </Typography>

        <Box sx={{ marginTop: 3 }}>
         
          <Outlet />
        </Box>
      </Box>
    </Container>
  );
}

export default Home;
