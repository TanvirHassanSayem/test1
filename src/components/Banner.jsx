import React from 'react';
import { toast } from 'react-toastify';

const Banner = ({ onAddCoins }) => {

  const handleAddCoins = () => {
    onAddCoins();
    toast.success("Credit added to your account successfully!", {
      autoClose: 1000,
      position: "top-center",  
    });
  };

  return (
    <div className="banner mb-10 w-10/12 mx-auto p-10">
      <div
        className="text-center bg-black p-10 rounded-lg shadow-lg"
        style={{
          backgroundImage: 'url(bg-shadow.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex justify-center mb-4">
          <img src="banner-main.png" alt="Cricket Logo" className="" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-white mb-6">Beyond Boundaries Beyond Limits</p>
        <button
          onClick={handleAddCoins}
          style={{ backgroundColor: '#E7FE29', borderRadius: '8px', textDecorationColor: 'black' }}
          className="btn btn-accent"
        >
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
