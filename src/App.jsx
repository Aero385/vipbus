import React from 'react';
import { About, Footer, Gallery, Home, Service, Form } from './pages';
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
      <Form/>
      <Footer/>
    </div>
  )
}

export default App
