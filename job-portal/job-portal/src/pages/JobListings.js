import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

const jobData = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Company A',
    location: 'New York, NY',
    description: 'A great opportunity for a Frontend Developer to join a growing tech company.',
    applyLink: '#',
  },
  {
    id: 2,
    title: 'Backend Developer',
    company: 'Company B',
    location: 'San Francisco, CA',
    description: 'Join the team of Backend Engineers working on innovative projects.',
    applyLink: '#',
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    company: 'Company C',
    location: 'Remote',
    description: 'Exciting Full Stack Developer role with remote work flexibility.',
    applyLink: '#',
  },
  
];

function JobListings() {
  return (
    <Box sx={{ padding: '20px', display: 'flex', flexWrap: 'wrap', gap: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ width: '100%' }}>
        Job Listings
      </Typography>
      {jobData.map((job) => (
        <Box
          key={job.id}
          sx={{
            width: { xs: '100%', sm: '48%', md: '30%' }, 
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Card sx={{ maxWidth: 345, width: '100%' }}>
            <CardContent>
              <Typography variant="h6">{job.title}</Typography>
              <Typography variant="body2" color="textSecondary">
                {job.company}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {job.location}
              </Typography>
              <Typography variant="body1" sx={{ marginTop: '10px' }}>
                {job.description}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                href={job.applyLink}
                sx={{ marginTop: '15px' }}
              >
                Apply Now
              </Button>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
  );
}

export default JobListings;
