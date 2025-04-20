import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Username, setUsername] = useState('');

  let navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault();
    axios.post(`${import.meta.env.VITE_Base_URL}/user/signup`,{
        Username,Email,Password
       }).then((res)=>{
        console.log(res.data.message);
       navigate("/login");
       }).catch((err)=>{
        console.log(err.response.data.message)
       })
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-4">
    <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg animate-fade-in-up">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Create an Account</h2>
      <form onSubmit={handleRegister} className="space-y-5">
        <input
          type="text"
          name="Username"
          value={Username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="Email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          name="Password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Register
        </button>
      </form>
    </div>
  </div>
  );
};

export default Signup;
