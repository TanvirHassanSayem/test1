import React from 'react';

const Navbar = ({ coins }) => (
  <nav className="navbar w-10/12 mx-auto m-2">
  <div className="navbar-start">
    <div>
    <img src="logo.png" alt="logo" />
    </div>
   </div>
  <div class="navbar-end">
    <div>
    <ul className="p-2 flex gap-8 items-center">
            <li className='font-bold'><a>Home</a></li>
            <li className='font-bold'><a>Fixtures</a></li>
            <li className='font-bold'><a>Teams</a></li>
            <li className='font-bold'><a>Shedules</a></li>

            <button  className="coins flex items-center justify-center
             px-4 py-2 border border-gray-300 rounded-full bg-white 
             text-gray-800 text-lg font-bold 
             shadow-sm"> {coins}  Coin  
              <img src="coin.webp" alt="" class="ml-2" className='w-6 h-6 pl-1 rounded-full'></img></button> 
          </ul>
    </div>
  </div>
  </nav>
);
export default Navbar;