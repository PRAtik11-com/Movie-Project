// src/routes/Allroutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import AllMovies from '../pages/Allmovies';
import AddMovies from '../pages/Addmovies';
import Edit from '../pages/Edit';
// import Home from '../pages/Home';
// import MovieList from '../components/MovieList';
// import MovieForm from '../components/MovieForm';
// import MovieDetails from '../components/MovieDetails';
// import Login from '../pages/Login';
// import Register from '../pages/Register';



const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path='/AllMovies' element={<AllMovies />} />
      <Route path='/Addmovies' element={<AddMovies />} />
      <Route path="/Updatemovies/:id" element={<Edit />} />
    </Routes>
  );
};

export default Allroutes;
