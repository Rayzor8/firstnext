import React from 'react';
import Link from 'next/link';

const Button = ({ buttonFor }) => {
  return (
    <Link href="/about">
      <a className=" shadow-xl inline-block py-3 px-6 text-lg font-bold rounded my-16 transition duration-300 bg-blue-700 tracking-wide hover:bg-blue-600">
        {buttonFor}
      </a>
    </Link>
  );
};

export default Button;
