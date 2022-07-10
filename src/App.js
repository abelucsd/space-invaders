import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Game from './components/pages/Game';
function App() {
  
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' />
          <Route path='/game' exact element={<Game/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
