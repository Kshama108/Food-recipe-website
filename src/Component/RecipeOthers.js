import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, Container } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { Navigate, useNavigate } from 'react-router-dom';
import Footer from './Footer';

// Sample data for the top-rated recipes
const topRecipes = [
    {
        title: 'Classic Bagel',
        image: 'https://www.thedailymeal.com/img/gallery/15-ways-to-upgrade-a-classic-bagel-with-cream-cheese/l-intro-1677514685.jpg',
        reviews: 150,
        rating: 4.5,
        recipe: 'Classic Bagel ',
        ingredients: [
          '4 cups bread flour',
          '2 tsp salt',
          '1 tbsp sugar',
          '2 tsp instant yeast',
          '1 1/4 cups warm water',
          '1 tbsp honey',
          '1 egg (for egg wash)'
        ],
        directions: [
          'Mix flour, salt, sugar, and yeast in a bowl. Add warm water and mix until dough forms.',
          'Knead the dough for 10 minutes until smooth.',
          'Let it rise for 1 hour, then shape into bagels.',
          'Boil the bagels for 1 minute on each side, then brush with egg wash.',
          'Bake at 425°F (220°C) for 15-20 minutes or until golden brown.'
        ],
        nutritionalFacts: {
          calories: 290,
          fat: '1g',
          carbohydrates: '59g',
          protein: '10g'
        }
      },
      {
        title: 'French Pastries',
        image: 'https://insanelygoodrecipes.com/wp-content/uploads/2023/01/Sweet-Homemade-Mille-Fuilles-with-Vanilla-Pastry-and-Berries.jpg',
        reviews: 220,
        rating: 4.7,
        recipe: 'French Pastries ',
        ingredients: [
          '1 cup water',
          '1/2 cup butter',
          '1 cup flour',
          '4 eggs',
          '1/2 tsp salt',
          '1 tbsp sugar',
          'Powdered sugar (for dusting)'
        ],
        directions: [
          'Preheat oven to 400°F (200°C).',
          'Bring water and butter to a boil in a saucepan. Add flour and stir until the mixture forms a ball.',
          'Remove from heat and beat in eggs one at a time.',
          'Pipe or spoon dough onto a baking sheet and bake for 20-25 minutes.',
          'Let cool and dust with powdered sugar.'
        ],
        nutritionalFacts: {
          calories: 220,
          fat: '12g',
          carbohydrates: '23g',
          protein: '5g'
        }
      },
      {
        title: 'Fruit Tarts',
        image: 'https://richanddelish.com/wp-content/uploads/2023/05/mini-fruit-tarts-2.jpg',
        reviews: 180,
        rating: 4.6,
        recipe: 'Fruit Tart',
        ingredients: [
          '1 cup flour',
          '1/4 cup sugar',
          '1/2 cup butter',
          '1/4 cup cold water',
          '1/2 cup pastry cream',
          '1 cup assorted fresh fruits (berries, kiwi, etc.)'
        ],
        directions: [
          'Mix flour, sugar, and butter until crumbly. Add cold water and mix until dough forms.',
          'Roll out dough and press into tart pans. Bake at 350°F (175°C) for 15-20 minutes.',
          'Fill cooled crusts with pastry cream and top with fresh fruit.',
          'Chill for 1 hour before serving.'
        ],
        nutritionalFacts: {
          calories: 180,
          fat: '8g',
          carbohydrates: '25g',
          protein: '2g'
        }
      },
      {
        title: 'Veggie Sandwich',
        image: 'https://www.themediterraneandish.com/wp-content/uploads/2024/03/Vegetable-Sandwich-Cropped-1.jpg',
        reviews: 305,
        rating: 4.9,
        recipe: 'Healthy Veggie Sandwich',
        ingredients: [
          '2 slices whole grain bread',
          '1/2 avocado, mashed',
          '1/2 cucumber, sliced',
          '1/2 tomato, sliced',
          'Lettuce leaves',
          'Salt and pepper to taste',
          '1 tbsp hummus (optional)'
        ],
        directions: [
          'Toast the bread slices to your preference.',
          'Spread mashed avocado on one slice and hummus on the other.',
          'Layer with cucumber, tomato, and lettuce.',
          'Season with salt and pepper, then close the sandwich and serve.'
        ],
        nutritionalFacts: {
          calories: 320,
          fat: '15g',
          carbohydrates: '40g',
          protein: '8g'
        }
      },
      {
        title: 'Margherita Pizza',
        image: 'https://cdn.shopify.com/s/files/1/0274/9503/9079/files/20220211142754-margherita-9920_5a73220e-4a1a-4d33-b38f-26e98e3cd986.jpg?v=1723650067',
        reviews: 410,
        rating: 4.8,
        recipe: 'Margherita Pizza',
        ingredients: [
          '1 pizza dough (store-bought or homemade)',
          '1/2 cup tomato sauce',
          '1 cup mozzarella cheese, shredded',
          'Fresh basil leaves',
          '1 tbsp olive oil',
          'Salt and pepper to taste'
        ],
        directions: [
          'Preheat oven to 475°F (245°C).',
          'Roll out the pizza dough and spread tomato sauce evenly.',
          'Top with mozzarella cheese and bake for 10-12 minutes.',
          'Remove from oven, drizzle with olive oil, and garnish with fresh basil leaves.',
          'Slice and serve hot.'
        ],
        nutritionalFacts: {
          calories: 300,
          fat: '12g',
          carbohydrates: '35g',
          protein: '15g'
        }
      },
      {
        title: 'Cheesy Garlic Breadsticks',
        image: 'https://www.recipetineats.com/tachyon/2014/09/DSC_0297.jpg',
        reviews: 275,
        rating: 4.7,
        recipe: 'Cheesy Garlic Breadsticks',
        ingredients: [
          '1 pizza dough',
          '2 tbsp butter, melted',
          '1/2 cup mozzarella cheese, shredded',
          '2 cloves garlic, minced',
          '1 tbsp parsley, chopped',
          'Salt to taste'
        ],
        directions: [
          'Preheat oven to 400°F (200°C).',
          'Roll out pizza dough and brush with melted butter.',
          'Top with garlic, mozzarella, and parsley. Bake for 12-15 minutes or until golden.',
          'Slice into sticks and serve warm.'
        ],
        nutritionalFacts: {
          calories: 240,
          fat: '8g',
          carbohydrates: '30g',
          protein: '7g'
        }
      },
     
      {
        title: 'Chocolate Croissant ',
        image: 'https://airfryingfoodie.com/wp-content/uploads/2022/04/Air-Fryer-chocolate-Croissants-1.jpg',
        reviews: 420,
        rating: 4.8,
        recipe: 'Chocolate Croissant',
        ingredients: [
          '1 recipe croissant dough (see Classic Butter Croissant)',
          '1 cup dark chocolate bars, chopped',
          '1 egg (for egg wash)'
        ],
        directions: [
          'Prepare croissant dough as per the Classic Butter Croissant recipe.',
          'Cut the dough into rectangles, place chocolate in the center, and roll up.',
          'Place on a baking sheet, brush with egg wash, and bake at 375°F (190°C) for 15-20 minutes.',
          'Serve warm for a gooey chocolate center.'
        ],
        nutritionalFacts: {
          calories: 280,
          fat: '18g',
          carbohydrates: '32g',
          protein: '5g'
        }
      },
      {
        title: 'Almond Croissant',
        image: 'https://i0.wp.com/www.pardonyourfrench.com/wp-content/uploads/2023/04/French-Almond-Croissants-Bakery-Style-8.jpg?fit=1202%2C1800&ssl=1',
        reviews: 350,
        rating: 4.7,
        recipe: 'Almond Croissant',
        ingredients: [
          '1 recipe croissant dough (see Classic Butter Croissant)',
          '1/2 cup almond paste',
          '1/4 cup sliced almonds',
          '1 egg (for egg wash)',
          'Powdered sugar (for dusting)'
        ],
        directions: [
          'Prepare croissant dough as per the Classic Butter Croissant recipe.',
          'Roll out dough, fill with almond paste, and shape into croissants.',
          'Place on a baking sheet, brush with egg wash, and sprinkle with sliced almonds.',
          'Bake at 375°F (190°C) for 15-20 minutes, then dust with powdered sugar before serving.'
        ],
        nutritionalFacts: {
          calories: 300,
          fat: '20g',
          carbohydrates: '30g',
          protein: '6g'
        }
      },
];

const RecipeOther = () => {
  const [showAll, setShowAll] = useState(false);
  const navigate=useNavigate();
 

  // Decide which recipes to display based on the state
  const displayedRecipes = showAll ? topRecipes : topRecipes.slice(0, 3);

  const handleToggleOther = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  const handleRecipes = (recipe) => {
    localStorage.setItem('recipes', JSON.stringify(recipe)); // Store selected recipes in localStorage
    navigate('/recipes'); // Navigate to the recipes page
  };

  return (
    <>
    <Container maxWidth="lg" sx={{ textAlign: 'center', padding: '2px', overflow: 'hidden', mb:5 }}>
    <Box sx={{ width: '100%', textAlign: 'center', padding: '2px', overflow: 'hidden' }}>
     

      {/* Top Rated Recipes Section */}
      <Box sx={{ marginTop: 3, paddingLeft: 2, paddingRight: 2 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 5, fontWeight: 'bold' }}>
          Snacks
        </Typography>
        <Grid container spacing={3}>
          {displayedRecipes.map((recipe, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card onClick={()=>handleRecipes(recipe)}>
                <CardMedia
                  component="img"
                  height="200"
                  image={recipe.image}
                  alt={recipe.title}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {recipe.title}
                  </Typography>
                  {/* <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
                    <StarIcon fontSize="small" sx={{ color: '#ffb400' }} />
                    <Typography variant="body2" sx={{ ml: 0.25, fontWeight: 'bold' }}>
                      {recipe.reviews} REVIEWS / {recipe.rating} AVERAGE
                    </Typography>
                  </Box> */}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Button
          onClick={handleToggleOther}
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: '#6b2e4f',
            color: '#fff',
            padding: '0.5rem 2rem',
            fontWeight: 'bold',
            '&:hover': { backgroundColor: '#5b2440' }
          }}
        >
          {showAll ? '- SHOW LESS' : '+ VIEW ALL RECIPES'}
        </Button>
      </Box>
     
    </Box>

    </Container>
    
    </>
 
  );
};

export default RecipeOther;
