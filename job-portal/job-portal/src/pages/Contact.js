import React from 'react';
import { Typography, Container, TextField, Button } from '@mui/material';

const ContactUs = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" paragraph>
        If you have any questions or feedback, please get in touch with us.
      </Typography>
      <form noValidate autoComplete="off">
        <TextField label="Your Name" fullWidth margin="normal" />
        <TextField label="Your Email" type="email" fullWidth margin="normal" />
        <TextField label="Your Message" multiline rows={4} fullWidth margin="normal" />
        <Button variant="contained" color="primary" type="submit">
          Send Message
        </Button>
      </form>
    </Container>
  );
};

export default ContactUs;