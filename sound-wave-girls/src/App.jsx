import React from 'react';
import { Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage';
import './App.css'
import DiscoverPage from './pages/DiscoverPage';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="contacto" element={<DiscoverPage />}/>
      < Routes />
    </div>
 
 );
}

export default App;

