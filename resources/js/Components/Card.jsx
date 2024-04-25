import React from "react";

const Card = ({ count, type }) => {
  return (
    <div className="max-w-sm p-6 w-96 text-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {type === "requests" && (

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8 mx-auto">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg>
      )}
      {type === "users" && (

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8 mx-auto">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>

      )}
        <h5 className="mb-2 mt-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Number Of {type === "requests" ? "Requests" : "Users"}
        </h5>
        <div class="flex gap-2 items-center justify-center">
                    <dt class="mb-2 text-3xl text-gray-400 font-extrabold ">{count}+</dt>
                    <dd class="text-gray-500 dark:text-gray-400 ">
                    {type === "requests" && ("Request")}
                    {type === "users" && ("User")}

                    </dd>
                </div>

    </div>
  );
};

export default Card;
