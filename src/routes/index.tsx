import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/landingPage';

export default function RouterMain() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<h1>Home</h1>} />
    </Routes>
  );
}
