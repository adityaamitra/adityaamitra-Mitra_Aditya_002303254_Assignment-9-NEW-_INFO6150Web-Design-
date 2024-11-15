import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Card, CardContent, CardMedia, Grid, Typography, CircularProgress } from '@mui/material';

const CompanyShowcase = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch images from the backend API
    Axios.get('http://localhost:3000/user/getCompanyImages?companyName=TechCorp')
      .then((response) => {
        // Set the file paths to the state
        setImages(response.data.filePaths); 
        setLoading(false);
      })
      .catch((err) => {
        setError('Error fetching images');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography variant="h6" color="error">{error}</Typography>;
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom align="center">
        TechCorp - Showcase
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {images.length > 0 ? (
          images.map((image, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={`http://localhost:3000${image}`} // Prepending base URL to the image path
                  alt={`Company Image ${index + 1}`}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Image {index + 1}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="h6" align="center">
            No images available for this company.
          </Typography>
        )}
      </Grid>
    </div>
  );
};

export default CompanyShowcase;
