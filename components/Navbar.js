import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-700 shadow-lg  border-b-4 border-yellow-500 text-white">
      <div className="logo">
        <h1 className="text-3xl font-bold tracking-wider font-mono">RayFlash.</h1>
      </div>
      <div>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">List</a>
      </div>
    </nav>
  );
};

export default Navbar;
