import React from 'react';
import { Box, Grid, Typography, TextField, Button, Container } from '@mui/material';

// Main Component
const CookbookPromo = () => {
  return (
    <Box sx={{ backgroundColor: '#333', padding: '40px 0', color: '#fff' }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          {/* Left Side: Image Section */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://www.shutterstock.com/image-photo/delicious-loaves-bread-german-baker-600nw-1544878508.jpg"
              alt="Top 25 Recipes Cookbook"
              sx={{ width: '100%', borderRadius: '8px' }}
            />
          </Grid>

          {/* Right Side: Text and Form Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
              Get it Now
            </Typography>
            <Typography variant="h5" sx={{ mb: 2, fontFamily: 'cursive', color: '#E4A444' }}>
              Cookies,Cake & Crunch Cookbook
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              The eBook includes our most popular 25 recipes in a beautiful, easy to download format. Enter your email and we'll send it right over!
            </Typography>

            {/* Subscription Form */}
            <Grid container spacing={2}>
              <Grid item xs={12} md={5}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="First Name"
                  InputProps={{
                    sx: { backgroundColor: '#fff', borderRadius: '5px' },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={5}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Email"
                  InputProps={{
                    sx: { backgroundColor: '#fff', borderRadius: '5px' },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: '#E4A444',
                    color: '#fff',
                    height: '100%',
                    borderRadius: '5px',
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: '#c69061',
                    },
                  }}
                >
                  GO
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CookbookPromo;
