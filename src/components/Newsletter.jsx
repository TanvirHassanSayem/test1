import React from 'react';

const Newsletter = () => {
  return (
    <div
      className="newsletter-container bg-gradient-to-r from-blue-100 to-yellow-100 rounded-lg p-8 shadow-lg"
      style={{ backgroundImage: 'url(/bg-shadow.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <h2 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
      <p className="text-gray-600 mb-6">Get the latest updates and news right in your inbox!</p>
      <form className="flex">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-grow p-3 rounded-l-lg border border-gray-300"
        />
        <button
          type="submit"
          className="bg-yellow-500 text-white px-6 py-3 rounded-r-lg hover:bg-yellow-600 transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
