import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Research from './pages/Research';
import Outreach from './pages/Outreach';
import Awards from './pages/Awards';

export default function App() {
  return (
     <div className="animate-gradient min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/outreach" element={<Outreach />} />
        <Route path="/awards" element={<Awards />} />
      </Routes>
    </div>
  );
}