import React from "react";
import NavBar from "../components/NavBar/NavBar";

const HomePage = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <NavBar />

      {/* Hero Section */}
      <section className="bg-gray-100 py-20 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to <span className="text-primary">RedeemHub</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Discover deals, redeem rewards, and enjoy exclusive perks tailored just for you.
        </p>
        <a
          href="/"
          className="bg-primary text-white font-semibold px-8 py-3 rounded-md hover:bg-opacity-90 transition duration-300"
        >
          Get Started
        </a>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-gray-100 p-6 rounded-lg shadow text-center hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">Fast & Reliable</h3>
            <p className="text-gray-600">
              RedeemHub ensures lightning-fast performance with secure redemptions.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow text-center hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">Personalized Offers</h3>
            <p className="text-gray-600">
              Get exclusive deals and perks based on your preferences and history.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow text-center hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">Trusted Platform</h3>
            <p className="text-gray-600">
              Join thousands of users who save more every day with RedeemHub.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} RedeemHub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
