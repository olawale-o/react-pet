import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/User/Home';
import Auth from './pages/User/Index';
import Profile from './pages/Profile';
import NewPet from './pages/Pet/New';
import { PublicRoute, PrivateRoute } from './components/routes';
import { Navbar } from './components';
import MyPets from './pages/Pet/All';
import Pet from './pages/Pet';
import Photos from './pages/Pet/Photos';
import PetDetail from './pages/Pet/Detail';
import AuthContext from './context/AuthContext';
import authSelector from './redux/auth/auth_selector';

const App = () => {
  const { user } = useSelector(authSelector);
  return (
    <div className="App">
      <AuthContext.Provider value={{
        user,
      }}
      >
        <Navbar />
        <Routes>
          <Route path="/session" element={(<PublicRoute><Auth /></PublicRoute>)} />
          <Route path="/">
            <Route index path="" element={(<PrivateRoute><Home /></PrivateRoute>)} />
            <Route path="listings" element={(<PrivateRoute><Home /></PrivateRoute>)} />
            <Route path="listings/:petId" element={(<PrivateRoute><PetDetail /></PrivateRoute>)} />
            <Route path=":userId" element={(<PrivateRoute><Profile /></PrivateRoute>)}>
              <Route path="pets/:petId" element={(<PrivateRoute><Pet /></PrivateRoute>)}>
                <Route path="photos" element={(<PrivateRoute><Photos /></PrivateRoute>)} />
              </Route>
              <Route index path="" element={(<PrivateRoute><Navigate to="pets" /></PrivateRoute>)} />
              <Route path="pets" element={(<PrivateRoute><Pet /></PrivateRoute>)}>
                <Route index path="" element={(<PrivateRoute><MyPets /></PrivateRoute>)} />
                <Route path="new" element={(<PrivateRoute><NewPet /></PrivateRoute>)} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </AuthContext.Provider>
    </div>
  );
};

export default App;
