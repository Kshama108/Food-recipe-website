import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';

// Dummy Data for Posts (this should be fetched from an API or context in a real app)
const posts = [
    {
        id: 1,
        date: 'JULY 29, 2024',
        title: 'How You Should Be Doing Oat Bran for Breakfast',
        description: 'High protein, high fiber – I love this oat bran for breakfast! Creamy and soothing + quick and easy to make!',
        image: 'https://www.inspiredtaste.net/wp-content/uploads/2022/04/Steelcut-Oats-Recipe-1200.jpg',
        fullContent: `Oat bran is a highly nutritious part of the oat grain, offering a wealth of benefits when incorporated into your daily diet. Unlike rolled oats or instant oats, oat bran contains higher amounts of fiber, which helps in digestion and keeps you full longer. A bowl of oat bran cooked with milk or water can be a perfect way to start your day, especially when topped with fruits, nuts, or seeds. The creamy texture, combined with the soothing warmth of the dish, makes it both a comfort food and a health booster. It is quick to prepare and can be enhanced with natural sweeteners like honey or maple syrup. Plus, its rich fiber content helps regulate cholesterol levels and supports heart health.`,
        linkText: 'CONTINUE READING'
      },
      {
        id: 2,
        date: 'JULY 16, 2024',
        title: 'Healthy Protein Rich Sandwich',
        description: 'From crunchy cucumber sandwiches, tuna salad sandwiches, and a healthy twist on a BLT.',
        image: 'https://media.30seconds.com/tip/lg/How-to-Make-a-Satisfying-Superfoods-Sandwich-Its-Vegetaria-12849-e612e5a931-1482329503.jpg',
        fullContent: `Protein-rich sandwiches are a great way to fuel your body, especially when made with healthy, nutrient-dense ingredients. You can start with whole-grain or sprouted bread to add extra fiber and nutrients. Then, pile on lean protein sources like grilled chicken, turkey, or plant-based options such as chickpea or lentil patties. Vegetables like lettuce, tomatoes, and cucumbers add a refreshing crunch and are packed with vitamins and antioxidants. For a creamy texture without the guilt, try avocado or hummus spreads. These sandwiches are easy to make, customizable to your taste preferences, and provide a balanced meal option for any time of the day.`,
        linkText: 'CONTINUE READING'
      },
      {
        id: 3,
        date: 'JULY 16, 2024',
        title: 'Gorgeous Tarts',
        description: 'Sour straight out of the garden but add sugar, and it’s merely tart.',
        image: 'https://i.pinimg.com/736x/04/1d/cb/041dcb801a04110e9ebff6ac65339234.jpg',
        fullContent: `Tarts are a delicious and visually appealing dessert that can be customized in numerous ways to suit any taste. Whether you prefer fruit-based tarts like apple, berry, or lemon, or creamy ones filled with chocolate ganache or custard, tarts offer something for everyone. The beauty of making tarts lies in their versatility; they can be sweet or savory and can be served as an elegant dessert at dinner parties or a simple treat for afternoon tea. The flaky, buttery crust perfectly complements the filling, creating a delightful contrast of textures. By experimenting with different fillings, toppings, and crusts, you can create a tart that is truly your own masterpiece.`,
        linkText: 'CONTINUE READING'
      }
  // ... other posts
];

const PostDetail = () => {
  const { id } = useParams(); // Get post ID from URL
  const post = posts.find((p) => p.id === parseInt(id)); // Find the post by ID

  if (!post) return <Typography variant="h6">Post not found!</Typography>;

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
          {post.title}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: '#a94442', mb: 2 }}>
          {post.date}
        </Typography>
        <img
          src={post.image}
          alt={post.title}
          style={{
            width: '500px',
            height: '300px',
            objectFit: 'cover',
            borderRadius: '8px',
            marginBottom: '20px',
            display: 'block',    // Makes the image a block element
            margin: '0 auto'     // Centers the image horizontally

            
           
          }}
        />
        <Typography variant="body1" sx={{ mb: 4, mt:6}}>
          {post.fullContent}
        </Typography>
      </Box>
    </Container>
  );
};

export default PostDetail;
