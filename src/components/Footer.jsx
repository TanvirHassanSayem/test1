import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
  const handleSubscribe = (event) => {
    event.preventDefault();
    toast.success("Subscribed successfully!",{
      position: "top-center",  
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-20 relative">
      <div className="container mx-auto relative z-10">
        {/* Newsletter Section */}
        <div className="newsletter-section bg-gradient-to-r from-blue-50 via-white to-yellow-50 p-8 rounded-lg shadow-lg text-center absolute -top-52 left-1/2 transform -translate-x-1/2 w-11/12 lg:w-1/2">
          <h4 className="text-2xl font-bold mb-2 text-black">Subscribe to our Newsletter</h4>
          <p className="text-gray-600 mb-4 text-black">
            Get the latest updates and news right in your inbox!
          </p>
          <form className="flex justify-center gap-4" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-l-lg border text-black border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none w-full max-w-md"
            />
            <button
              type="submit"
              className="px-6 py-3 text-lg font-bold text-black rounded-2xl bg-gradient-to-r from-pink-400 to-yellow-400 shadow-md"
            >
              Subscribe
            </button>
          </form>
        </div>
         


        <div className="flex justify-center items-center ">
  <img src="logo-footer.png" alt="logo" />
</div>
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">  
          {/* About Us Section */}
          <div>
            <h4 className="text-lg font-bold mb-4">About Us</h4>
            <p className="text-sm text-gray-400">
              We are a passionate team dedicated to providing the best services to our customers.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="list-disc list-inside text-gray-400">
              <li className="mb-2">
                <a href="#" className="hover:text-white transition">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white transition">Services</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white transition">About</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white transition">Contact</a>
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div>
            <h4 className="text-lg font-bold mb-4">Subscribe</h4>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="flex" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow p-3  rounded-l-lg text-black  border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-3 text-lg font-bold text-black rounded-r-2xl bg-gradient-to-r from-pink-400 to-yellow-400 shadow-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="text-center mt-8 text-sm text-gray-400">
          &copy; 2024 Your Company. All Rights Reserved.
        </div>
        <ToastContainer />
      </div>
    </footer>
  );
};

export default Footer;
