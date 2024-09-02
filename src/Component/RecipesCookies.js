import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, Container } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

// Sample data for the top-rated recipes
const topRecipes = [
  {
    title: 'Special Spice Cookies',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps336_CK133085D06_07_4bC_RMS-7.jpg?fit=700,700',
    reviews: 1742,
    rating: 4.6,
    recipe: 'Crispy Special Spice Cookies',
    ingredients: [
      '1 cup butter, softened',
      '1 cup sugar',
      '1/2 cup molasses',
      '1 egg',
      '3 cups all-purpose flour',
      '2 tsp baking soda',
      '1/2 tsp salt',
      '2 tsp ground ginger',
      '1 tsp ground cinnamon',
      '1/2 tsp ground cloves'
    ],
    directions: [
      'Preheat oven to 375°F (190°C).',
      'In a large bowl, cream butter and sugar until light and fluffy. Beat in molasses and egg.',
      'Combine flour, baking soda, salt, ginger, cinnamon, and cloves; gradually add to the creamed mixture.',
      'Roll dough into 1-inch balls and place 2 inches apart on ungreased baking sheets.',
      'Bake for 8-10 minutes or until edges are set and tops are cracked.',
      'Cool on wire racks.'
    ],
    nutritionalFacts: {
      calories: 160,
      fat: '8g',
      carbohydrates: '20g',
      protein: '2g'
    }
  },
  {
    title: 'Oats Cookies',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Oat-Coconut-Icebox-Cookies_EXPS_UCSBZ17_124192_D06_06_2b-7.jpg?fit=700,700',
    reviews: 180,
    rating: 4.9,
    recipe: 'Chewy Oats Cookies',
    ingredients: [
      '1 cup butter, softened',
      '1 cup brown sugar',
      '1/2 cup white sugar',
      '2 eggs',
      '1 tsp vanilla extract',
      '1 1/2 cups all-purpose flour',
      '1 tsp baking soda',
      '1 tsp ground cinnamon',
      '1/2 tsp salt',
      '3 cups quick-cooking oats'
    ],
    directions: [
      'Preheat oven to 350°F (175°C).',
      'In a large bowl, cream together the butter, brown sugar, and white sugar until smooth.',
      'Beat in the eggs one at a time, then stir in vanilla.',
      'Combine flour, baking soda, cinnamon, and salt; stir into the creamed mixture until just blended.',
      'Mix in oats. Drop by teaspoonfuls onto ungreased baking sheets.',
      'Bake for 10-12 minutes, until golden brown. Cool on wire racks.'
    ],
    nutritionalFacts: {
      calories: 200,
      fat: '9g',
      carbohydrates: '28g',
      protein: '3g'
    }
  },
  {
    title: 'Date Cookies',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Date-Swirl-Cookies_EXPS_CBZ16_250_C05_13_3b.jpg?fit=700,700',
    reviews: 66,
    rating: 4.8,
    recipe: 'Soft Date Cookies',
    ingredients: [
      '1 cup dates, chopped',
      '1/2 cup water',
      '1/4 cup sugar',
      '1 cup butter, softened',
      '1 cup brown sugar',
      '2 eggs',
      '1 tsp vanilla extract',
      '2 1/2 cups all-purpose flour',
      '1 tsp baking soda',
      '1/2 tsp salt',
      '1/2 tsp ground cinnamon'
    ],
    directions: [
      'Preheat oven to 350°F (175°C).',
      'In a small saucepan, combine dates, water, and sugar. Bring to a boil; cook and stir until thickened, about 5 minutes. Set aside to cool.',
      'In a large bowl, cream butter and brown sugar until light and fluffy. Beat in eggs and vanilla.',
      'Combine flour, baking soda, salt, and cinnamon; gradually add to the creamed mixture.',
      'Drop by rounded teaspoonfuls onto greased baking sheets. Spoon a small amount of date mixture onto each.',
      'Bake for 10-12 minutes or until golden brown.'
    ],
    nutritionalFacts: {
      calories: 150,
      fat: '7g',
      carbohydrates: '22g',
      protein: '2g'
    }
  },
  {
    title: 'Peanut Butter Cookies',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2024/08/Peanut-Butter-Cookies_EXPS_TOHD2024_7873_LaurenHabermehl_4.jpg?fit=700,700',
    reviews: 66,
    rating: 4.8,
    recipe: 'Classic Peanut Butter Cookies',
    ingredients: [
      '1 cup peanut butter',
      '1 cup sugar',
      '1 egg',
      '1 tsp baking soda',
      '1/4 tsp salt'
    ],
    directions: [
      'Preheat oven to 350°F (175°C).',
      'In a medium bowl, mix peanut butter, sugar, egg, baking soda, and salt until smooth.',
      'Roll into 1-inch balls and place on ungreased baking sheets.',
      'Flatten each ball with a fork, making a crisscross pattern.',
      'Bake for 8-10 minutes or until edges are lightly browned. Cool on wire racks.'
    ],
    nutritionalFacts: {
      calories: 120,
      fat: '7g',
      carbohydrates: '10g',
      protein: '3g'
    }
  },
  {
    title: 'Chocolate Cookies',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Chocolate-Lebkuchen_EXPS_HCBZ23_39864_DR_12_01_3b.jpg?fit=700,700',
    reviews: 66,
    rating: 4.8,
    recipe: 'Soft Chocolate Cookies',
    ingredients: [
      '1 cup butter, softened',
      '1 1/2 cups sugar',
      '2 eggs',
      '2 tsp vanilla extract',
      '2 cups all-purpose flour',
      '1/2 cup cocoa powder',
      '1 tsp baking soda',
      '1/2 tsp salt',
      '1 cup chocolate chips'
    ],
    directions: [
      'Preheat oven to 350°F (175°C).',
      'In a large bowl, cream butter and sugar until light and fluffy. Beat in eggs one at a time, then stir in vanilla.',
      'Combine flour, cocoa, baking soda, and salt; gradually blend into the creamed mixture. Mix in chocolate chips.',
      'Drop by rounded teaspoonfuls onto ungreased cookie sheets.',
      'Bake for 8-10 minutes, or until edges are set but centers are still soft. Let cool on wire racks.'
    ],
    nutritionalFacts: {
      calories: 160,
      fat: '8g',
      carbohydrates: '22g',
      protein: '2g' 
    }
  },
  {
    title: 'Jelly Bean Cookies',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Jelly-Bean-Cookies_EXPS_THAM18_160425_D11_09_6b.jpg?fit=700,700',
    reviews: 66,
    rating: 4.8,
    recipe: 'Festive Jelly Bean Cookies',
    ingredients: [
      '1 cup butter, softened',
      '1 cup sugar',
      '1 egg',
      '1 tsp vanilla extract',
      '2 1/2 cups all-purpose flour',
      '1/2 tsp baking soda',
      '1/4 tsp salt',
      '1 cup jelly beans, chopped'
    ],
    directions: [
      'Preheat oven to 375°F (190°C).',
      'In a large bowl, cream butter and sugar until light and fluffy. Beat in egg and vanilla.',
      'Combine flour, baking soda, and salt; gradually add to the creamed mixture.',
      'Stir in chopped jelly beans.',
      'Drop by rounded teaspoonfuls 2 inches apart onto ungreased baking sheets.',
      'Bake 8-10 minutes or until edges are lightly browned. Cool on wire racks.'
    ],
    nutritionalFacts: {
      calories: 170,
      fat: '8g',
      carbohydrates: '24g',
      protein: '2g'
    }
  },
  {
    title: 'Frosted Spice Cookies',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Frosted-Spice-Cookies_EXPS_CBZ16_4107_B04_26_1b-1.jpg?fit=700,700',
    reviews: 66,
    rating: 4.8,
    recipe: 'Soft Frosted Spice Cookies',
    ingredients: [
      '1 cup butter, softened',
      '1 cup sugar',
      '1 egg',
      '1/4 cup molasses',
      '2 1/2 cups all-purpose flour',
      '2 tsp baking soda',
      '1/2 tsp salt',
      '1 tsp ground cinnamon',
      '1/2 tsp ground ginger',
      '1/4 tsp ground cloves',
      '1/4 cup milk',
      '1 1/2 cups powdered sugar',
      '2 tbsp butter, softened',
      '1/2 tsp vanilla extract'
    ],
    directions: [
      'Preheat oven to 375°F (190°C).',
      'In a large bowl, cream butter and sugar until light and fluffy. Beat in egg and molasses.',
      'Combine flour, baking soda, salt, cinnamon, ginger, and cloves; gradually add to the creamed mixture.',
      'Drop by tablespoonfuls 2 inches apart onto ungreased baking sheets.',
      'Bake 8-10 minutes or until set. Cool on wire racks.',
      'For frosting, beat powdered sugar, butter, vanilla, and milk until smooth. Frost cooled cookies.'
    ],
    nutritionalFacts: {
      calories: 180,
      fat: '7g',
      carbohydrates: '29g',
      protein: '2g'
    }
  },
  {
    title: 'Italian Lemon Cookies',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2024/08/EXPS_TOHD24_130818_JuliaHartbeck.jpg?fit=700,700',
    reviews: 66,
    rating: 4.8,
    recipe: 'Zesty Italian Lemon Cookies',
    ingredients: [
      '1/2 cup butter, softened',
      '1 cup sugar',
      '3 eggs',
      '1/2 cup milk',
      '2 tbsp lemon juice',
      '1 tbsp lemon zest',
      '3 cups all-purpose flour',
      '3 tsp baking powder',
      '1/4 tsp salt',
      '1 1/2 cups powdered sugar',
      '2 tbsp lemon juice'
    ],
    directions: [
      'Preheat oven to 350°F (175°C).',
      'In a large bowl, cream butter and sugar until light and fluffy. Beat in eggs one at a time.',
      'Mix in milk, lemon juice, and lemon zest.',
      'Combine flour, baking powder, and salt; gradually add to the creamed mixture.',
      'Drop by rounded tablespoonfuls onto greased baking sheets.',
      'Bake 10-12 minutes or until lightly browned. Cool on wire racks.',
      'For glaze, mix powdered sugar and lemon juice until smooth. Drizzle over cooled cookies.'
    ],
    nutritionalFacts: {
      calories: 160,
      fat: '5g',
      carbohydrates: '28g',
      protein: '3g'
    }
  },
  {
    title: 'Glazed Strawberry Cookies',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2017/09/exps126741_CC153599B04_24_2bC_RMS.jpg?fit=700,700',
    reviews: 66,
    rating: 4.8,
    recipe: 'Sweet Glazed Strawberry Cookies',
    ingredients: [
      '1/2 cup butter, softened',
      '1 cup sugar',
      '1 egg',
      '1/2 cup strawberry puree',
      '1 tsp vanilla extract',
      '2 cups all-purpose flour',
      '1/2 tsp baking soda',
      '1/4 tsp salt',
      '1 cup powdered sugar',
      '2 tbsp strawberry puree'
    ],
    directions: [
      'Preheat oven to 350°F (175°C).',
      'In a large bowl, cream butter and sugar until light and fluffy. Beat in egg, strawberry puree, and vanilla.',
      'Combine flour, baking soda, and salt; gradually add to the creamed mixture.',
      'Drop by rounded teaspoonfuls onto ungreased baking sheets.',
      'Bake 10-12 minutes or until edges are lightly browned. Cool on wire racks.',
      'For glaze, mix powdered sugar and strawberry puree until smooth. Drizzle over cooled cookies.'
    ],
    nutritionalFacts: {
      calories: 150,
      fat: '6g',
      carbohydrates: '24g',
      protein: '2g'
    }
  },
  {
    title: 'Chocolate Sugar Crisps',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2017/09/exps131606_THCA163696C07_15_1b.jpg?fit=700,700',
    reviews: 66,
    rating: 4.8,
    recipe: 'Crispy Chocolate Sugar Cookies',
    ingredients: [
      '1 cup butter, softened',
      '1 1/2 cups sugar',
      '2 eggs',
      '1 tsp vanilla extract',
      '2 cups all-purpose flour',
      '1/2 cup cocoa powder',
      '1/2 tsp baking soda',
      '1/4 tsp salt',
      '1/4 cup granulated sugar for rolling'
    ],
    directions: [
      'Preheat oven to 350°F (175°C).',
      'In a large bowl, cream butter and sugar until light and fluffy. Beat in eggs and vanilla.',
      'Combine flour, cocoa, baking soda, and salt; gradually add to the creamed mixture.',
      'Roll dough into 1-inch balls and roll in granulated sugar. Place 2 inches apart on ungreased baking sheets.',
      'Bake 10-12 minutes or until set. Cool on wire racks.'
    ],
    nutritionalFacts: {
      calories: 160,
      fat: '8g',
      carbohydrates: '22g',
      protein: '2g'
    }
  }
];

const RecipesCookies = () => {
  const [showAll, setShowAll] = useState(false);
  const navigate=useNavigate();

  // Decide which recipes to display based on the state
  const displayedRecipes = showAll ? topRecipes : topRecipes.slice(0, 3);

  const handleToggleCookies = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  const handleRecipes = (recipe) => {
    localStorage.setItem('recipes', JSON.stringify(recipe)); // Store selected recipes in localStorage
    navigate('/recipes'); // Navigate to the recipes page
  };


  return (
    <>
    <Container maxWidth="lg" sx={{ textAlign: 'center', padding: '2px', overflow: 'hidden' }}>
      {/* Top Rated Recipes Section */}
      <Box sx={{ marginTop: 3, paddingLeft: 2, paddingRight: 2 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 5, fontWeight: 'bold' }}>
          Cookies
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
          onClick={handleToggleCookies}
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
    </Container>
   
    </>
  );
};

export default RecipesCookies;
