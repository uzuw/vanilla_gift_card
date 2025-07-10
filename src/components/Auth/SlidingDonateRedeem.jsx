import React, { useState } from "react";

const SlidingDonateRedeem = () => {
  const [showRedeem, setShowRedeem] = useState(false);

  const toggleMode = () => setShowRedeem(!showRedeem);

  const buttonStyle =
    "w-full text-white bg-gray-900 hover:bg-black focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-3 text-center transition-all duration-200 transform hover:scale-105 hover:shadow-md";

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden flex items-center justify-center">
      {/* Animated Circle Background */}
      <div
        className={`absolute rounded-full bg-blue-400 w-[1500px] h-[1500px] lg:w-[2000px] lg:h-[2000px] z-[1]
          transition-all duration-[1800ms] ease-in-out
          ${showRedeem ? "translate-x-full right-[52%]" : "right-[48%]"}
          top-[50%] -translate-y-1/2 -translate-x-1/2`}
      ></div>

      {/* Main Content */}
      <div className="relative z-[5] w-full max-w-8xl grid grid-cols-1 lg:grid-cols-2 px-6 py-20 gap-12 ml-40">
        {/* Donate Panel */}
        <div
          className={`flex flex-col lg:flex-row items-center justify-center px-6 text-center lg:text-left transition-all duration-700 ease-in-out
            ${showRedeem ? "opacity-0 pointer-events-none translate-x-[-50px]" : "opacity-100"}`}
        >
          {/* Image on left */}
          <img
            src="/donate.png"
            alt="Donate"
            className="hidden lg:block w-72 h-auto mr-8"
          />
          {/* Text and button */}
          <div className="max-w-md">
            <h2 className="text-3xl font-extrabold text-blue-500 mb-4">Support RedeemHub ❤️</h2>
            <p className="text-gray-600 mb-6">
              If you love what we're building, your support helps us grow and stay online.
            </p>
            <button
              className={buttonStyle}
              onClick={() => alert("Redirecting to donation portal...")}
            >
              Donate Now
            </button>
            <button
              onClick={toggleMode}
              className="mt-6 text-sm text-gray-500"
            >
              Have a code? <span className="text-blue-400 hover:scale-105 hover:text-blue-600 transition duration-200">Redeem it</span>
            </button>
          </div>
        </div>

        {/* Redeem Panel */}
        <div
          className={`flex flex-col lg:flex-row items-center justify-center px-6 text-center lg:text-left transition-all duration-700 ease-in-out
            ${showRedeem ? "opacity-100" : "opacity-0 pointer-events-none translate-x-[50px]"}`}
        >
          {/* Text and input */}
          <div className="max-w-md">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Redeem Your Gift Code 🎁</h2>
            <p className="text-gray-600 mb-6">
              Enter your vanilla gift card code below and unlock your reward.
            </p>
            <input
              type="text"
              placeholder="Enter gift card code"
              className="w-full border border-gray-300 rounded-lg px-5 py-3 text-lg text-gray-900 placeholder-gray-400
              focus:outline-none focus:ring-4 focus:ring-gray-700 transition mb-4"
            />
            <button
              className={buttonStyle}
              onClick={() => alert("Redeem logic here")}
            >
              Redeem
            </button>
            <button
              onClick={toggleMode}
              className="mt-6 text-sm text-gray-500"
            >
              Go back to <span className="text-red-500 hover:scale-110">Donate</span>
            </button>
          </div>
          {/* Image on right */}
          <img
            src="/redeem.png"
            alt="Redeem"
            className="hidden lg:block w-72 h-auto ml-8"
          />
        </div>
      </div>
    </div>
  );
};

export default SlidingDonateRedeem;
