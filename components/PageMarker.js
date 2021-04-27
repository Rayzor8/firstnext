import React from 'react';
import {
  HomeIcon
} from '@heroicons/react/solid';

const PageMarker = ({ pageName }) => {
  return (
    <div className="flex justify-center items-center mb-20 md:mb-40 bg-blue-700 p-4 border-2 border-yellow-500 shadow-lg rounded animate-bounce transition-all duration-200">
      <HomeIcon className="w-10 h-10 md:w-12 md:h-12 text-blue-700 bg-yellow-500 rounded-lg mr-4" />
      <h1 className="text-2xl md:text-4xl  font-semibold">{pageName}</h1>
    </div>
  );
};

export default PageMarker;
