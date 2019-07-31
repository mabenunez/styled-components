import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Hero from './Hero/Hero';
import './Hero/Hero.css';
import Checklist from './Checklist/Checklist';
import Footer from './Footer/Footer'

function App() {
  
  return (
    <div className="App">
      <Hero />
      <Checklist />
      <Footer />
    </div>
  );
}

export default App;
