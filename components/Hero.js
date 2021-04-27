import React from 'react';
import Image from 'next/image';
import PageMarker from './PageMarker';
import Button from './Button';

const Hero = () => {
  return (
    <section className="flex justify-between py-20 px-4 md:px-20 flex-col md:flex-row md:gap-12">
      {/* left */}
      <div className="md:w-1/2 font-mono ">
        <PageMarker pageName="Hello World" />
        <h2 className="leading-normal pb-2 text-4xl font-semibold  mb-6"> <span className="text-blue-700 bg-yellow-500 rounded px-2 text-center">RayFlash.</span> | Learner.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aut
          possimus iusto expedita accusantium non quis magnam magni repudiandae,
          minima quasi obcaecati maiores quidem provident nihil debitis animi
          necessitatibus! Aut error molestias, dignissimos ipsam iste qui odit
          numquam atque! Laborum.
        </p>

        <Button buttonFor="About" />
      </div>

      {/* right */}
      <div className="md:w-1/2  flex items-center justify-center ">
        <Image
          src="/banner1.png"
          width={500}
          height={500}
          alt="Picture of the author"
          className="w-full rounded shadow-2xl"
        />
      </div>
    </section>
  );
};

export default Hero;
