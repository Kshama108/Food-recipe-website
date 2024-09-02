import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, Container } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

// Sample data for the top-rated recipes
const topRecipes = [
  {
    title: 'Yummy Blueberry Cake',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Classic-Blueberry-Buckle_EXPS_FT24_28582_EC_062124_8.jpg?fit=700,700',
    reviews: 111,
    rating: 4.9,
    recipe: 'Moist Blueberry Cake',
    ingredients: [
      '2 cups all-purpose flour',
      '1 cup sugar',
      '1/2 cup butter, softened',
      '1 cup milk',
      '1 egg',
      '2 tsp baking powder',
      '1/2 tsp salt',
      '1 1/2 cups fresh blueberries'
    ],
    directions: [
      'Preheat oven to 350°F (175°C). Grease a 9x13 inch pan.',
      'Mix flour, sugar, baking powder, and salt in a bowl.',
      'Add butter, milk, and egg; beat until smooth.',
      'Gently fold in blueberries.',
      'Pour batter into the prepared pan and bake for 45-50 minutes or until a toothpick inserted in the center comes out clean.'
    ],
    nutritionalFacts: {
      calories: 260,
      fat: '9g',
      carbohydrates: '41g',
      protein: '4g'
    }
  },
  {
    title: 'Carrot Cake',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2017/09/Carrot-Cake_EXPS_FBMZ16_115_B05_18_3b.jpg?fit=700,700',
    reviews: 340,
    rating: 4.8,
    recipe: 'Classic Carrot Cake',
    ingredients: [
      '2 cups grated carrots',
      '1 1/2 cups sugar',
      '1 cup vegetable oil',
      '3 eggs',
      '2 cups flour',
      '2 tsp baking powder',
      '1 tsp baking soda',
      '1 tsp cinnamon',
      '1/2 tsp salt',
      '1/2 cup chopped walnuts (optional)'
    ],
    directions: [
      'Preheat oven to 350°F (175°C). Grease and flour a 9x13 inch pan.',
      'Mix sugar, oil, and eggs in a large bowl. Stir in grated carrots.',
      'In a separate bowl, combine flour, baking powder, baking soda, cinnamon, and salt.',
      'Gradually add the dry ingredients to the wet mixture; stir until well blended.',
      'Fold in walnuts if using. Pour batter into the prepared pan.',
      'Bake for 35-40 minutes or until a toothpick inserted into the center comes out clean.'
    ],
    nutritionalFacts: {
      calories: 340,
      fat: '18g',
      carbohydrates: '44g',
      protein: '4g'
    }
  },
  {
    title: 'Red Velvet Whoopie Pies',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Chocolate-Chip-Red-Velvet-Whoopie-Pies_EXPS_HCA23_186141_P1_P2_MD_12_02_4b.jpg?fit=700,700',
    reviews: 340,
    rating: 4.8,
    recipe: 'Soft Red Velvet Whoopie Pies',
    ingredients: [
      '2 cups flour',
      '2 tbsp cocoa powder',
      '1 tsp baking soda',
      '1/2 cup butter, softened',
      '1 cup sugar',
      '1 egg',
      '1 tsp vanilla extract',
      '1 cup buttermilk',
      'Red food coloring'
    ],
    directions: [
      'Preheat oven to 350°F (175°C). Line baking sheets with parchment paper.',
      'Mix flour, cocoa powder, and baking soda in a bowl.',
      'Cream together butter and sugar until light and fluffy. Beat in egg, vanilla, and red food coloring.',
      'Alternate adding flour mixture and buttermilk, starting and ending with the flour mixture.',
      'Drop spoonfuls of batter onto prepared baking sheets and bake for 10-12 minutes or until set.',
      'Let cool and sandwich with cream cheese filling.'
    ],
    nutritionalFacts: {
      calories: 300,
      fat: '12g',
      carbohydrates: '45g',
      protein: '3g'
    }
  },
  {
    title: 'Chocolate Potato Cake',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Contest-Winning-Chocolate-Potato-Cake_EXPS_FBMZ19_27688_E05_02_8b.jpg?fit=700,700',
    reviews: 340,
    rating: 4.8,
    recipe: 'Rich Chocolate Potato Cake',
    ingredients: [
      '1 cup mashed potatoes',
      '2 cups flour',
      '2 cups sugar',
      '3/4 cup cocoa powder',
      '1/2 cup butter, softened',
      '4 eggs',
      '1/2 cup milk',
      '2 tsp baking powder',
      '1 tsp baking soda',
      '1 tsp vanilla extract'
    ],
    directions: [
      'Preheat oven to 350°F (175°C). Grease and flour a 9x13 inch pan.',
      'In a bowl, beat together butter and sugar until creamy. Add eggs one at a time, beating well after each addition.',
      'Mix in mashed potatoes and vanilla.',
      'In another bowl, combine flour, cocoa, baking powder, and baking soda.',
      'Alternate adding the flour mixture and milk to the butter mixture, beating until smooth.',
      'Pour batter into the prepared pan and bake for 35-40 minutes or until a toothpick comes out clean.'
    ],
    nutritionalFacts: {
      calories: 380,
      fat: '15g',
      carbohydrates: '57g',
      protein: '6g'
    }
  },
  {
    title: 'Strawberry Buttermilk Shortcake',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2019/11/Strawberry-Buttermilk-Skillet-Shortcake_EXPS_TOHAM20_244332_E11_08_8b-35.jpg?fit=700,700',
    reviews: 340,
    rating: 4.8,
    recipe: 'Fluffy Strawberry Buttermilk Shortcake',
    ingredients: [
      '2 cups flour',
      '1/4 cup sugar',
      '1/2 tsp salt',
      '1/2 tsp baking soda',
      '1 tbsp baking powder',
      '1/2 cup cold butter',
      '1 cup buttermilk',
      '2 cups sliced strawberries',
      'Whipped cream for serving'
    ],
    directions: [
      'Preheat oven to 425°F (220°C). Grease a baking sheet.',
      'Mix flour, sugar, salt, baking soda, and baking powder.',
      'Cut in butter until mixture resembles coarse crumbs. Stir in buttermilk just until combined.',
      'Drop dough by spoonfuls onto the prepared baking sheet and bake for 12-15 minutes or until golden brown.',
      'Serve warm with strawberries and whipped cream.'
    ],
    nutritionalFacts: {
      calories: 260,
      fat: '12g',
      carbohydrates: '33g',
      protein: '4g'
    }
  },
  {
    title: 'Mint-Chocolate Bars',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Minty-Chocolate-Cream-Cheese-Bars_exps132482_SD132779D06_06_6bC_RMS-7.jpg?fit=700,700',
    reviews: 340,
    rating: 4.8,
    recipe: 'Creamy Mint-Chocolate Bars',
    ingredients: [
      '2 cups chocolate cookie crumbs',
      '1/2 cup butter, melted',
      '1 package cream cheese, softened',
      '1/2 cup sugar',
      '1 egg',
      '1/2 tsp peppermint extract',
      '1 cup chocolate chips, melted'
    ],
    directions: [
      'Preheat oven to 350°F (175°C). Grease a 9x13 inch pan.',
      'Mix cookie crumbs and melted butter. Press into the bottom of the prepared pan.',
      'Beat cream cheese, sugar, egg, and peppermint extract until smooth. Spread over crust.',
      'Drizzle melted chocolate over the top and swirl with a knife.',
      'Bake for 20-25 minutes or until set. Let cool completely before cutting into bars.'
    ],
    nutritionalFacts: {
      calories: 280,
      fat: '18g',
      carbohydrates: '26g',
      protein: '3g'
    }
  },
  {
    title: 'Blackberry Cake',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Grandma-s-Blackberry-Cake_EXPS_FTTMZ20_6605_E03_04_5b-8.jpg?fit=700,700',
    reviews: 340,
    rating: 4.8,
    recipe: 'Moist Blackberry Cake',
    ingredients: [
      '2 cups all-purpose flour',
      '1 cup sugar',
      '1/2 cup butter, softened',
      '1 cup milk',
      '2 eggs',
      '2 tsp baking powder',
      '1/2 tsp salt',
      '1 1/2 cups fresh blackberries'
    ],
    directions: [
      'Preheat oven to 350°F (175°C). Grease a 9x13 inch baking pan.',
      'In a large bowl, cream together butter and sugar until light and fluffy.',
      'Add eggs one at a time, beating well with each addition, then stir in vanilla.',
      'Combine the flour, baking powder, and salt; stir into the batter alternately with the milk.',
      'Gently fold in blackberries and pour batter into the prepared pan.',
      'Bake for 35-40 minutes, or until a toothpick inserted into the center comes out clean.'
    ],
    nutritionalFacts: {
      calories: 280,
      fat: '12g',
      carbohydrates: '40g',
      protein: '4g'
    }
  },
  {
    title: 'Cranberry Cake Pudding',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps179194_TH143193C04_23_3b-5.jpg?fit=700,700',
    reviews: 340,
    rating: 4.8,
    recipe: 'Warm Cranberry Cake Pudding',
    ingredients: [
      '2 cups fresh cranberries',
      '1 cup sugar',
      '2 cups flour',
      '1/2 cup butter, melted',
      '1 cup milk',
      '2 tsp baking powder',
      '1/2 tsp salt',
      '1 tsp vanilla extract'
    ],
    directions: [
      'Preheat oven to 350°F (175°C). Grease a baking dish.',
      'In a large bowl, combine flour, sugar, baking powder, and salt.',
      'Stir in melted butter, milk, and vanilla until smooth.',
      'Fold in cranberries and pour batter into the prepared baking dish.',
      'Bake for 30-35 minutes or until a toothpick inserted into the center comes out clean.',
      'Serve warm with whipped cream or vanilla ice cream.'
    ],
    nutritionalFacts: {
      calories: 300,
      fat: '10g',
      carbohydrates: '48g',
      protein: '3g'
    }
  },
  {
    title: 'Spiced Apple Pie',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2018/08/Spiced-Upside-Down-Apple-Pie_EXPS_SDON18_112949_E06_12_3b-1.jpg?fit=700,700',
    reviews: 340,
    rating: 4.8,
    recipe: 'Classic Spiced Apple Pie',
    ingredients: [
      '6 cups thinly sliced apples',
      '1/2 cup sugar',
      '1/4 cup brown sugar',
      '1/2 tsp cinnamon',
      '1/4 tsp nutmeg',
      '1/4 tsp allspice',
      '2 tbsp flour',
      '1 tbsp lemon juice',
      '1 package pie crust'
    ],
    directions: [
      'Preheat oven to 425°F (220°C).',
      'In a large bowl, mix together apples, sugars, cinnamon, nutmeg, allspice, flour, and lemon juice.',
      'Place one pie crust in a pie pan, fill with apple mixture, and top with the second crust. Seal edges and cut slits in the top.',
      'Bake for 45-50 minutes or until the crust is golden brown and apples are tender.',
      'Let cool before serving.'
    ],
    nutritionalFacts: {
      calories: 320,
      fat: '12g',
      carbohydrates: '52g',
      protein: '2g'
    }
  },
  {
    title: 'Strawberry Cake',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Mamaw-Emily-s-Strawberry-Cake_EXPS_FRBZ19_82745_C01_31_4b-9.jpg?fit=700,700',
    reviews: 340,
    rating: 4.8,
    recipe: 'Fluffy Strawberry Cake',
    ingredients: [
      '1 package white cake mix',
      '1 package strawberry gelatin',
      '1/2 cup water',
      '1/2 cup oil',
      '4 eggs',
      '1 cup mashed fresh strawberries',
      '1/2 cup butter, softened',
      '4 cups powdered sugar',
      '1/4 cup milk',
      'Fresh strawberries for garnish'
    ],
    directions: [
      'Preheat oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.',
      'In a large bowl, combine cake mix, gelatin, water, oil, and eggs. Beat on medium speed for 2 minutes. Stir in mashed strawberries.',
      'Pour into prepared pans and bake for 25-30 minutes or until a toothpick comes out clean.',
      'For frosting, beat butter and powdered sugar until fluffy, adding milk as needed. Frost cooled cakes and garnish with fresh strawberries.'
    ],
    nutritionalFacts: {
      calories: 400,
      fat: '16g',
      carbohydrates: '62g',
      protein: '3g'
    }
  },
  {
    title: 'Apple Cake',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2017/09/exps21700_CW163683C03_31_4b.jpg?fit=700,700',
    reviews: 340,
    rating: 4.8,
    recipe: 'Moist Apple Cake',
    ingredients: [
      '4 cups diced apples',
      '2 cups sugar',
      '1/2 cup oil',
      '2 eggs',
      '2 tsp vanilla extract',
      '2 cups flour',
      '2 tsp baking soda',
      '1/2 tsp salt',
      '1 tsp cinnamon',
      '1/2 cup chopped nuts (optional)'
    ],
    directions: [
      'Preheat oven to 350°F (175°C). Grease a 9x13 inch baking pan.',
      'In a large bowl, mix together diced apples and sugar. Let stand for 10 minutes.',
      'Stir in oil, eggs, and vanilla until well blended.',
      'In a separate bowl, combine flour, baking soda, salt, and cinnamon. Add to the apple mixture and stir until just combined.',
      'Fold in nuts if using. Pour batter into the prepared pan.',
      'Bake for 45-50 minutes or until a toothpick inserted into the center comes out clean.'
    ],
    nutritionalFacts: {
      calories: 350,
      fat: '15g',
      carbohydrates: '52g',
      protein: '4g'
    }
  }
];

const RecipeCake = () => {
  const [showAll, setShowAll] = useState(false);
  const navigate=useNavigate();

  // Decide which recipes to display based on the state
  const displayedRecipes = showAll ? topRecipes : topRecipes.slice(0, 3);

  const handleToggleCake = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  const handleRecipes = (recipe) => {
    localStorage.setItem('recipes', JSON.stringify(recipe)); // Store selected recipes in localStorage
    navigate('/recipes'); // Navigate to the recipes page
  };


  return (
    <>
    <Container maxWidth="lg" sx={{ textAlign: 'center', padding: '2px', overflow: 'hidden' }}>
    <Box sx={{ width: '100%', textAlign: 'center', padding: '2px', overflow: 'hidden' }}>
     

      {/* Top Rated Recipes Section */}
      <Box sx={{ marginTop: 3, paddingLeft: 2, paddingRight: 2 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 5, fontWeight: 'bold' }}>
          Cakes
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
          onClick={handleToggleCake}
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

export default RecipeCake;
