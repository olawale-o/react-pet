import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/User/Home';
import Auth from './pages/User/Index';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </div>
);

export default App;
