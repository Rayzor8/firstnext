import React from 'react';

const Profile = () => {
  return (
    <>
      <h1 className=" text-3xl md:text-2xl font-bold mb-2 border-b-2 border-blue-700 my-4">
        About me
      </h1>

      <div className="grid gap-4 my-8">
        <h3 className="text-4xl font-semibold font-mono">
          RayFlash. | Learner.
        </h3>
        <p className="">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
          placeat repellat dolores provident adipisci culpa numquam, dignissimos
          laborum iure accusantium sed a repudiandae nulla delectus dolorem
          aliquid possimus at modi?
        </p>
        <p className="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          incidunt molestiae nemo tempore voluptatibus et deleniti possimus
          repellendus quidem labore illo error facilis vitae, perspiciatis
          consectetur sed. Vitae, corrupti perspiciatis?
        </p>
      </div>
    </>
  );
};

export default Profile;
