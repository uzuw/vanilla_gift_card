import React, { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import loginImage from "../../assets/signin.svg";
import registerImage from "../../assets/signup.svg";

const SlidingLoginSignup = ({ initialMode = "signin" }) => {
  const [isSignUpMode, setIsSignUpMode] = useState(initialMode === "signup");


  const toggleSignUpMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  const buttonClasses =
    "w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center transition-all duration-200 transform hover:scale-[1.02] hover:shadow-md";

  const buttonForGFT =
    "inline-flex w-full justify-center items-center rounded-lg border border-gray-300 bg-white py-2.5 px-4 text-sm font-medium text-gray-500 hover:bg-gray-50 shadow-sm transition-all duration-200 hover:shadow hover:border-gray-400";

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden flex items-center justify-center">
      {/* Animated Background Circle */}
      <div
        className={`absolute rounded-full bg-blue-500 w-[1500px] h-[1500px] lg:w-[2000px] lg:h-[2000px] z-[1]
          transition-all duration-[1800ms] ease-in-out
          ${isSignUpMode ? "translate-x-full right-[52%]" : "right-[48%]"}
          top-[50%] -translate-y-1/2 -translate-x-1/2`}
      ></div>

      {/* Auth Forms Section */}
      <div className="relative z-[5] w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 px-6 py-20">
        {/* Left - Sign In Form */}
        <div
          className={`flex flex-col items-center justify-center px-6 transition-all duration-700 ease-in-out
            ${isSignUpMode ? "opacity-0 pointer-events-none translate-x-[-50px]" : "opacity-100"}`}
        >
          <img src={loginImage} alt="login" className="w-40 mb-4 hidden md:block" />
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Welcome Back!</h2>
          <SignInForm buttonClasses={buttonClasses} buttonForGFT={buttonForGFT} />
          <button
            onClick={toggleSignUpMode}
            className="mt-6 text-sm text-blue-600 hover:underline"
          >
            Don't have an account? Sign up
          </button>
        </div>

        {/* Right - Sign Up Form */}
        <div
          className={`flex flex-col items-center justify-center px-6 transition-all duration-700 ease-in-out
            ${isSignUpMode ? "opacity-100" : "opacity-0 pointer-events-none translate-x-[50px]"}`}
        >
          <img src={registerImage} alt="register" className="w-40 mb-4 hidden md:block" />
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Join RedeemHub</h2>
          <SignUpForm buttonClasses={buttonClasses} buttonForGFT={buttonForGFT} />
          <button
            onClick={toggleSignUpMode}
            className="mt-6 text-sm text-gray-200 hover:underline"
          >
            Already have an account?  <span className="text-white">Sign in</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlidingLoginSignup;
