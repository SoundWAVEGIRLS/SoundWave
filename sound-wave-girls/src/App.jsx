import React from 'react';
import { Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage';
import './App.css'
import DiscoverPage from './pages/DiscoverPage';
import JoinPage from './pages/JoinPage';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="contacto" element={<DiscoverPage />}/>
        <Route path='join' element={<JoinPage/>}/>
      </ Routes>
    </div>
 
 );
}

export default App;

