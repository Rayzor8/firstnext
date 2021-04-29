import React from 'react';
import Image from 'next/image';

const firstLetter = (str) => {
    let words = str.split(' ').map((word) => {
      let firstLetter = word.slice(0, 1);
      let wordRest = word.slice(1);
      firstLetter = firstLetter.toUpperCase();
      return `${firstLetter}${wordRest}`;
    });
    return words.join(' ');
  };
  

const ImageCard = ({data}) => {
  return (
    <div
      className="relative bg-white text-blue-700  rounded-lg overflow-hidden shadow-md hover:bg-gray-300 cursor-pointer transition duration-300"
    >
      <img
        src={data.previewURL}
        alt="travel photos"
        className="w-full h-24 md:h-28 object-cover bg-center bg-cover"
      />


      <div className="text-sm tracking-wide m-4">
        <h5 className="italic mb-2">
          <span className="font-medium md:font-semibold not-italic">
            Tags :
          </span>{' '}
          {firstLetter(data.tags)}.
        </h5>
        <h5 className="italic">
          <span className="font-medium md:font-semibold not-italic">
            Likes :
          </span>{' '}
          {data.likes}
        </h5>
      </div>

      <div className="bg-blue-700 text-yellow-400 text-xs rounded-full px-2 py-1 absolute top-0 ml-2 mt-2 flex">
        <span>{data.views} Views</span>
      </div>
    </div>
  );
};

export default ImageCard;
