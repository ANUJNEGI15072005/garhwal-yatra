import React, { forwardRef } from 'react'
import CharDham from './CharDham'
import {CharDhamData} from '../data/CharDhamData'

const CharDhama = forwardRef((props, ref) => {
  return (
    <div className='p-5 ml-52 text-black 3xl:ml-80 2xl:ml-60 lg:ml-52 mobile:ml-4'>
      <div className="bg-slate-200 flex justify-center items-center p-2 3xl:h-24 2xl:h-20 sm:h-14 mobile:h-12">
        <h1 ref={ref} className='text-5xl font-oswald 3xl:text-7xl 2xl:text-6xl mobile:text-4xl'>CHAR DHAM</h1>
      </div>
      <div className="m-3">
        <p className='font-nunito text-lg leading-snug text-justify 3xl:text-3xl 2xl:text-2xl xl:text-[18.5px] lg:text-[16px] mobile:text-[16px]'>Chatur Dhama, also known as the Char Dham, represents the pinnacle of spiritual journeys for devout Hindus. This revered circuit comprises four sacred sites: Yamunotri, Gangotri, Kedarnath, and Badrinath. Pilgrims believe that embarking on this spiritual odyssey purifies the soul and washes away sins, bringing them closer to moksha, or liberation.</p>
      </div>
      <div className="text-black ">
        {CharDhamData.map((data, index) => (
          <CharDham key={index} data={data} />
        ))}
      </div>
    </div>
  )
})

export default CharDhama;

