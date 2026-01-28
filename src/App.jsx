import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Research from './pages/Research';
import Outreach from './pages/Outreach';
import Awards from './pages/Awards';
import BiRHPage from "/research/birh.tsx";
import PGAPage from "/research/pga.tsx";
import ELLAPage from "/research/ella.tsx";


export default function App() {
  return (
     <div className="animate-gradient">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/outreach" element={<Outreach />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/research/birh" element={<BiRHPage />} />
        <Route path="/research/pga" element={<PGAPage />} />
        <Route path="/research/ella" element={<ELLAPage />} />
      </Routes>
    </div>
  );
}