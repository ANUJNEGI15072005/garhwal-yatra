import React from 'react';
import { useParams } from 'react-router-dom';
import { DistrictData } from '../data/DistrictData';

const DistrictBrief = () => {
  const { districtId } = useParams();
  const district = DistrictData.find(d => d.id === districtId);

  if (!district) {
    return <div>District not found</div>;
  }

  return (
    <div>
      <div className='flex justify-center items-center mobile:mt-24 xl:mt-28 2xl:mt-36 p-5 mobile:h-16 2xl:h-24 bg-slate-200 text-black'>
        <h1 className='text-black mobile:text-5xl 2xl:text-7xl font-oswald'>{district.id.toUpperCase()}</h1>
      </div>
      <div className='mt-8 flex flex-wrap justify-center  gap-4 '>
        {district.places.map((place, index) => (
          <div key={index} className='gap-2  mb-4 rounded-lg bg-slate-100 mobile:w-[400px] 2xl:w-[600px] mobile:h-[550px] sm:h-4/5 2xl:h-[600px] p-4'>
            <div className='flex justify-center items-center'>
              <h3 className='mobile:text-2xl 2xl:text-4xl font-nunito font-bold'>{place.name}</h3>
            </div>
            <div className='flex justify-center items-center'>
              <img className='w-90 h-60 rounded-lg object-cover' src={place.image} alt="" />
            </div>
            <div className='flex justify-center mb-2 mt-2 2xl:m-4 mobile:h-16 2xl:h-20 items-center'>
              <p className='flex text-justify mobile:text-[15px] 2xl:text-[25px] font-nunito'>{place.description}</p>
            </div>
            <div className='mt-2'>
              <tr>
                <td>
                  <div className='mr-2 flex justify-end items-start mobile:w-40 2xl:w-64'>
                    <h2 className='mobile:text-base 2xl:text-[25px] font-semibold font-nunito'>LOCATION:</h2>
                  </div>
                </td>
                <td>
                  <div>
                    <p className='mobile:text-base 2xl:text-[25px] text-justify font-nunito'>{place.Location}</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='mr-2 flex justify-end items-start mobile:w-40 2xl:w-64'>
                    <h2 className='mobile:text-base 2xl:text-[25px] font-semibold font-nunito'>ELEVATION:</h2>
                  </div>
                </td>
                <td>
                  <div>
                    <p className='mobile:text-base 2xl:text-[25px] text-justify font-nunito'>{place.elevation}</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='mr-2 flex justify-end items-start mobile:w-40 2xl:w-64'>
                    <h2 className='mobile:text-base 2xl:text-[25px] font-semibold font-nunito'>NEAREST RAILWAY:</h2>
                  </div>
                </td>
                <td>
                  <div className='h-10'>
                    <p className='mobile:text-base 2xl:text-[25px] font-nunito'>{place.nearest_railway}</p>
                  </div>
                </td>
              </tr>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DistrictBrief;
