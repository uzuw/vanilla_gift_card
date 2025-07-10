// src/Pages/SlidingAuthPage.jsx
import React from "react";
import SlidingLoginSignup from "../components/Auth/SlidingLoginSignup";
import NavBar from "../components/NavBar/NavBar";

const SlidingAuthPage = () => {
  return (
    <>
      <NavBar />
      <SlidingLoginSignup />
    </>
  );
};

export default SlidingAuthPage;
