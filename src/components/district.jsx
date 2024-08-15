import React from 'react'
import { Link } from 'react-router-dom'

const District = ({ data }) => {
  return (
    <>
      <div className='sm:flex sm:flex-wrap  mobile:hidden'>
        <Link to={`/District/${data.id}`} className='flex w-full mb-4 hover:bg-slate-200 hover:cursor-pointer p-4 justify-center items-center border-1 bg-slate-50'>
          <div className='flex-shrink-0'>
            <img className='w-60 h-40 object-cover 3xl:w-96 3xl:h-64 2xl:w-72 2xl:h-48 xl:w-64 xl:h-44' src={data.image} alt={data.title} />
          </div>
          <div className='ml-4'>
            <h1 className='text-xl font-nunito font-bold 3xl:text-4xl 2xl:text-3xl xl:text-2xl lg:text-[18px] md:text-[16px] '>{data.title}</h1>
            <p className='text-base leading-snug text-justify font-nunito 3xl:text-3xl 2xl:text-2xl xl:text-[18px] lg:text-[16px] md:text-[14px]'>{data.description}</p>
          </div>
        </Link>
      </div>
      <div className='mobile:flex w-96 mobile:flex-wrap mobile:justify-center  sm:hidden'>
        <div className='flex  justify-center items-center'>
          <Link to={`/District/${data.id}`} className='w-full mb-4 hover:bg-slate-200 hover:cursor-pointer p-4 border-1 bg-slate-50'>
            <div className='flex-shrink-0'>
              <img className='w-60 h-40 object-cover' src={data.image} alt={data.title} />
            </div>
            <div className='flex justify-center items-center'>
              <div className='ml-4 text-center'>
                <h1 className='text-xl text-center font-nunito font-bold'>{data.id.toUpperCase()}</h1>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default District

