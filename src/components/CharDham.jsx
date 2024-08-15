import React from 'react'

const CharDham = ({ data }) => {
  return (
    <>
      <div className='sm:flex sm:flex-wrap  mobile:hidden'>
        <div className='w-xl hover:bg-slate-100  bg-slate-50 p-4 m-5 '>
          <div>
            <div className='flex justify-center items-center'>
              <h1 className='text-2xl font-bold font-nunito 3xl:text-5xl xl:text-3xl'>{data.title}</h1>
            </div>
            <div className='flex justify-center items-center mb-4 mt-3 3xl:m-8'>
              <img className='object-cover w-96 h-64 3xl:w-[429px] 3xl:h-[246px]' src={data.image} alt="" />
            </div>
            <div className="grid">
              <tr>
                <td>
                  <div className='mr-2 flex justify-end items-start w-40 3xl:w-80 2xl:w-72 xl:w-64'>
                    <h2 className='text-base font-semibold font-nunito 3xl:text-3xl 2xl:text-2xl xl:text-[18.5px] lg:text-[16px] md:text-[14px]'>LOCATION:</h2>
                  </div>
                </td>
                <td>
                  <div>
                    <p className='text-base font-nunito text-justify flex 3xl:text-3xl 2xl:text-2xl xl:text-[18.5px] lg:text-[16px] md:text-[14px]' >{data.location}</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='mr-2 justify-end items-start flex w-40 3xl:w-80 2xl:w-72 xl:w-64'>
                    <h2 className='text-base font-semibold font-nunito 3xl:text-3xl 2xl:text-2xl xl:text-[18.5px] lg:text-[16px] md:text-[14px]'>DESCRIPTION:</h2>
                  </div>
                </td>
                <td>
                  <div>
                    <p className='text-base leading-snug font-nunito text-justify flex 3xl:text-3xl 2xl:text-2xl xl:text-[18.5px] lg:text-[16px] md:text-[14px]'>{data.description}</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='mr-2 justify-end items-start flex w-40 3xl:w-80 2xl:w-72 xl:w-64'>
                    <h2 className='text-base font-semibold font-nunito 3xl:text-3xl 2xl:text-2xl xl:text-[18.5px] lg:text-[16px] md:text-[14px]'>NEAREST RAILWAY:</h2>
                  </div>
                </td>
                <td>
                  <div>
                    <p className='text-base font-nunito text-justify flex 3xl:text-3xl 2xl:text-2xl xl:text-[18.5px] lg:text-[16px] md:text-[14px]'>{data.nearest_railway_station}</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='mr-2 justify-end items-start flex w-40 3xl:w-80 2xl:w-72 xl:w-64' >
                    <h2 className='text-base font-semibold font-nunito 3xl:text-3xl 2xl:text-2xl xl:text-[18.5px] lg:text-[16px] md:text-[14px]'>NEAREST AIRPORT:</h2>
                  </div>
                </td>
                <td>
                  <div>
                    <p className='text-base font-nunito text-justify flex 3xl:text-3xl 2xl:text-2xl xl:text-[18.5px] lg:text-[16px] md:text-[14px]'>{data.nearest_airport}</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='mr-2 w-40 justify-end items-start flex 3xl:w-80 2xl:w-72 xl:w-64'>
                    <h2 className='text-base font-semibold font-nunito 3xl:text-3xl 2xl:text-2xl xl:text-[18.5px] lg:text-[16px] md:text-[14px]'>NEAREST TOWN:</h2>
                  </div>
                </td>
                <td>
                  <div>
                    <p className='text-base font-nunito text-justify flex 3xl:text-3xl 2xl:text-2xl xl:text-[18.5px] lg:text-[16px] md:text-[14px]'>{data.nearest_town}</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='mr-2 w-40 justify-end items-start flex 3xl:w-80 2xl:w-72 xl:w-64'>
                    <h2 className='text-base font-semibold font-nunito 3xl:text-3xl 2xl:text-2xl xl:text-[18.5px] lg:text-[16px] md:text-[14px]'>BEST TIME TO VISIT:</h2>
                  </div>
                </td>
                <td>
                  <div>
                    <p className='text-base font-nunito text-justify flex 3xl:text-3xl 2xl:text-2xl xl:text-[18.5px] lg:text-[16px] md:text-[14px]'>{data.best_time_to_visit}</p>
                  </div>
                </td>
              </tr>
            </div>
          </div>
        </div>
      </div>
      <div className='mobile:flex sm:hidden mobile:flex-wrap'>
        <div className='w-xl hover:bg-slate-100  bg-slate-50 p-4 m-5 '>
          <div>
            <div className='flex justify-center items-center'>
              <h1 className='text-2xl font-bold font-nunito'>{data.id.toUpperCase()}</h1>
            </div>
            <div className='flex justify-center items-center mb-4 mt-3 3xl:m-8'>
              <img className='object-cover w-96 h-64' src={data.image} alt="" />
            </div>
            <div className="grid">
              <tr>
                <td>
                  <div className='mr-2 flex justify-end items-start w-40'>
                    <h2 className='text-base font-semibold font-nunito'>LOCATION:</h2>
                  </div>
                </td>
                <td>
                  <div>
                    <p className='text-base font-nunito flex' >{data.location}</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='mr-2 justify-end items-start flex w-40'>
                    <h2 className='text-base font-semibold font-nunito'>NEAREST RAILWAY:</h2>
                  </div>
                </td>
                <td>
                  <div>
                    <p className='text-base font-nunito flex'>{data.nearest_railway_station}</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='mr-2 justify-end items-start flex w-40 3xl:w-80 2xl:w-72 xl:w-64' >
                    <h2 className='text-base font-semibold font-nunito'>NEAREST AIRPORT:</h2>
                  </div>
                </td>
                <td>
                  <div>
                    <p className='text-base font-nunito flex'>{data.nearest_airport}</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='mr-2 w-40 justify-end items-start flex'>
                    <h2 className='text-base font-semibold font-nunito'>NEAREST TOWN:</h2>
                  </div>
                </td>
                <td>
                  <div>
                    <p className='text-base font-nunito text-justify flex'>{data.nearest_town}</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='mr-2 w-40 justify-end items-start flex'>
                    <h2 className='text-base font-semibold font-nunito'>BEST TIME TO VISIT:</h2>
                  </div>
                </td>
                <td>
                  <div>
                    <p className='text-base font-nunito flex'>{data.best_time_to_visit}</p>
                  </div>
                </td>
              </tr>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CharDham

