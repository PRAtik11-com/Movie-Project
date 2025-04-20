import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const localStoragedata = JSON.parse(sessionStorage.getItem("Userlogin"));
  let navigate=useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('Userlogin');
   navigate('/login');
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center gap-2 transition duration-300 hover:scale-105">
          🎬 MovieApp
        </Link>

        {/* Nav Items */}
        <div className="space-x-4 hidden md:flex">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium">
            Home
          </Link>
          <Link to="/AllMovies" className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium">
            All Movies
          </Link>
          {localStoragedata && localStoragedata.role === "Admin" && (
            <Link to="/Addmovies" className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium">
              Add Movie
            </Link>
          )}
          {!localStoragedata ? (
            <>
              <Link to="/login" className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium">
                Login
              </Link>
              <Link to="/Signup" className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium">
                Signup
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="text-red-600 hover:text-red-800 transition duration-300 font-medium"
            >
              Logout
            </button>
          )}
        </div>

      
      </div>
    </nav>
  );
};

export default Navbar;
