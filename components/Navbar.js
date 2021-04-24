import React, { useEffect, useState } from 'react';
import { MenuAlt1Icon } from '@heroicons/react/solid';

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);



  return (
    <div>
      <nav className="bg-blue-700 shadow-xl h-14  text-white flex items-center justify-around font-mono">
        <div className="logo flex items-center justify-between w-full md:w-min px-4">
          <h1 className="text-3xl font-bold tracking-wider text-yellow-400">
            RayFlash.
          </h1>
          <button  className="md:hidden bg-yellow-400 text-blue-700 rounded" onClick={()=> setMenuToggle(!menuToggle)}>
            <MenuAlt1Icon className="w-6 h-6" />
          </button>
        </div>
        <div className=" hidden md:flex  md:w-2/12 md:justify-center md:gap-8">
          <a href="" className="md:text-lg tracking-wider font-bold hover:text-yellow-400 transition duration-300">
            Home
          </a>
          <a href="" className="md:text-lg tracking-wider font-bold hover:text-yellow-400 transition duration-300">
            About
          </a>
          <a href="" className="md:text-lg tracking-wider font-bold hover:text-yellow-400 transition duration-300">
            List
          </a>
        </div>
      </nav>

      {menuToggle && (
        <div className="flex py-2 px-8 flex-col text-center md:hidden bg-blue-700 shadow-lg h-36  text-white font-mono">
          <a href="" className="md:text-lg tracking-widest  hover:text-blue-700 rounded py-1 px-4 text-lg font-bold hover:bg-yellow-400 transition duration-300">
            Home
          </a>
          <a href="" className="md:text-lg tracking-widest  hover:text-blue-700 rounded py-1 px-4 text-lg font-bold hover:bg-yellow-400 transition duration-300">
            About
          </a>
          <a href="" className="md:text-lg tracking-widerst hover:text-blue-700 rounded  py-1 px-4 text-lg font-bold hover:bg-yellow-400 transition duration-300">
            List
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
