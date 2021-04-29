import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import ImageCard from '../../components/ImageCard';

export const getStaticProps = async () => {
  const res = await fetch(
    `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=travel` //travel
  );
  const data = await res.json();

  return {
    props: { photos: data.hits },
  };
};

// JSX
const index = ({ photos }) => {
  return (
    <>
      <Head>
        <title>RayFlash | Items</title>
        <link rel="shortcut icon" href="/rayfavico.ico" />
        <meta name="keywords" content="rayflash" />
      </Head>
      <section className="min-h-screen  py-4 px-4">
        <div className="text-center my-8 flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-2xl font-bold mb-2 border-b-2 border-blue-700 tracking-wide">
            Travel Gallery
          </h1>
          <p className="italic">
            Testing accessing the HTTP pipeline, request to Pixabay API.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {photos.map((data) => (
            // card
            <ImageCard key={data.id} data={data} />
          ))}
        </div>
      </section>
    </>
  );
};

export default index;
