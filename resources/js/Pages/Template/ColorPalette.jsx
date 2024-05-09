import React from 'react'

const ColorPalette = () => {
  return (
    <div className="px-4 pt-6 pb-10">
      {/* Header */}
      <div className=" mt-4 p-4  bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        {/* <!-- Card header --> */}
        <div className="items-center justify-between lg:flex ">
          <div className="mb-4 lg:mb-0">
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              Color Palette :
            </h3>
            <span className="text-base font-normal text-gray-500 dark:text-gray-400">
              This is a list of the website colors:
            </span>
          </div>
        </div>
        {/* Color Palette Section */}
        {/* PRIMARY */}
        <div>
          <p className='text-lg text-white'>Primary Colors</p>
          <div className="flex justify-start items-center">
          <div className='w-10 h-10 bg-[#103f6a] border border-white m-2'>
          </div>
          <div className='w-10 h-10 bg-[#8A6f38] border border-white m-2'>
          </div>
          </div>
        </div>
        {/* SECONDARY */}
        <div className='flex flex-col self-center items-center '>
          <p className='text-lg text-white'>Seconedary Colors</p>
          <div className="flex justify-start items-center">
          <div className='w-10 h-10 bg-white border border-white m-2'>
          </div>
          <div className='w-10 h-10 bg-gray-400 border border-white m-2'>
          </div>
          </div>
        </div>
        {/* NURAL COLORS */}
        <div className='flex flex-col self-end items-end '>
          <p className='text-lg text-white'>Neutral Colors </p>
          <div className="flex justify-start items-center">
          <div className='w-10 h-10 bg-gray-800 border border-white m-2'>
          </div>
          <div className='w-10 h-10 bg-gray-900 border border-white m-2'>
          </div>
          </div>
        </div>
        </div>
        </div>
  )
}

export default ColorPalette
