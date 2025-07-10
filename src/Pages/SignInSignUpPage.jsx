import React from "react";
import NavBar from "../components/NavBar/NavBar";
import SlidingLoginSignup from "../components/Auth/SlidingDonateRedeem";

const SignInSignUpPage = () => {
  return (
    <>
      <NavBar />
      <SlidingLoginSignup /> {/* Full sliding logic inside here */}
    </>
  );
};

export default SignInSignUpPage;
