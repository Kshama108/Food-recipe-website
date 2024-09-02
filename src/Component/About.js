import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Footer from './Footer'


const About = () => {
  return (
    <div>
      <Box sx={{ backgroundColor: '#d0c2cf', padding: '20px 0px'}}>
      <container>
      
      <Grid cointainer spacing={12}>
        <Grid item md={12} alignItems="center" textAlign='center' padding={5}>
        <img
                  src="https://png.pngtree.com/png-vector/20230418/ourmid/pngtree-cake-dessert-food-transparent-png-image_6709079.png"
                  alt="Preparing Ingredients"
                  style={{
                    width: '100px',
                    height:'100px',
                    borderRadius: '8px',
                    objectFit: 'cover',
                    alignItems:'center',
                    textAlign:'center'
                    
                  
                  }}
                />
                <Typography  variant="h5" >
                  WELCOME TO THE WEBSITE!
                </Typography>
                <Typography   >
                  Happy to see you, have a good time.
                </Typography>

        </Grid>
      </Grid>
      </container>
      </Box>
      <Box sx={{ backgroundColor: '#f9f9f9', padding: '20px 0' }}>
        <Container>
        <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
        <Card elevation={0} sx={{ backgroundColor: '#f5f5f5', padding: '30px' }}>
              <CardContent>
                <img
                  src="https://cdn.vox-cdn.com/thumbor/SlTFyEex1X-3ZgXoHKw4M-9YKOQ=/0x0:4272x2848/1200x900/filters:focal(1795x1083:2477x1765)/cdn.vox-cdn.com/uploads/chorus_image/image/70083573/A_selection_of_pastries_at_Sofra_Bakery.7.jpeg"
                  alt="Preparing Ingredients"
                  style={{
                    width: '380px',
                    height:'400px',
                    borderRadius: '8px',
                    objectFit: 'cover',
                    marginLeft:'40px'
                  
                  }}
                />
                </CardContent>
                </Card>

              
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                  OUR STORY 
       </Typography>
       <Typography variant="body1" sx={{ mb: 3 }}>
                 Our Team works Best to provide the best food and sweets of the city. We promise you to give both Quality and quantity.
                 We create desserts, cakes, and bakery products with love and passion and the quality found in your own kitchen.
                  Ninos grew to become another home and a became place where we don’t just employ people, we welcome them into our family.
                   We share and create memories through our cakes and products because all the happy moments happen with something sweet!
       </Typography>
        </Grid>
        </Grid>
        </Container>
      </Box>
      <Box sx={{ backgroundColor:'#d0c2cf', padding: '20px 0' }}>
        <container>
      <Grid item md={12}  padding={5}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1, textAlign:'center' }}>
        How It Started!
       </Typography >
       <Typography variant="body1" sx={{ padding:5}}>
       They grew up surrounded by the smell of sweet creations made from recipes created by her mother and grandmother.
        For young girl, the kitchen which was always filled with the scents of freshly baked cake, cocoa, sugar, and vanilla was her favorite place to be. Some of her favorite memories are in the kitchen baking with her mum or grandma and smothering her face in chocolate batter.
         Fast forward a couple of years, the mother-daughter duo we're baking for school bake sales and charity funds.
          When the revolution happened, baking was their go-to fundraiser to help those in need.</Typography>

          <Typography sx={{ ml:5, mb:3}}>Having witnessed her mother’s passion for baking and cooking firsthand.</Typography>

         <Typography sx={{ml:5, mb:5 }}> With the endless support of our family , they grew to open an official storefront and kitchen
       </Typography>
       <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1, textAlign:'center' ,mb:5}}>
       Our Values!
       </Typography >
       <Typography sx={{ ml:5, mb:3}} >
       Quality and design have been a part of Our mission from the very beginning. We are all about making great quality, beautiful and fun designs more accessible for all the beautiful moments our clients are celebrating. We also believe in maintaining the quality and integrity our families were raised on while being young, hip & cute. We see every client as a member of our own family, providing them with the best and helping them out whenever we can!
       </Typography>

          <Typography sx={{ ml:5, mb:3}}>
          We believe in the essence of our homemade kitchen, we never use artificial flavors or additives in our cakes! Everything is baked fresh and we use the very best natural ingredients available. Throughout the years we've worked hard to develop the best recipes, we love trying new recipes and techniques and there's really nothing we won't do in search of the perfect cake. To maintain our values and perfect our craft we prepare every addition to our cakes, including meringues, caramel, drips & croquant, from scratch every day. We also ensure that every cake is baked and decorated fresh to order.
          </Typography>

        
        </Grid>
      </container>
        </Box>
        
       <Footer/>

    </div>
  )
}

export default About