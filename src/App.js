import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/User/Home';
import Auth from './pages/User/Index';
import Profile from './pages/Profile';
import NewPet from './pages/Pet/New';
import { PublicRoute } from './components/routes';
import { Navbar } from './components';
import MyPets from './pages/Pet/All';
import Pet from './pages/Pet';

const App = () => (
  <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/">
        <Route index path="/" element={(<PublicRoute><Navigate to="listings" /></PublicRoute>)} />
        <Route path="listings" element={(<PublicRoute><Home /></PublicRoute>)} />
        <Route path="profile" element={(<PublicRoute><Profile /></PublicRoute>)}>
          <Route index path="" element={(<PublicRoute><Navigate to="pets" /></PublicRoute>)} />
          <Route path="pets" element={(<PublicRoute><Pet /></PublicRoute>)}>
            <Route index path="" element={(<PublicRoute><MyPets /></PublicRoute>)} />
            <Route path="new" element={(<PublicRoute><NewPet /></PublicRoute>)} />
          </Route>
        </Route>
      </Route>
    </Routes>
  </div>
);

export default App;
