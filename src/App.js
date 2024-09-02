import logo from './logo.svg';
import './App.css';
import Nav from './Component/Nav';
import { Navigate, Outlet, Route, Router, Routes, useNavigate } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Recipes from './Component/Recipes';
import Start from './Component/Start';
import Login from './Component/Login';
import { Signup } from './Component/Signup';
import { Demogrid } from './Component/Grid';
import { Password } from '@mui/icons-material';
import Layout from './Component/Layout';
import { useEffect, useState } from 'react';
import BlogLayout from './Component/BlogLayout';
import HomeLayout from './Component/HomeLayout';
import AboutSection from './Component/HomeLayout';

import CookbookPromo from './Component/CookbookPromo';
import Footer from './Component/Footer';
import PrivateRoute from './Component/PrivateRoute'
import Spicecookies from './Component/Spicecookies';
import RecipesPage from './Component/RecipesPage';
import PostDetail from './Component/PostDetail';
import RecipesCookies from './Component/RecipesCookies';
import RecipeCake from './Component/RecipeCake';
import RecipeBread from './Component/RecipeBread';
import RecipeOther from './Component/RecipeOthers';





function App() {

  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();
  console.log('auth app',auth)

  useEffect(() => {
    const storedAuth = localStorage.getItem('Auth') === 'true';
    setAuth(storedAuth);
  }, [navigate]);

  useEffect(() => {
    if (auth) {
      navigate('/home');
    }
  }, [auth]);
   

  return (
    <>
    {/* <Login/> */}
   
    {/* <Demogrid/> */}
    {/* <Layout/> */}
    {/* <BlogLayout/> */}
    {/* <AboutSection/> */}
    {/* <CookbookPromo/> */}
    {/* <Footer/> */}
  {auth && <Nav/>}
    <Routes> 
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>

    <Route path='/home' element={<PrivateRoute element={Home} />} />
    <Route path='/about' element={<PrivateRoute element={About} />} />
    <Route path='/recipes' element={<PrivateRoute element={Recipes} />} />
    <Route path='/start' element={<PrivateRoute element={Start} />} />
    <Route path='/recipeMenu' element={<PrivateRoute element={RecipesPage} />} />

    <Route path="/post/:id" element={<PostDetail />} />


    <Route path='/Recipecookies' element={<RecipesCookies/>}/>
    <Route path='/Recipecake' element={<RecipeCake/>}/>
    <Route path='/Recipebread' element={<RecipeBread/>}/>
    <Route path='/RecipeOther' element={<RecipeOther/>}/>
    
   <Route path='/' element={<Navigate to={auth ? '/home' : '/login'} />} />
    
    
   

    </Routes>  
    </>
 
   

  );
}

export default App;
