import React, { forwardRef } from 'react'
import District from './district';
import { DistrictData } from '../data/DistrictData';

const Districts = forwardRef((props, ref) => {
  return (
    <div className='p-5 ml-52 text-black 3xl:ml-80 2xl:ml-60 lg:ml-52 mobile:ml-4'>
      <div className="bg-slate-200 flex justify-center items-center w-full p-2 3xl:h-24 2xl:h-20 sm:h-14 mobile:h-12">
        <h1 ref={ref} className='text-5xl font-oswald 3xl:text-7xl 2xl:text-6xl mobile:text-4xl'>DISTRICTS</h1>
      </div>
      <div className='m-3'>
        <p className='font-nunito text-lg leading-snug text-justify 3xl:text-3xl 2xl:text-2xl xl:text-[18.5px] mobile:text-[16px]'>Garhwal region, divided into several distinctive districts, is a haven for travelers seeking diverse experiences, from serene temples and sacred pilgrimage sites to breathtaking landscapes and historical landmarks. Our aim is to guide you through each district, highlighting the must-visit tourist spots, revered temples, and captivating attractions that define Garhwal’s unique charm. Dive into our comprehensive district-focused guide and discover what makes each part of Garhwal a gem worth exploring.</p>
      </div>
      <div className='text-black'>
        {DistrictData.map((data, index) => (
          <District key={index} data={data} />
        ))}
      </div>
    </div>
  )
})

export default Districts   

