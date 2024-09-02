import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, Container } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { Navigate, useNavigate } from 'react-router-dom';
import Footer from './Footer';

// Sample data for the top-rated recipes
const topRecipes = [
  {
    title: 'Gingerbread',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2019/06/Old-Fashion-Gingerbread_EXPS_TOHCA19_54463_B03_19_7b_rms-3.jpg?fit=700,700',
    reviews: 340,
    rating: 4.8,
    recipe: 'Traditional Gingerbread Recipe',
    ingredients: [
      '2 1/2 cups flour',
      '1/2 cup sugar',
      '1/2 cup butter',
      '1 cup molasses',
      '1 cup boiling water',
      '1 1/2 tsp baking soda',
      '1 tsp cinnamon',
      '1 tsp ginger',
      '1/2 tsp salt'
    ],
    directions: [
      'Preheat the oven to 350°F (175°C).',
      'In a bowl, mix the flour, sugar, butter, and molasses.',
      'Stir in boiling water, then add baking soda, cinnamon, ginger, and salt.',
      'Pour the batter into a greased pan and bake for 35-40 minutes or until a toothpick comes out clean.'
    ],
    nutritionalFacts: {
      calories: 250,
      fat: '10g',
      carbohydrates: '35g',
      protein: '3g'
    }
  },
  {
    title: 'Banana Bread',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Banana-Zucchini-Bread_EXPS_FT20_4512_F_0811_1.jpg?fit=700,700',
    reviews: 362,
    rating: 4.8,
    recipe: 'Moist Banana Bread',
    ingredients: [
      '2 cups flour',
      '1 tsp baking soda',
      '1/4 tsp salt',
      '1/2 cup butter',
      '3/4 cup brown sugar',
      '2 eggs, beaten',
      '2 1/3 cups mashed overripe bananas'
    ],
    directions: [
      'Preheat oven to 350°F (175°C).',
      'In a large bowl, mix the flour, baking soda, and salt.',
      'In another bowl, cream together butter and brown sugar. Stir in eggs and mashed bananas.',
      'Pour banana mixture into flour mixture; stir just to moisten.',
      'Pour batter into a prepared loaf pan. Bake for 60-65 minutes or until a toothpick comes out clean.'
    ],
    nutritionalFacts: {
      calories: 196,
      fat: '8g',
      carbohydrates: '30g',
      protein: '3g'
    }
  },
  {
    title: 'Miracle Coffee Bread',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2024/08/Blueberries-and-Cream-Coffee-Cake_EXPS_TOHD24_148116_MollyBolton_14.jpg?fit=700,700',
    reviews: 561,
    rating: 4.8,
    recipe: 'Miracle Coffee Bread Recipe',
    ingredients: [
      '2 cups flour',
      '1 cup sugar',
      '1 cup brewed coffee',
      '1/2 cup butter',
      '2 eggs',
      '1 tsp vanilla extract',
      '1 tsp baking powder',
      '1/2 tsp baking soda',
      '1/4 tsp salt'
    ],
    directions: [
      'Preheat the oven to 350°F (175°C).',
      'Mix flour, sugar, baking powder, baking soda, and salt in a bowl.',
      'In a separate bowl, mix coffee, butter, eggs, and vanilla extract.',
      'Combine the wet and dry ingredients, pour into a loaf pan.',
      'Bake for 50-55 minutes or until a toothpick comes out clean.'
    ],
    nutritionalFacts: {
      calories: 220,
      fat: '9g',
      carbohydrates: '33g',
      protein: '4g'
    }
  },
  {
    title: 'Wheat Bread',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Wholesome-Wheat-Bread_EXPS_CWFM18_2093_C10_12_6b-3.jpg?fit=700,700',
    reviews: 561,
    rating: 4.8,
    recipe: 'Classic Wheat Bread',
    ingredients: [
      '3 cups whole wheat flour',
      '1/4 cup honey',
      '2 tbsp butter',
      '1 1/4 cups warm water',
      '2 tsp yeast',
      '1 tsp salt'
    ],
    directions: [
      'Dissolve yeast in warm water with honey.',
      'Add flour, butter, and salt; knead until smooth.',
      'Let rise until doubled in size, about 1 hour.',
      'Punch down dough and shape into a loaf. Place in a greased loaf pan.',
      'Let rise again, then bake at 375°F (190°C) for 30 minutes or until golden brown.'
    ],
    nutritionalFacts: {
      calories: 150,
      fat: '3g',
      carbohydrates: '27g',
      protein: '5g'
    }
  },
  {
    title: 'Chocolate Babka',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2019/10/Chocolate-Babka_EXPS_TOHDJ20_242524_B07_30_1b-8.jpg?fit=700,700',
    reviews: 561,
    rating: 4.8,
    recipe: 'Decadent Chocolate Babka',
    ingredients: [
      '2 1/2 cups flour',
      '1/2 cup sugar',
      '1/2 cup milk',
      '1/4 cup butter',
      '2 eggs',
      '1 tbsp yeast',
      '1/2 cup chocolate chips',
      '1/4 cup cocoa powder'
    ],
    directions: [
      'Mix flour, sugar, and yeast. Add milk, butter, and eggs to form a dough.',
      'Let rise until doubled, about 1 hour.',
      'Roll out dough, sprinkle with chocolate chips and cocoa powder.',
      'Roll up and twist, then place in a loaf pan. Let rise again.',
      'Bake at 350°F (175°C) for 45 minutes or until done.'
    ],
    nutritionalFacts: {
      calories: 290,
      fat: '12g',
      carbohydrates: '40g',
      protein: '6g'
    }
  },
  {
    title: 'Apple Raisin Bread',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps13_FB143426A05_01_1b-4.jpg?fit=700,700',
    reviews: 561,
    rating: 4.8,
    recipe: 'Apple Raisin Bread Recipe',
    ingredients: [
      '2 cups flour',
      '1/2 cup sugar',
      '1 tsp baking powder',
      '1/2 tsp baking soda',
      '1/4 tsp salt',
      '1 cup grated apple',
      '1/2 cup raisins',
      '1/2 cup milk',
      '1/4 cup melted butter',
      '1 egg'
    ],
    directions: [
      'Preheat oven to 350°F (175°C).',
      'Mix flour, sugar, baking powder, baking soda, and salt in a bowl.',
      'Stir in apple, raisins, milk, butter, and egg until well blended.',
      'Pour batter into a greased loaf pan and bake for 45-50 minutes or until a toothpick comes out clean.'
    ],
    nutritionalFacts: {
      calories: 220,
      fat: '7g',
      carbohydrates: '35g',
      protein: '3g'
    }
  },
  {
    title: 'Russell Bread',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2017/09/exps333_BHR133210D05_17_7b_WEB.jpg?fit=700,700',
    reviews: 561,
    rating: 4.8,
    recipe: 'Russell Bread Recipe',
    ingredients: [
      '3 cups flour',
      '1 tsp yeast',
      '1 cup warm water',
      '1/2 cup sugar',
      '1/4 cup oil',
      '1 tsp salt'
    ],
    directions: [
      'Dissolve yeast in warm water with sugar.',
      'Mix flour and salt, then add the yeast mixture and oil.',
      'Knead until smooth, then let rise until doubled.',
      'Shape into a loaf, let rise again, and bake at 375°F (190°C) for 30-35 minutes.'
    ],
    nutritionalFacts: {
      calories: 180,
      fat: '5g',
      carbohydrates: '30g',
      protein: '4g'
    }
  },
  {
    title: 'Oatmeal Pan Bread',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps1281_FM153592C03_20_3b-5.jpg?fit=700,700',
    reviews: 561,
    rating: 4.8,
    recipe: 'Soft Oatmeal Pan Bread',
    ingredients: [
      '1 cup rolled oats',
      '2 cups boiling water',
      '1/4 cup honey',
      '1/4 cup butter',
      '1 tsp salt',
      '1 package active dry yeast',
      '1/2 cup warm water',
      '5 cups flour'
    ],
    directions: [
      'Pour boiling water over oats and let stand for 10 minutes.',
      'Add honey, butter, and salt to the oat mixture and let it cool.',
      'Dissolve yeast in warm water and add to the cooled oat mixture.',
      'Add flour gradually and knead the dough until smooth.',
      'Let the dough rise until doubled, about 1 hour.',
      'Punch down the dough, shape it into a loaf, and place in a greased pan.',
      'Let rise again, then bake at 375°F (190°C) for 30-35 minutes.'
    ],
    nutritionalFacts: {
      calories: 210,
      fat: '5g',
      carbohydrates: '36g',
      protein: '6g'
    }
  },
  {
    title: 'Sunflower Seeds Bread',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps189081_HCK163687D07_16_3b.jpg?fit=700,700',
    reviews: 561,
    rating: 4.8,
    recipe: 'Crunchy Sunflower Seeds Bread',
    ingredients: [
      '3 cups whole wheat flour',
      '1/2 cup sunflower seeds',
      '1/4 cup honey',
      '1 1/2 cups warm water',
      '2 tbsp olive oil',
      '1 tbsp yeast',
      '1 tsp salt'
    ],
    directions: [
      'Mix flour, sunflower seeds, and salt in a bowl.',
      'Dissolve yeast in warm water with honey and let it sit until foamy.',
      'Add yeast mixture and olive oil to the flour mixture.',
      'Knead the dough until smooth, then let it rise until doubled.',
      'Shape into a loaf, place in a greased pan, and let rise again.',
      'Bake at 375°F (190°C) for 35-40 minutes or until golden brown.'
    ],
    nutritionalFacts: {
      calories: 240,
      fat: '8g',
      carbohydrates: '34g',
      protein: '8g'
    }
  },
  {
    title: 'Fruits Bread',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Grandma-s-Molasses-Fruitcake_EXPS_THCA17_38827_D07_14_3b.jpg?fit=700,700',
    reviews: 561,
    rating: 4.8,
    recipe: 'Classic Fruits Bread',
    ingredients: [
      '3 cups flour',
      '1 cup mixed dried fruits (raisins, cranberries, apricots)',
      '1/2 cup sugar',
      '1/2 cup milk',
      '1/4 cup butter',
      '2 eggs',
      '1 tsp baking powder',
      '1/2 tsp baking soda',
      '1/2 tsp cinnamon'
    ],
    directions: [
      'Preheat oven to 350°F (175°C).',
      'Mix flour, sugar, baking powder, baking soda, and cinnamon.',
      'In a separate bowl, beat butter, eggs, and milk.',
      'Stir the wet ingredients into the dry mixture, then fold in dried fruits.',
      'Pour batter into a greased loaf pan and bake for 50-55 minutes or until a toothpick comes out clean.'
    ],
    nutritionalFacts: {
      calories: 230,
      fat: '7g',
      carbohydrates: '38g',
      protein: '4g'
    }
  }
];

const RecipeBread = () => {
  const [showAll, setShowAll] = useState(false);
  const navigate=useNavigate();
 

  // Decide which recipes to display based on the state
  const displayedRecipes = showAll ? topRecipes : topRecipes.slice(0, 3);

  const handleToggleBread = () => {
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
          Breads
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
          onClick={handleToggleBread}
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

export default RecipeBread;
