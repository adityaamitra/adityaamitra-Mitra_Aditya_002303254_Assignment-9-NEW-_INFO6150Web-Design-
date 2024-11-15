import React from 'react';
import { Box, Typography, Container } from '@mui/material';

function About() {
  return (
    <Box
      sx={{
        
        backgroundImage: 'url(https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)', // You can change this to your own image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.7)', 
          padding: '20px',
          borderRadius: '8px',
          boxShadow: 3,
        }}
      >
        <Typography variant="h3" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra, ligula eget faucibus
          egestas, elit turpis vehicula orci, sit amet suscipit eros turpis id quam. Nulla facilisi.
          Aenean vitae augue non ante egestas suscipit. Phasellus dapibus est ut nisi facilisis,
          non egestas erat malesuada. Duis auctor dolor in arcu volutpat, a volutpat velit auctor.
        </Typography>
        <Typography variant="body1" paragraph>
          Fusce convallis, mi id iaculis pharetra, odio sapien ultricies purus, sed vulputate felis
          ipsum non dui. Curabitur sit amet volutpat nisi, eget rutrum lorem. Nullam id velit at quam
          pharetra ultricies. Curabitur vel ante ut velit ultricies egestas sit amet in eros. Sed
          scelerisque sollicitudin sem, non ullamcorper metus. Ut vestibulum sollicitudin leo a
          tristique.
        </Typography>
        <Typography variant="body1" paragraph>
          Integer at urna sit amet nunc dapibus cursus. Phasellus sollicitudin metus eu dolor
          ultrices scelerisque. Proin eget nisi vel dui gravida vestibulum a sit amet sapien. Nam
          maximus ante sit amet sem rhoncus, in tristique nunc porttitor. Suspendisse cursus metus
          nec lectus tincidunt scelerisque.
        </Typography>
      </Container>
    </Box>
  );
}

export default About;
