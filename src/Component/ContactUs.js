import React from 'react';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';

const ContactUs = () => {
  return (
    <Box
      sx={{
        padding: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {/* Contact Us Header */}
      <Typography variant="h4" sx={{ mb: 8, fontWeight: 'bold' }}>
        Visit us or <span style={{ color: '#000', fontWeight: 'bold' }}>call us today</span>
      </Typography>

      <Grid container spacing={4} alignItems="center" sx={{ maxWidth: '800px' }}>
        {/* Contact Form and Info Section */}
        <Grid item xs={12} md={6}>
          {/* Opening Hours */}
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
            Plz ask for your favorite recipes!
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: 'blue' }}>
            <a href="mailto:contacts@esbnyc.com" style={{ textDecoration: 'none', color: 'blue' }}>
              cookiescake&crunch@gmail.com
            </a>
          </Typography>

          {/* Contact Form */}
          <form>
            <TextField label="Name" variant="outlined" fullWidth sx={{ mb: 2 }} />
            <TextField label="Email" variant="outlined" fullWidth sx={{ mb: 2 }} />
            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              sx={{ mb: 2 }}
            />
            {/* Centered Submit Button */}
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                type="submit"
                variant="contained"
                sx={{ backgroundColor: '#6b2e4f', color: '#fff' }}
              >
                Submit
              </Button>
            </Box>
          </form>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <img
            src="https://img.freepik.com/premium-photo/vertical-flat-view-with-copy-space-assortment-freshly-baked-bread-bakery-black-background-with-scattered-flour_425936-2976.jpg"
            alt="Contact Us"
            style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', height: '400px' }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;
