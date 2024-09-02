import React from 'react'
import Layout from './Layout';
import BlogLayout from './BlogLayout';
import HomeLayout from './HomeLayout'
import Footer from './Footer';


const Home = () => {
  return (
    <div>
      <Layout/>
      <BlogLayout/>
      <HomeLayout/>
      <Footer/>
    </div>
  )
}

export default Home;