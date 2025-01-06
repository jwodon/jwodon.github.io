import React from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';
import './index.css';


const App = () => (
  <div>
    <Navbar />
    <Home />
    <About />
    <Portfolio />
    <Contact />
  </div>
);

export default App;
