
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  let navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    axios.post(`${import.meta.env.VITE_Base_URL}/user/signin`,{
        Email,Password
      },{
        withCredentials:true
      }).then((res)=>{
        console.log(res);
        navigate("/AllMovies")
        sessionStorage.setItem("Userlogin",JSON.stringify(res.data.user));
        let data=document.cookie;
        console.log(data);
      }).catch((err)=>{
        console.log(err);
        })
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-4">
    <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg animate-fade-in-up">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          Login
        </button>
      </form>
    </div>
    </div>
  );
};

export default Login;
