import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddMovies = () => {
  const [Title, setTitle] = useState("");
  const [Genre, setGenre] = useState("");
  const [Director, setDirector] = useState("");
  const [ReleaseYear, setReleaseYear] = useState("");
  const [Description, setDescription] = useState("");
  const [Image, setImage] = useState("");

  const navigate = useNavigate();

  const addmoviesdata = (e) => {
    e.preventDefault();
    axios
      .post(
        `${import.meta.env.VITE_Base_URL}/movies/createmovies`,
        { Title, Genre, Director, ReleaseYear, Description, Image },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        navigate("/Allmovies");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-4">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-xl animate-fade-in-up transition-all duration-500">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-3">
          🎬 Add Movie
        </h1>
        <p className="text-center text-gray-500 mb-6">Fill in the movie details</p>
        <form onSubmit={addmoviesdata} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Movie Title"
              required
              className="w-full p-3 rounded-md border focus:ring-indigo-400 focus:outline-none transition-all placeholder-gray-400"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="text"
              value={Image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="https://example.com/image.jpg"
              required
              className="w-full p-3 rounded-md border focus:ring-indigo-400 focus:outline-none transition-all placeholder-gray-400"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Genre</label>
            <input
              type="text"
              value={Genre}
              onChange={(e) => setGenre(e.target.value)}
              placeholder="Action, Drama..."
              required
              className="w-full p-3 rounded-md border focus:ring-indigo-400 focus:outline-none transition-all placeholder-gray-400"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Director</label>
            <input
              type="text"
              value={Director}
              onChange={(e) => setDirector(e.target.value)}
              placeholder="Director Name"
              required
              className="w-full p-3 rounded-md border focus:ring-indigo-400 focus:outline-none transition-all placeholder-gray-400"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Release Year</label>
            <input
              type="number"
              value={ReleaseYear}
              onChange={(e) => setReleaseYear(e.target.value)}
              placeholder="2024"
              required
              className="w-full p-3 rounded-md border focus:ring-indigo-400 focus:outline-none transition-all placeholder-gray-400"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Short description about the movie"
              required
              className="w-full p-3 rounded-md border min-h-[80px] focus:ring-indigo-400 focus:outline-none transition-all placeholder-gray-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-md font-medium transition duration-300"
          >
            Add Movie
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMovies;
