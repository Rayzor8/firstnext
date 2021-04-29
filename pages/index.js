import Head from 'next/head';
// import Link from 'next/link';
import Hero from '../components/Hero';
// import { useState } from 'react'

export default function Home() {
  return (
    <>
      <Head>
        <title>RayFlash | Homepage</title>
        <link rel="shortcut icon" href="/rayfavico.ico" />
        <meta name="keywords" content="rayflash"/>
      </Head>
      <div>
        <Hero />
      </div>
    </>
  );
}
