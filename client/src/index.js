import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/HomeScreen/Home'
import SignUp from './components/SignUpScreen/SignUp';
import SignIn from './components/SignInScreen/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/ProfileScreen/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

