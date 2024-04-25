import React from "react";
import ProfileImage from "../../../assets/profile.jpg";
import RequestImage from "../../../assets/png/request.png";

const CardList = ({ auth, latest, type }) => {
  return (
    <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Latest {type === "users" ? "Users" : "Requests"}
        </h5>
        {type === "users" && auth.user.role === "admin" && (
          <a
            href={route("user.index")}
            className="text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-500"
          >
            View all
          </a>
        )}
        {type === "requests" && (
          <a
            href={route("request.index")}
            className="text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-500"
          >
            View all
          </a>
        )}
      </div>
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          {type === "users" &&
            latest.map((user) => (
              <li className="py-3 sm:py-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={ProfileImage}
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {user.name}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {user.email}
                    </p>
                  </div>
                  <div className="inline-flex mx-2 items-center text-base font-semibold text-gray-900 dark:text-gray-300">
                  <span class="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">{user.role}</span>


                  </div>
                </div>
              </li>
            ))}

          {type === "requests" &&
            latest.map((request) => (
              <li className="py-3 sm:py-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={RequestImage}
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {request.item_name}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {request.status}
                    </p>
                  </div>
                  <div className="mx-2 inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  <span class="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300"> Q :{request.quantity}</span>


                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default CardList;
