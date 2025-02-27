import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import List from './pages/list/List';
import New from './pages/new/New';
import Single from './pages/single/Single';
import Login from './pages/login/Login';


function App() {
  return (
   <div> <Router>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/list" element={<List />} />
      <Route path="/new" element={<New />} /> 
      <Route path="/single" element={<Single />} />
    </Routes>
  </Router>
  </div>
  
  );
}

export default App;
