// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import DiscoverPage from "./Pages/DiscoverPage";
import SlidingAuthPage from "./Pages/SlidingAuthPage"; // where SlidingLoginSignup is used

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/discover" element={<DiscoverPage />} />
      <Route path="/auth" element={<h1>Login section 👤</h1>} />
    </Routes>
  );
}

export default App;
