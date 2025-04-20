import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Allroutes from './routes/Allroutes';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <Allroutes />
      </div>
    </Router>
  );
}

export default App;
