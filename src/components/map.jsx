import React, { forwardRef } from 'react'

const Map = forwardRef((props, ref) => {
  return (
    <div className='mt-20 ml-52 p-5  text-black 3xl:mt-32 3xl:ml-80 2xl:mt-28 2xl:ml-60 xl:mt-24 lg:ml-52 mobile:ml-4'>
      <div className="bg-slate-200 flex justify-center items-center w-full p-2 3xl:h-24 2xl:h-20 sm:h-14 mobile:h-12">
        <h1 ref={ref} className='text-5xl font-oswald 3xl:text-7xl 2xl:text-6xl mobile:text-4xl'>GARHWAL REGION</h1>
      </div>
      <div className='flex'>  
        <div className='p-4 flex justify-center items-center'>  
          <div>
            <p className='text-justify leading-snug font-nunito 3xl:text-3xl 2xl:text-2xl xl:text-[18px] mobile:text-[16px]'>Welcome to Uttarakhand, a paradise nestled in the lap of the majestic Himalayas. This enchanting state, often referred to as 'Devbhoomi' or 'Land of the Gods', offers a mesmerizing blend of natural beauty and cultural heritage that captivates the hearts of all who visit. Among its many treasures, the Garhwal region stands out as a haven for adventurers, nature enthusiasts, and spiritual seekers alike.</p>
            <p className='text-justify leading-snug font-nunito 3xl:text-3xl 2xl:text-2xl xl:text-[18px] mobile:text-[16px]'>Explore the serene beauty of Garhwal, where ancient temples, vibrant festivals, and warm hospitality await you. Whether you're trekking through lush green valleys, rafting down the Ganges, or simply soaking in the tranquility of the mountains, Uttarakhand promises a journey like no other. Join us as we unravel the wonders of this Himalayan paradise, where every moment is a step closer to nature and a deeper connection with your soul.</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Map;

