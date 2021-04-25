import React from 'react';
import Link from 'next/link';

const Mobilenav = () => {
  return (
    <div className="flex py-2 px-8 flex-col text-center md:hidden bg-blue-700 shadow-lg h-36  text-white font-mono">
      <Link href="/">
        <a className="md:text-lg tracking-widest  hover:text-blue-700 rounded py-1 px-4 text-lg font-bold hover:bg-yellow-400 transition duration-300">
          Home
        </a>
      </Link>

      <Link href="/about">
        <a className="md:text-lg tracking-widest  hover:text-blue-700 rounded py-1 px-4 text-lg font-bold hover:bg-yellow-400 transition duration-300">
          About
        </a>
      </Link>

      <Link href="/rayflash">
        <a className="md:text-lg tracking-widerst hover:text-blue-700 rounded  py-1 px-4 text-lg font-bold hover:bg-yellow-400 transition duration-300">
          List
        </a>
      </Link>
    </div>
  );
};

export default Mobilenav;
