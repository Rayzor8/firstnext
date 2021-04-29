import React, { useEffect } from 'react';
import Button from '../components/Button';
import { useRouter } from 'next/router';
import Head from 'next/head';

const notFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>RayFlash | Error Page</title>
        <link rel="shortcut icon" href="/rayfavico.ico" />
        <meta name="keywords" content="rayflash" />
      </Head>
      <div className="min-h-screen flex justify-center items-center flex-col">
        <h1 className=" mb-6 text-2xl md:text-4xl font-bold">
          Ooops something Error!!
        </h1>
        <h2>
          Your page url{' '}
          <span className="text-red-600 font-extrabold"> Cannot be Found.</span>
        </h2>
        <Button buttonFor="/" />
      </div>
    </>
  );
};

export default notFoundPage;
