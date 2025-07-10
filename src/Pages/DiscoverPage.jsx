import React from "react";



const DiscoverPage = () => {
  return (
    <div className="bg-white text-gray-800">
      

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center px-6 bg-gradient-to-br from-cyan-400 to-blue-500 text-white">
        <h1 className="text-5xl font-bold mb-4">Discover More with RedeemHub</h1>
        <p className="text-lg text-center max-w-xl">
          Scroll through to learn what makes our platform powerful, secure, and rewarding.
        </p>
      </section>

      {/* Section 1 */}
      <section className="min-h-screen px-6 py-20 bg-white">
        <h2 className="text-3xl font-bold mb-4">Deals Tailored for You</h2>
        <p className="max-w-2xl text-gray-700">
          RedeemHub gives you access to personalized discounts and loyalty rewards based on your interests and shopping history.
        </p>
      </section>

      {/* Section 2 */}
      <section className="min-h-screen px-6 py-20 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">Seamless Redemption</h2>
        <p className="max-w-2xl text-gray-700">
          With our fast and secure system, you can claim offers and rewards in seconds, both online and in stores.
        </p>
      </section>

      {/* Section 3 */}
      <section className="min-h-screen px-6 py-20 bg-white">
        <h2 className="text-3xl font-bold mb-4">Trusted by Thousands</h2>
        <p className="max-w-2xl text-gray-700">
          Join a growing community that relies on RedeemHub for smart savings, exclusive promotions, and secure transactions.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} RedeemHub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DiscoverPage;
