import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './primaryComponents/navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';
import FeedBackForm from './pages/feedbackPage';
import "./index.css"

const App = () => {

  

  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/feedback' element={<FeedBackForm />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
