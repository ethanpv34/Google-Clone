import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import './App.css';
import Search from './pages/Search';
import Images from './pages/Images';
import News from './pages/News';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/search" element={<Search/>} />
      <Route path="/images" element={<Images/>} />
      <Route path="/news" element={<News/>} />
    </Routes>
  );
};

export default App;
