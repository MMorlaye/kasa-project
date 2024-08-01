import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../Pages/Home';
import About from '../../Pages/About';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;