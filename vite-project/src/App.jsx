import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import  Navbar from './Components/Navbar';
import AllRoutes from './/AllRoutes';
import './App.css';
import Bestsellers from './Pages/Bestsellers';
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
       
      
        <AllRoutes />
      </div>
    </Router>
  );
};

export default App;
