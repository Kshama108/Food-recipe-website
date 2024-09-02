import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, Container } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { Link, useNavigate } from 'react-router-dom';
import RecipeBread from './RecipeBread';
import RecipeCake from './RecipeCake';
import RecipesCookies from './RecipesCookies';
import Footer from './Footer';
import RecipeOther from './RecipeOthers';

// Sample data for the top-rated recipes
const topRecipes = [
  {
    title: 'Special Spice Cookies',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps336_CK133085D06_07_4bC_RMS-7.jpg?fit=700,700',
    reviews: 1742,
    rating: 4.6,
    
    recipe: 'Special Spice Cookies',
    ingredients: [
      '2 cups all-purpose flour',
      '1 teaspoon baking soda',
      '1/2 teaspoon salt',
      '1 teaspoon ground cinnamon',
      '1/2 teaspoon ground ginger',
      '1/4 teaspoon ground cloves',
      '1 cup unsalted butter, softened',
      '1 cup granulated sugar',
      '1/2 cup packed brown sugar',
      '1 large egg',
      '1 teaspoon vanilla extract'
    ],
    directions: [
      'Preheat oven to 350°F (175°C).',
      'In a bowl, whisk together flour, baking soda, salt, cinnamon, ginger, and cloves.',
      'In a separate bowl, beat together butter, granulated sugar, and brown sugar until fluffy.',
      'Add egg and vanilla, beating until combined.',
      'Gradually add the dry ingredients, mixing just until combined.',
      'Drop by rounded spoonfuls onto ungreased baking sheets.',
      'Bake 10-12 minutes, or until edges are lightly browned.',
      'Cool on the baking sheet for 2 minutes before transferring to a wire rack to cool completely.'
    ],
    nutritionalFacts: {
      calories: 120,
      fat: '6g',
      carbohydrates: '15g',
      protein: '1g'
    }
  },
  {
    title: 'Yummy Blueberry Cake',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Classic-Blueberry-Buckle_EXPS_FT24_28582_EC_062124_8.jpg?fit=700,700',
    reviews: 111,
    rating: 4.9,
    recipe: 'Yummy Blueberry Cake',
    ingredients: [
      '2 cups all-purpose flour',
      '2 teaspoons baking powder',
      '1/2 teaspoon salt',
      '1/2 cup unsalted butter, softened',
      '3/4 cup granulated sugar',
      '1 large egg',
      '1 teaspoon vanilla extract',
      '1/2 cup milk',
      '2 cups fresh blueberries'
    ],
    directions: [
      'Preheat oven to 350°F (175°C).',
      'Grease a 9-inch round baking pan.',
      'In a bowl, combine flour, baking powder, and salt.',
      'In another bowl, cream together butter and sugar until light and fluffy.',
      'Beat in egg and vanilla.',
      'Add flour mixture alternately with milk, mixing just until combined.',
      'Fold in blueberries.',
      'Pour batter into prepared pan.',
      'Bake for 35-40 minutes, or until a toothpick inserted into the center comes out clean.'
    ],
    nutritionalFacts: {
      calories: 200,
      fat: '8g',
      carbohydrates: '28g',
      protein: '3g'
    }
  },
  {
    title: 'Miracle Coffee Bread',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2024/08/Blueberries-and-Cream-Coffee-Cake_EXPS_TOHD24_148116_MollyBolton_14.jpg?fit=700,700',
    reviews: 561,
    rating: 4.8,
    recipe: 'Miracle Coffee Bread',
    ingredients: [
      '3 cups all-purpose flour',
      '1/4 cup granulated sugar',
      '1 packet active dry yeast',
      '1/2 teaspoon salt',
      '1 cup warm milk',
      '1/4 cup butter, melted',
      '1 egg',
      '1 tablespoon instant coffee powder'
    ],
    directions: [
      'In a large bowl, combine 1 cup flour, sugar, yeast, and salt.',
      'Add warm milk, melted butter, and egg; beat until smooth.',
      'Stir in remaining flour and coffee powder to form a soft dough.',
      'Turn onto a floured surface; knead until smooth and elastic, about 6-8 minutes.',
      'Place in a greased bowl, turning once to grease the top.',
      'Cover and let rise in a warm place until doubled, about 1 hour.',
      'Punch down dough and shape into a loaf.',
      'Place in a greased 9x5-inch loaf pan.',
      'Cover and let rise until doubled, about 30 minutes.',
      'Bake at 375°F (190°C) for 30-35 minutes or until golden brown.'
    ],
    nutritionalFacts: {
      calories: 250,
      fat: '7g',
      carbohydrates: '38g',
      protein: '5g'
    }
  },
  // Additional recipes follow the same structure...
  {
    title: 'Chocolate Pie',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2019/10/Chocolate-Chess-Pie_EXPS_TOHcom23_193072_DR_12_13_2b.jpg?fit=700,700',
    reviews: 712,
    rating: 4.9,
    recipe: 'Chocolate Pie',
    ingredients: [
      '1 pre-baked pie crust',
      '1 cup granulated sugar',
      '1/4 cup unsweetened cocoa powder',
      '2 tablespoons all-purpose flour',
      '1/4 teaspoon salt',
      '1/2 cup melted butter',
      '2 large eggs',
      '1/4 cup milk',
      '1 teaspoon vanilla extract'
    ],
    directions: [
      'Preheat oven to 350°F (175°C).',
      'In a bowl, combine sugar, cocoa, flour, and salt.',
      'Stir in melted butter, eggs, milk, and vanilla until smooth.',
      'Pour into the pie crust.',
      'Bake for 35-40 minutes or until the center is set.',
      'Cool completely before serving.'
    ],
    nutritionalFacts: {
      calories: 320,
      fat: '18g',
      carbohydrates: '36g',
      protein: '4g'
    }
  },
  {
    title: 'Oats Cookies',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Oat-Coconut-Icebox-Cookies_EXPS_UCSBZ17_124192_D06_06_2b-7.jpg?fit=700,700',
    reviews: 180,
    rating: 4.9,
    recipe: 'Oats Cookies',
    ingredients: [
      '1 cup unsalted butter, softened',
      '1 cup brown sugar',
      '1/2 cup granulated sugar',
      '2 large eggs',
      '1 teaspoon vanilla extract',
      '1 1/2 cups all-purpose flour',
      '1 teaspoon baking soda',
      '1 teaspoon ground cinnamon',
      '1/2 teaspoon salt',
      '3 cups old-fashioned oats'
    ],
    directions: [
      'Preheat oven to 350°F (175°C).',
      'In a large bowl, cream together butter, brown sugar, and granulated sugar.',
      'Beat in eggs and vanilla.',
      'In a separate bowl, whisk together flour, baking soda, cinnamon, and salt.',
      'Gradually add the dry ingredients to the creamed mixture.',
      'Stir in oats.',
      'Drop by rounded tablespoons onto ungreased baking sheets.',
      'Bake 10-12 minutes or until golden brown.',
      'Cool on wire racks.'
    ],
    nutritionalFacts: {
      calories: 110,
      fat: '5g',
      carbohydrates: '15g',
      protein: '2g'
    }
  },
  {
    title: 'Banana Bread',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Banana-Zucchini-Bread_EXPS_FT20_4512_F_0811_1.jpg?fit=700,700',
    reviews: 362,
    rating: 4.8,
    recipe: 'Classic Banana Bread',
    ingredients: [
      '3 ripe bananas, mashed',
      '1/3 cup melted butter',
      '1 teaspoon baking soda',
      'Pinch of salt',
      '3/4 cup sugar',
      '1 large egg, beaten',
      '1 teaspoon vanilla extract',
      '1 1/2 cups all-purpose flour'
    ],
    directions: [
      'Preheat oven to 350°F (175°C).',
      'Mix mashed bananas with melted butter in a bowl.',
      'Stir in baking soda and salt. Mix in the sugar, beaten egg, and vanilla extract.',
      'Add flour last and mix until just incorporated.',
      'Pour mixture into a buttered loaf pan.',
      'Bake for 60-65 minutes at 350°F (175°C), or until a toothpick inserted into the center comes out clean.',
      'Cool on a rack and slice to serve.'
    ],
    nutritionalFacts: {
      Calories: '196 kcal',
      Protein: '3 g',
      Carbohydrates: '33 g',
      Fat: '6 g',
      Fiber: '1 g',
      Sugar: '18 g'
    }
  },
  {
    title: 'Cranberry Pudding',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps179194_TH143193C04_23_3b-5.jpg?fit=700,700',
    reviews: 392,
    rating: 4.8,
    recipe: 'Cranberry Steamed Pudding',
    ingredients: [
      '2 cups all-purpose flour',
      '1 teaspoon baking powder',
      '1/2 teaspoon salt',
      '1/2 cup butter, softened',
      '1 cup sugar',
      '1 egg, beaten',
      '1/2 cup milk',
      '2 cups cranberries, chopped'
    ],
    directions: [
      'Preheat oven to 350°F (175°C).',
      'Cream together the butter and sugar until light and fluffy.',
      'Add the egg and beat well.',
      'Sift together the flour, baking powder, and salt; add to the butter mixture alternately with milk.',
      'Fold in the cranberries.',
      'Pour the batter into a greased and floured 9x13 inch baking dish.',
      'Bake for 35-40 minutes, or until a toothpick inserted into the center comes out clean.'
    ],
    nutritionalFacts: {
      Calories: '220 kcal',
      Protein: '3 g',
      Carbohydrates: '36 g',
      Fat: '8 g',
      Fiber: '2 g',
      Sugar: '20 g'
    }
  },
  {
    title: 'Date Cookies',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Date-Swirl-Cookies_EXPS_CBZ16_250_C05_13_3b.jpg?fit=700,700',
    reviews: 66,
    rating: 4.8,
    recipe: 'Date Swirl Cookies',
    ingredients: [
      '2 cups all-purpose flour',
      '1/2 teaspoon baking soda',
      '1/2 teaspoon salt',
      '1/2 cup butter, softened',
      '1 cup packed brown sugar',
      '1 egg',
      '1 teaspoon vanilla extract',
      '1 cup dates, chopped',
      '1/2 cup walnuts, chopped'
    ],
    directions: [
      'Preheat oven to 350°F (175°C).',
      'Combine flour, baking soda, and salt in a bowl; set aside.',
      'In a separate bowl, cream together the butter and brown sugar until light and fluffy.',
      'Add egg and vanilla, beating well.',
      'Gradually add flour mixture, mixing until combined.',
      'Stir in dates and walnuts.',
      'Drop by rounded teaspoonfuls onto ungreased baking sheets.',
      'Bake for 10-12 minutes or until lightly browned.'
    ],
    nutritionalFacts: {
      Calories: '160 kcal',
      Protein: '2 g',
      Carbohydrates: '24 g',
      Fat: '6 g',
      Fiber: '1 g',
      Sugar: '14 g'
    }
  },
  {
    title: 'Walnut Cream-Filled Rolls',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Sour-Cream-Rolls-with-Walnut-Filling_EXPS_TOHcom_189777_DR_09_29_4b.jpg?fit=700,700',
    reviews: 340,
    rating: 4.8,
    recipe: 'Walnut Cream-Filled Rolls',
    ingredients: [
      '2 cups all-purpose flour',
      '1 teaspoon baking powder',
      '1/2 teaspoon salt',
      '1/2 cup butter, softened',
      '1 cup sour cream',
      '1 cup walnuts, finely chopped',
      '1/2 cup sugar'
    ],
    directions: [
      'Preheat oven to 375°F (190°C).',
      'Combine flour, baking powder, and salt in a bowl.',
      'Cut in the butter until mixture resembles coarse crumbs.',
      'Stir in sour cream just until combined.',
      'Roll out dough on a floured surface into a rectangle.',
      'Spread walnut and sugar mixture evenly over the dough.',
      'Roll up the dough and cut into 1-inch slices.',
      'Place slices on a baking sheet and bake for 15-18 minutes until golden brown.'
    ],
    nutritionalFacts: {
      Calories: '210 kcal',
      Protein: '3 g',
      Carbohydrates: '22 g',
      Fat: '13 g',
      Fiber: '1 g',
      Sugar: '10 g'
    }
  },
  {
    title: 'Butter horn Rolls',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Flaky-Butterhorn-Rolls_EXPS_GBHRBZ17_4302_B07_12_4b-1.jpg?fit=700,700',
    reviews: 340,
    rating: 4.8,
    recipe: 'Flaky Butter horn Rolls',
    ingredients: [
      '2 cups all-purpose flour',
      '1/2 teaspoon salt',
      '1 cup butter, cold and cubed',
      '1/2 cup sour cream',
      '1/4 cup sugar for dusting'
    ],
    directions: [
      'Preheat oven to 350°F (175°C).',
      'Combine flour and salt in a bowl.',
      'Cut in butter until the mixture resembles coarse crumbs.',
      'Stir in sour cream just until combined.',
      'Divide dough into four parts and roll each into a circle.',
      'Sprinkle with sugar and cut each circle into wedges.',
      'Roll each wedge from the wide end and place on a baking sheet.',
      'Bake for 15-20 minutes or until golden brown.'
    ],
    nutritionalFacts: {
      Calories: '180 kcal',
      Protein: '2 g',
      Carbohydrates: '16 g',
      Fat: '12 g',
      Fiber: '0.5 g',
      Sugar: '4 g'
    }
  },
  {
    title: 'Gingerbread',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2019/06/Old-Fashion-Gingerbread_EXPS_TOHCA19_54463_B03_19_7b_rms-3.jpg?fit=700,700',
    reviews: 340,
    rating: 4.8,
    recipe: 'Old-Fashioned Gingerbread',
    ingredients: [
      '2 1/4 cups all-purpose flour',
      '1/2 cup sugar',
      '1/2 cup butter, softened',
      '1 cup molasses',
      '1 egg',
      '1 teaspoon baking soda',
      '1 teaspoon ground ginger',
      '1 teaspoon ground cinnamon',
      '1/2 teaspoon ground cloves',
      '1 cup hot water'
    ],
    directions: [
      'Preheat oven to 350°F (175°C).',
      'In a bowl, cream together the butter and sugar.',
      'Add the egg and molasses, beating well.',
      'Combine the flour, baking soda, ginger, cinnamon, and cloves; add to the creamed mixture alternately with water.',
      'Pour into a greased 9-inch square baking pan.',
      'Bake for 30-35 minutes or until a toothpick inserted into the center comes out clean.',
      'Cool on a wire rack before cutting.'
    ],
    nutritionalFacts: {
      Calories: '230 kcal',
      Protein: '3 g',
      Carbohydrates: '45 g',
      Fat: '6 g',
      Fiber: '1 g',
      Sugar: '26 g'
    }
  },
  {
    title: 'Red Velvet Whoopie Pies',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Chocolate-Chip-Red-Velvet-Whoopie-Pies_EXPS_HCA23_186141_P1_P2_MD_12_02_4b.jpg?fit=700,700',
    reviews: 340,
    rating: 4.8,
    recipe: 'Red Velvet Whoopie Pies',
    ingredients: [
      '1 box red velvet cake mix',
      '1/2 cup butter, softened',
      '2 eggs',
      '1/4 cup water',
      '1 cup marshmallow cream',
      '1/2 cup cream cheese, softened',
      '1/2 cup powdered sugar',
      '1 teaspoon vanilla extract'
    ],
    directions: [
      'Preheat the oven to 350°F (175°C).',
      'In a bowl, mix the cake mix, butter, eggs, and water until well combined.',
      'Scoop batter onto a baking sheet lined with parchment paper, about 1 tablespoon per cookie.',
      'Bake for 8-10 minutes or until cookies are set. Let cool on a wire rack.',
      'For the filling, beat together the marshmallow cream, cream cheese, powdered sugar, and vanilla extract until smooth.',
      'Spread the filling on the flat side of one cookie and top with another to create a whoopie pie.',
      'Repeat with remaining cookies and filling.'
    ],
    nutritionalFacts: {
      Calories: '210 kcal',
      Protein: '2 g',
      Carbohydrates: '28 g',
      Fat: '10 g',
      Fiber: '1 g',
      Sugar: '18 g'
    }
  },
  {
    title: 'Wholesome Wheat Bread',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Wholesome-Wheat-Bread_EXPS_CWFM18_2093_C10_12_6b-3.jpg?fit=700,700',
    reviews: 340,
    rating: 4.8,
    recipe: 'Wholesome Wheat Bread',
    ingredients: [
      '3 cups whole wheat flour',
      '1/4 cup honey',
      '1/4 cup vegetable oil',
      '1 1/2 teaspoons salt',
      '1 1/2 cups warm water',
      '2 teaspoons active dry yeast'
    ],
    directions: [
      'In a large bowl, dissolve yeast in warm water with honey; let stand until foamy.',
      'Add oil, salt, and 2 cups of flour; mix until smooth.',
      'Gradually add the remaining flour to form a soft dough.',
      'Knead the dough on a floured surface until smooth and elastic, about 8-10 minutes.',
      'Place in a greased bowl, cover, and let rise until doubled, about 1 hour.',
      'Punch down the dough, shape into a loaf, and place in a greased 9x5 inch loaf pan.',
      'Cover and let rise until doubled, about 30 minutes.',
      'Bake at 375°F (190°C) for 25-30 minutes or until golden brown. Cool on a wire rack.'
    ],
    nutritionalFacts: {
      Calories: '140 kcal',
      Protein: '4 g',
      Carbohydrates: '25 g',
      Fat: '3 g',
      Fiber: '3 g',
      Sugar: '4 g'
    }
  },
  {
    title: 'Cinnamon Bread',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2019/10/Chocolate-Babka_EXPS_TOHDJ20_242524_B07_30_1b-8.jpg?fit=700,700',
    reviews: 340,
    rating: 4.8,
    recipe: 'Cinnamon Swirl Bread',
    ingredients: [
      '3 cups all-purpose flour',
      '1/4 cup sugar',
      '1 packet active dry yeast',
      '1 cup warm milk',
      '1/4 cup butter, melted',
      '1 teaspoon salt',
      '2 teaspoons ground cinnamon',
      '1/4 cup brown sugar'
    ],
    directions: [
      'In a large bowl, combine 1 cup of flour, sugar, yeast, and salt.',
      'Add the warm milk and melted butter; beat until smooth.',
      'Stir in enough remaining flour to form a soft dough.',
      'Knead the dough on a floured surface until smooth and elastic, about 6-8 minutes.',
      'Place in a greased bowl, cover, and let rise until doubled, about 1 hour.',
      'Punch down the dough, roll into a rectangle, and sprinkle with brown sugar and cinnamon.',
      'Roll up the dough tightly, pinch seams to seal, and place in a greased loaf pan.',
      'Cover and let rise until doubled, about 30 minutes.',
      'Bake at 350°F (175°C) for 30-35 minutes or until golden brown. Cool before slicing.'
    ],
    nutritionalFacts: {
      Calories: '180 kcal',
      Protein: '4 g',
      Carbohydrates: '33 g',
      Fat: '4 g',
      Fiber: '1 g',
      Sugar: '10 g'
    }
  },
  {
    title: 'Carrot Cake',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2017/09/Carrot-Cake_EXPS_FBMZ16_115_B05_18_3b.jpg?fit=700,700',
    reviews: 340,
    rating: 4.8,
    recipe: 'Classic Carrot Cake',
    ingredients: [
      '2 cups all-purpose flour',
      '2 cups sugar',
      '1 teaspoon baking powder',
      '1 teaspoon baking soda',
      '1 teaspoon salt',
      '1 teaspoon ground cinnamon',
      '4 large eggs',
      '1 1/2 cups vegetable oil',
      '2 cups grated carrots',
      '1/2 cup chopped walnuts'
    ],
    directions: [
      'Preheat oven to 350°F (175°C).',
      'In a large bowl, combine flour, sugar, baking powder, baking soda, salt, and cinnamon.',
      'Add eggs and oil; beat until well combined.',
      'Stir in carrots and walnuts.',
      'Pour into a greased and floured 9x13 inch pan.',
      'Bake for 35-40 minutes or until a toothpick inserted into the center comes out clean.',
      'Cool in the pan for 10 minutes, then turn out onto a wire rack to cool completely.',
      'Frost with cream cheese frosting if desired.'
    ],
    nutritionalFacts: {
      Calories: '450 kcal',
      Protein: '5 g',
      Carbohydrates: '50 g',
      Fat: '25 g',
      Fiber: '2 g',
      Sugar: '30 g'
    }
  }
];

const RecipesPage = () => {
  const [showAll, setShowAll] = useState(false);
  const navigate=useNavigate();

  // Decide which recipes to display based on the state
  const displayedRecipes = showAll ? topRecipes : topRecipes.slice(0, 9);

  const handleToggleRecipes = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  const handleRecipes=(recipe)=>{
    localStorage.setItem('recipes',JSON.stringify(recipe))
    navigate('/recipes')
  }

  return (
    <>
      {/* Header Section (outside of Container) */}
      <Box sx={{ backgroundColor: '#6b2e4f', padding: 10, color: '#fff', mb: 5, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 3 }}>
          Recipes
        </Typography>
        <Typography variant="h6">
          Out of all the many recipes on Pinch of Yum, these are our shining stars - the recipes we come back to again and again (and again).
        </Typography>
      </Box>

      {/* Main Content in Container */}
      <Container maxWidth="lg" sx={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <Box sx={{ textAlign: 'center', padding: '2px', overflow: 'hidden' }}>
          {/* Top Rated Recipes Section */}
          <Box sx={{ marginTop: 3, paddingLeft: 2, paddingRight: 2 }}>
            <Typography variant="h5" component="h2" sx={{ mb: 5, fontWeight: 'bold' }}>
              TOP RATED RECIPES
            </Typography>
            <Grid container spacing={3}>
              {displayedRecipes.map((recipe, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card  onClick={()=>handleRecipes(recipe)}>
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
              onClick={handleToggleRecipes}
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

        <RecipesCookies />

      <RecipeCake />

      <RecipeBread /> 
      <RecipeOther/>

      </Container>
      <Footer/>
    </>
  );
};

export default RecipesPage;
