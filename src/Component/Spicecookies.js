import { Box, Card, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const Spicecookies = () => {
  return (
    <div>
       <Container maxWidth="lg" sx={{ textAlign: 'center', padding: '2px', overflow: 'hidden' }}>
      {/* Top Rated Recipes Section */}
      <Box sx={{ marginTop: 3, paddingLeft: 2, paddingRight: 2 }}>
      <Typography variant="h5" component="h2" sx={{ mb: 5, fontWeight: 'bold' }}>
          Special spice cookies
        </Typography>
      <img 
            src="https://www.tasteofhome.com/wp-content/uploads/2018/01/exps336_CK133085D06_07_4bC_RMS-7.jpg?fit=700,700" 
            alt="spice cookie" 
            style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', height:'400px' }} 
          />
        <Grid container spacing={1}>
          
            <Grid xs={12} sm={6} md={12}>
              <Card>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
          Ingredients 
          </Typography>
          <Typography>
          1 cup butter, softened
          1-1/2 cups sugar
          1 large egg
          2 tablespoons light corn syrup
          2 tablespoons grated orange zest
          1 tablespoon cold water
          3-1/4 cups all-purpose flour
          2 teaspoons baking soda
          2 teaspoons ground cinnamon
          1 teaspoon ground ginger
          1/2 teaspoon ground cloves
           Optional: Red Hots, nonpareils and/or sprinkles

          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
          Directions
          </Typography>
          <Typography>
        1.  Cream butter and sugar until light and fluffy, 5-7 minutes. Beat in egg, corn syrup, orange zest and cold water. 
        In another bowl, whisk together flour, baking soda, cinnamon, ginger and cloves; gradually beat into creamed mixture.
         Divide dough in half. Shape each into a disk. Cover and refrigerate at least 1 hour or until firm enough to roll.
             Advertisement

        2.Preheat oven to 375°. On a lightly floured surface, roll each portion of dough to 1/8-in. 
        thickness. Cut into desired shapes with a cookie cutter. Place 1 in. apart on greased baking sheets. 
        Decorate as desired. Bake until lightly browned, 6-8 minutes. Remove from pans to wire racks to cool.
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
          Nutrition Facts
          </Typography>
          <Typography>
          1 cookie: 188 calories, 8g fat (5g saturated fat), 28mg cholesterol, 170mg sodium, 27g carbohydrate (14g sugars, 1g fiber), 2g protein.
          </Typography>
          
                
              </Card>
            </Grid>
        
        </Grid>

        
      </Box>
    </Container>
  
    </div>
  )
}

export default Spicecookies