import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Profile from '../components/Profile';

const dataProfile = [
  { id: 1, name: 'CSS', url: '/css.png' },
  { id: 2, name: 'Javascript', url: '/javascript.png' },
  { id: 3, name: 'Bootstrap', url: '/bstrap.jpg' },
  { id: 4, name: 'TailwindCSS', url: '/tailwind.png' },
  { id: 5, name: 'React JS', url: '/react.png' },
  { id: 6, name: 'Next JS', url: '/next.jpg' },
];

const about = () => {
  return (
    <>
      <Head>
        <title>RayFlash | About me</title>
        <link rel="shortcut icon" href="/rayfavico.ico" />
        <meta name="keywords" content="rayflash" />
      </Head>
      <section className=" text-yellow-400 px-8  md:px-20 flex flex-col justify-between items-center py-10 min-h-screen">
        <Profile />

        <div className="grid grid-cols-2 gap-2 md:grid-cols-6 md:gap-6">
          {dataProfile.map((list) => (
            <div key={list.id}>
              <Image
                src={`${list.url}`} //  /banner1.png"
                width={150}
                height={150}
                alt="skills"
                className="w-full rounded shadow-2xl bg-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default about;
