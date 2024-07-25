import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import Home from './Pages/Home/home';
import About from './Pages/About/about';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App
