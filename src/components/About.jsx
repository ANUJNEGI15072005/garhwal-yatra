import React, { forwardRef } from 'react';

const About = forwardRef((props, ref) => {
  return (
    <div  className='p-5 ml-52 text-black 3xl:ml-80 2xl:ml-60 lg:ml-52 mobile:ml-4'>
      <div className="bg-slate-200 flex justify-center items-center w-full p-2 3xl:h-24 2xl:h-20 sm:h-14 mobile:h-12">
        <h1 ref={ref} className='text-5xl font-oswald 3xl:text-7xl 2xl:text-6xl mobile:text-4xl'>ABOUT</h1>
      </div>
      <div className='m-3'>
        <p className='font-nunito text-lg leading-snug text-justify 3xl:text-3xl 2xl:text-2xl xl:text-[18.5px] mobile:text-[16px]'>
          Garhwal Yatra is a personal project created by Anuj Negi using React and Tailwind CSS. The website is designed to guide visitors through the breathtaking landscapes and rich cultural heritage of the Garhwal region. Please note that the images and data used on this site are not owned by the creator and are used solely for informational purposes. The goal of Garhwal Yatra is to provide a virtual journey through the region's famous tourist spots, temples, and attractions, helping travelers plan their visits and explore the beauty of Garhwal.
        </p>
      </div>
      <div className="m-3">
        <ul>
          <li className='font-nunito text-lg leading-snug text-justify 3xl:text-3xl 2xl:text-2xl xl:text-[18.5px] mobile:text-[16px]'>Email : anujn158@gmail.com</li>
          <a href="https://www.linkedin.com/in/anuj-negi-b78910320/" >
            <li className='font-nunito text-lg leading-snug text-green-600 text-justify 3xl:text-3xl 2xl:text-2xl xl:text-[18.5px] mobile:text-[16px]' >LinkedIn</li>
          </a>
        </ul>
      </div>
    </div>
  );
});

export default About;
