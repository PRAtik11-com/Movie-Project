import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllMovies = () => {
  const [moviesdata, setMoviesData] = useState([]);
  const localStoragedata = JSON.parse(sessionStorage.getItem("Userlogin"));

  const getMovies = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_Base_URL}/movies`,{
        withCredentials:true
      });
      setMoviesData(res.data.movies);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_Base_URL}/movies/deletemovies/${id}`,{
        withCredentials:true
      });
      getMovies(); // Refresh list after delete
    } catch (error) {
      console.error('Error deleting movie:', error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="min-h-screen px-4 py-8 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
   
    <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">All Movies</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {moviesdata.length > 0 ? (
          moviesdata.map((movie, index) => (
            <div
              key={index}
              className="bg-zinc-600 text-white rounded-xl overflow-hidden shadow-lg transform transition hover:scale-105 hover:shadow-2xl duration-300"
            >
              <div className="w-full h-[250px] overflow-hidden flex items-center justify-center bg-black">
                <img
                  src={movie.Image}
                  alt={movie.Title}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold mb-1">{movie.Title}</h2>
                <p className="text-sm text-gray-300">{movie.Genre}</p>
                <p className="text-sm text-gray-300">{movie.Director}</p>
                <p className="text-sm text-gray-400">{movie.ReleaseYear}</p>
                <p className="text-sm mt-2 text-gray-300">{movie.Description}</p>

                {localStoragedata?.role === "Admin" && (
                  <div className="flex gap-3 justify-center mt-4">
                    <Link
                      to={`/Updatemovies/${movie._id}`}
                      state={{
                        Title: movie.Title,
                        Genre: movie.Genre,
                        Director: movie.Director,
                        Image: movie.Image,
                        ReleaseYear: movie.ReleaseYear,
                        Description: movie.Description
                      }}
                      className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600 transition duration-200"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(movie._id)}
                      className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700 transition duration-200"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-white text-center col-span-full text-lg">No Movies Found!</p>
        )}
      </div>
   
    </div>
  );
};

export default AllMovies;

