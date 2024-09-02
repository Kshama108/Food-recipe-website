import React from 'react';
import { Box, Container, Grid, Typography, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import img1 from '../Assets/cake.jpeg';
import img2 from '../Assets/cookie.jpg';
import img3 from '../Assets/breadh.jpg';
import img4 from '../Assets/crossiant.jpg';
import img5 from '../Assets/buns2.jpeg';
import img6 from '../Assets/pas2.webp';
import img7 from '../Assets/bagel3.webp';
import img8 from '../Assets/tart.jpg';
import img9 from '../Assets/coo2.webp';
import img10 from '../Assets/sand.webp';
import img11 from '../Assets/cheese.webp';
import img12 from '../Assets/pizza.jpg';

// Reusable ImageCard Component with onClick handler
const ImageCard = ({ imgSrc, label, onClick }) => (
  <Grid item xs={12} sm={6} md={3}>
    <Box
      sx={{
        position: 'relative',
        height: 300,
        borderRadius: '8px',
        overflow: 'hidden',
        mt: 5,
      }}
    >
      <img
        src={imgSrc}
        alt={label}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <Button
        variant="contained"
        sx={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#E4A444',
          color: 'white',
          fontWeight: 'bold',
       
        }}
        onClick={onClick} // Add onClick handler
      >
        {label}
      </Button>
    </Box>
  </Grid>
);

// Reusable RoundImage Component
const RoundImage = ({ imgSrc, label }) => (
  <Box sx={{ textAlign: 'center', marginRight: 5 }}>
    <img src={imgSrc} height={120} width={120} style={{ borderRadius: '50%' }} alt={label} />
    <Typography variant="caption" sx={{fontWeight:'bold', fontSize:'15px'}}>{label}</Typography>
  </Box>
);

const Layout = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle button clicks for navigation
  const handleNavigate = (path) => {
    navigate(path);
  };

  // Array of image cards data
  const imageCards = [
    { imgSrc: img1, label: 'Cakes', onClick: () => handleNavigate('/Recipecake') },
    { imgSrc: img2, label: 'Cookies', onClick: () => handleNavigate('/Recipecookies') },
    { imgSrc: img3, label: 'Breads', onClick: () => handleNavigate('/Recipebread') },
    { imgSrc: img4, label: 'Snacks', onClick: () => handleNavigate('/RecipeOther') },
  ];

  // Array of round images data
  const roundImages = [
    { imgSrc: img5, label: 'Buns & Breads' },
    { imgSrc: img6, label: 'Pastries' },
    { imgSrc: img7, label: 'Bagel' },
    { imgSrc: img8, label: 'Tarts' },
    { imgSrc: img9, label: 'Cookies' },
    { imgSrc: img10, label: 'Snacks' },
    { imgSrc: img11, label: 'Cheesecake' },
    { imgSrc: img12, label: 'Pizza' },
  ];

  return (
    <Box>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          SIMPLE RECIPES MADE FOR <br />
          <Typography component="span" sx={{ color: 'rgb(114, 63, 95)' }}>
            real, actual, everyday life.
          </Typography>
        </Typography>
      </Container>

      {/* Main Content with Gray Background */}
      <Box sx={{ width: '100%', backgroundColor: 'rgb(238, 238, 238)', pt: 4, pb: 4 }}>
        <Container>
          <Grid container spacing={4}>
            {imageCards.map((card, index) => (
              <ImageCard key={index} imgSrc={card.imgSrc} label={card.label} onClick={card.onClick} />
            ))}

            <Grid item md={12}>
              <Box sx={{ ml: 7, mt: 7, display: 'flex', justifyContent: 'center' }}>
                {roundImages.map((image, index) => (
                  <RoundImage key={index} imgSrc={image.imgSrc} label={image.label} />
                ))}
              </Box>
            </Grid>

            <Grid item md={12}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 4 }}>
                <TextField
                  variant="outlined"
                  placeholder="Search Recipes"
                  sx={{
                    width: '50%',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgb(114, 63, 95)',
                      },
                      '&:hover fieldset': {
                        borderColor: '#E4A444',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#E4A444',
                      },
                    },
                  }}
                />
                <Typography sx={{ ml: 3, mr: 3, fontWeight: 550 }}>or</Typography>
                {/* "View All Recipes" Button with Navigation */}
                <Button
                  variant="contained"
                  sx={{ backgroundColor: '#6b2e4f' }}
                  onClick={() => handleNavigate('/recipeMenu')} // Navigate to recipeMenu
                >
                  View All Recipes
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;
