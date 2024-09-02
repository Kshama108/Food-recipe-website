import React, { useEffect, useState } from 'react';
import RecipesPage from './RecipesPage';
import RecipesCookies from './RecipesCookies';
import RecipeCake from './RecipeCake';
import RecipeBread from './RecipeBread';
import Footer from './Footer';
import { Box, Container } from '@mui/material';
import { useLocation } from 'react-router-dom';

const Recipes = () => {
  // Retrieve and parse data from local storage
  const handleRecipes = JSON.parse(localStorage.getItem('recipes'));
  const Location = useLocation();
  const [recipeData, SetRecipeData] = useState(handleRecipes);
  console.log('recipeData', recipeData);
  
  useEffect(() => {
    SetRecipeData(handleRecipes);
  }, [Location]);

  // If handleRecipes is null or undefined, provide a fallback
  if (!handleRecipes) {
    return <p>No recipe data available. Please select a recipe.</p>;
  }

  // Destructure the required fields from handleRecipes
  const { recipe, image, ingredients, directions, nutritionalFacts } = handleRecipes;

  return (
    <div>
      {/* Always visible components */}
      {/* <RecipesPage /> */}

      {/* Display recipe details directly */}
      <Container maxWidth="lg" sx={{ padding: '2px', overflow: 'hidden', mb: 5 }}>
        <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
          <h1 style={{ textAlign: 'center',fontWeight:'bold', marginBottom:15}}>{recipe}</h1>
          <Box
            className='image'
            component="img"
            src={image}
            alt={recipe}
            sx={{ 
              width: '100%', 
              maxWidth: '400px', 
              marginBottom: '20px', 
              borderRadius: '8px', 
              display: 'block',    // Makes the image a block element
              margin: '0 auto'     // Centers the image horizontally
            }}
          />

          <h3>Ingredients:</h3>
          <ul>
            {recipeData.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <h3>Directions:</h3>
          <ol>
            {directions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>

          <h3>Nutritional Facts:</h3>
          <ul>
            {Object.entries(nutritionalFacts).map(([key, value], index) => (
              <li key={index}>
                {key}: {value}
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Recipes;
