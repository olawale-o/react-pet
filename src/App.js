import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/User/Home';
import Auth from './pages/User/Index';
import Profile from './pages/Profile';
import NewPet from './pages/Pet/New';
import { PublicRoute, PrivateRoute } from './components/routes';
import { Navbar } from './components';
import MyPets from './pages/Pet/All';
import Pet from './pages/Pet';

const App = () => (
  <div className="App">
    <Navbar />
    <Routes>
      <Route path="/login" element={(<PublicRoute><Auth /></PublicRoute>)} />
      <Route path="/">
        <Route index path="/" element={(<PrivateRoute><Navigate to="listings" /></PrivateRoute>)} />
        <Route path="listings" element={(<PrivateRoute><Home /></PrivateRoute>)} />
        <Route path="profile" element={(<PrivateRoute><Profile /></PrivateRoute>)}>
          <Route index path="" element={(<PrivateRoute><Navigate to="pets" /></PrivateRoute>)} />
          <Route path="pets" element={(<PrivateRoute><Pet /></PrivateRoute>)}>
            <Route index path="" element={(<PrivateRoute><MyPets /></PrivateRoute>)} />
            <Route path="new" element={(<PrivateRoute><NewPet /></PrivateRoute>)} />
          </Route>
        </Route>
      </Route>
    </Routes>
  </div>
);

export default App;
