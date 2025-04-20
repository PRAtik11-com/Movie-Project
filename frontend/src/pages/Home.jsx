// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center px-4">
      <div className="text-center animate-fade-in-up">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4 drop-shadow">
          🎬 Welcome to MovieApp
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Discover, add, and manage your favorite movies. All in one place.
        </p>
        <div className="space-x-4">
          <Link
            to="/movies"
            className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Browse Movies
          </Link>
          <Link
            to="/login"
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition duration-300 shadow-md"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
