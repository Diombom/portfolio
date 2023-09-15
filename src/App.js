import React from 'react';

import { About, Contact, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import './App.scss';
import './index.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Contact />
    </div>
  )
}

export default App