import React from 'react'

const Tooltips = () => {
  return (
    <div className="px-4 pt-6 ">
      {/* Header */}
      <div className=" mt-4 p-4  bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        {/* <!-- Card header --> */}
        <div className="items-center justify-between lg:flex ">
          <div className="mb-4 lg:mb-0">
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              Tooltips :
            </h3>
            <span className="text-base font-normal text-gray-500 dark:text-gray-400">
              This is a list of suggested Tooltips:
            </span>
          </div>
        </div>
    <div className="flex flex-col items-center gap-2">
  <div className="group relative bg-zinc-600 w-[100px] text-center text-zinc-200 p-2 rounded">
    <span>Top</span>
    <div
      className="bg-zinc-200 p-2 rounded-md group-hover:flex hidden absolute -top-2 -translate-y-full left-1/2 -translate-x-1/2"
    >
      <span className="text-zinc-950 whitespace-nowrap">Some Tooltip</span>
      <div
        className="bg-inherit rotate-45 p-1 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2"
      ></div>
    </div>
  </div>

  <div className="group relative bg-zinc-600 w-[100px] text-center text-zinc-200 p-2 rounded">
    <span>Bottom</span>
    <div
      className="bg-zinc-200 p-2 rounded-md group-hover:flex hidden absolute bottom-2 z-10 translate-y-full left-1/2 -translate-x-1/2"
    >
      <span className="text-zinc-950 whitespace-nowrap">Some Tooltip</span>
      <div
        className="bg-inherit rotate-45 p-1 absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2"
      ></div>
    </div>
  </div>


  <div className="group relative bg-zinc-600 w-[100px] text-center text-zinc-200 p-2 rounded">
    <span>Left</span>
    <div
      className="bg-zinc-200 p-2 rounded-md group-hover:flex hidden absolute top-1/2 -translate-y-1/2 -left-2 -translate-x-full"
    >
      <span className="text-zinc-950 whitespace-nowrap">Some Tooltip</span>
      <div
        className="bg-inherit rotate-45 p-1 absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2"
      ></div>
    </div>
  </div>

  <div className="group relative bg-zinc-600 w-[100px] text-center text-zinc-200 p-2 rounded">
    <span>Right</span>
    <div
      className="bg-zinc-200 p-2 rounded-md group-hover:flex hidden absolute top-1/2 -translate-y-1/2 -right-2 translate-x-full"
    >
      <span className="text-zinc-950 whitespace-nowrap">Some Tooltip</span>
      <div
        className="bg-inherit rotate-45 p-1 absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2"
      ></div>
    </div>
  </div>


</div>
</div>
</div>
  )
}

export default Tooltips
