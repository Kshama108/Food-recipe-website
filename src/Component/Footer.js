import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Instagram, Pinterest, TikTok, Facebook, Twitter } from '@mui/icons-material';

// Footer Component
const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', padding: '20px 0', color: '#333'}}>
      <Container>
        <Grid container spacing={3}>
          {/* Pinch of Yum Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
              Pinch of Yum
            </Typography>
            <Box>
              {['About',  'Recipe Index', 'Contact'].map((item, index) => (
                <Link
                  key={index}
                  href="#"
                  sx={{
                    display: 'block',
                    marginBottom: '6px',
                    textDecoration: 'none',
                    color: '#333',
                    '&:hover': { color: '#d4a373' },
                  }}
                  aria-label={item}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Food & Recipes Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
              Food & Recipes
            </Typography>
            <Box>
              {['Cookies', 'Cake', 'Pasteries', 'Crossiant'].map((item, index) => (
                <Link
                  key={index}
                  href="#"
                  sx={{
                    display: 'block',
                    marginBottom: '6px',
                    textDecoration: 'none',
                    color: '#333',
                    '&:hover': { color: '#d4a373' },
                  }}
                  aria-label={item}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Social Media & Branding */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: '8px' }}>
              {[
                { icon: <Instagram />, href: '#', label: 'Instagram' },
                { icon: <Pinterest />, href: '#', label: 'Pinterest' },
               
                { icon: <Facebook />, href: '#', label: 'Facebook' },
                { icon: <Twitter />, href: '#', label: 'Twitter' },
              ].map((social, index) => (
                <IconButton
                  key={index}
                  href={social.href}
                  sx={{ color: '#333', '&:hover': { color: '#d4a373' } }}
                  aria-label={social.label}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Box sx={{ textAlign: 'center', marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
          <Typography variant="body2" sx={{ color: '#777' }}>
            © 2024 Cookies,Cake &Crunch. All Rights Reserved.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '8px' }}>
            <Link href="#" sx={{ color: '#777', textDecoration: 'none', '&:hover': { color: '#333' } }}>
              Privacy Policy
            </Link>
            <Link href="#" sx={{ color: '#777', textDecoration: 'none', '&:hover': { color: '#333' } }}>
              Terms
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
