import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/User/Home';
import Auth from './pages/User/Index';
import { PublicRoute } from './components/routes';
import { Navbar } from './components';

const App = () => (
  <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/">
        <Route index path="/" element={(<PublicRoute><Navigate to="listings" /></PublicRoute>)} />
        <Route path="listings" element={(<PublicRoute><Home /></PublicRoute>)} />
      </Route>
    </Routes>
  </div>
);

export default App;
