import React from 'react';
import { Box, Container, Grid, Typography, Button, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// Main Component
const AboutSection = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle navigation
  const handleLearnMoreClick = () => {
    navigate('/About'); // Navigate to About page
  };

  return (
    <Box sx={{ backgroundColor: '#f9f9f9', padding: '20px 0' }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          {/* Left Side Text Section */}
          <Grid item xs={12} md={4}>
            <Card elevation={0} sx={{ backgroundColor: '#f5f5f5', padding: '30px', height: '440px' }}>
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                  HI!
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontStyle: 'italic',
                    color: '#a9a9a9',
                    mb: 2,
                    fontFamily: 'cursive',
                  }}
                >
                  Nice to meet you!
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  I’m a former web developer, and a part-time blogger. We live in Mumbai. Favorite things include my camera, lake days, and dark chocolate.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: 'rgb(114, 63, 95)',
                    color: '#fff',
                    textTransform: 'none',
                    '&:hover': { backgroundColor: '#555' },
                  }}
                  onClick={handleLearnMoreClick} // Add onClick handler
                >
                  LEARN MORE
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Right Side Image Section */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Card elevation={0} sx={{ backgroundColor: '#f5f5f5', padding: '30px' }}>
                  <CardContent>
                    <img
                      src="https://reviewed-com-res.cloudinary.com/image/fetch/s--U6pNuKUc--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1576180656226/best-baking-tools-hero-2.png"
                      alt="Cooking Image"
                      style={{
                        width: '300px',
                        height: '400px',
                        borderRadius: '8px',
                        objectFit: 'cover',
                      }}
                    />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card elevation={0} sx={{ backgroundColor: '#f5f5f5', padding: '30px' }}>
                  <CardContent>
                    <img
                      src="https://www.shutterstock.com/image-photo/pastry-bag-white-cream-making-600nw-2094068662.jpg"
                      alt="Preparing Ingredients"
                      style={{
                        width: '300px',
                        height: '400px',
                        borderRadius: '8px',
                        objectFit: 'cover',
                      }}
                    />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
