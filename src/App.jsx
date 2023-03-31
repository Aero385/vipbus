import React from 'react';
import { About, Footer, Gallery, Home, Service } from './pages';
import './App.scss';
import Navbar from './components/Navbar/Navbar';

const App = () => {

  return (
    <div className="app">
      <Navbar/>
      <Home/>
      <About/>
      <Service/>
      <Gallery/>
      <Footer/>
    </div>
  )
}

export default App
