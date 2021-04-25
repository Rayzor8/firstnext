import React, { useState } from 'react';
import { MenuAlt1Icon } from '@heroicons/react/solid';
import Link from 'next/link';
import Mobilenav from './Mobilenav';
import {useRouter} from "next/router";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const router = useRouter()

  console.log(router.pathname == '/')
  
  return (
    <div>
      <nav className="bg-blue-700 shadow-xl h-14  text-white flex items-center justify-around font-mono">
        <div className="logo flex items-center justify-between w-full md:w-min px-4">
          <h1 className="text-3xl font-bold tracking-wider text-yellow-400">
            RayFlash.
          </h1>
          <button
            className="md:hidden bg-yellow-400 text-blue-700 rounded"
            onClick={() => setMenuToggle(!menuToggle)}
          >
            <MenuAlt1Icon className="w-6 h-6" />
          </button>
        </div>
        <div className=" hidden md:flex  md:w-2/12 md:justify-center md:gap-8 navsection">
          <Link href="/" className={router.pathname == '/' ? 'text-red-800' : ''}>
            <a className={router.pathname == '/' ? 'border-b-2 nav-style' : 'nav-style'} >
              Home
            </a>
          </Link>

          <Link href="/about">
            <a className={router.pathname == '/about' ? 'border-b-2 nav-style' : 'nav-style'}>
              About
            </a>
          </Link>

          <Link href="/rayflash">
            <a className={router.pathname == '/rayflash' ? 'border-b-2 nav-style' : 'nav-style'}>
              List
            </a>
          </Link>
        </div>
      </nav>

      {menuToggle && <Mobilenav />}
    </div>
  );
};

export default Navbar;
