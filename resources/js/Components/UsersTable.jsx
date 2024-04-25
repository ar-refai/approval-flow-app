import { Link, router } from "@inertiajs/react";
import React from "react";
import Paggination from "./Paggination";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/16/solid";
import TableFooter from "./TableFooter";

function UsersTable({ auth, users, queryParams = null }) {
  // console.log(users);
  queryParams = queryParams || {};

  // SEARCH FUNCTIONs
  queryParams = queryParams || {};
  const searchFieldChanged = (name, value) => {
    if (value) {
      queryParams[name] = value;
    } else {
      delete queryParams[name];
    }

    router.get(route("user.index"), queryParams);
  };

  const onKeyPress = (name, e) => {
    if (e.key !== "Enter") return;

    searchFieldChanged(name, e.target.value);
  };

  // SORT FUNCTIONs
  const sortChanged = (field) => {
    if (field === queryParams.sort_field)
      queryParams.sort_direction =
        queryParams.sort_direction === "asc" ? "desc" : "asc";
    else {
      queryParams.sort_field = field;
      queryParams.sort_direction = "asc";
    }
    router.get(route("user.index"), queryParams);
  };
  // DELETE Users
  function deleteUser(user) {
    if (!window.confirm("Are you sure you want to delete the User?")) {
      return;
    }
    router.delete(route("user.destroy", user.id));
  }
  function editUser(user) {
    router.get(route("user.edit"), user.id);
  }


  return (
    <div className="px-4 pt-6 ">
      <div className="p-4  bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        {/* <!-- Card header --> */}
        <div className="items-center justify-between lg:flex ">
          <div className="mb-4 lg:mb-0">
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              Users Table :
            </h3>
            <span className="text-base font-normal text-gray-500 dark:text-gray-400">
              This is a list of latest Users
            </span>
          </div>
        </div>
        {/* <!-- Table --> */}
        <div className="flex flex-col mt-6">
          <div className="overflow-x-auto rounded-lg">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden shadow sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th
                        onClick={(e) => sortChanged("id")}
                        scope="col"
                        className="p-4  text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                      >
                        <div className="flex items-center justify-between gap-1 cursor-pointer hover:text-gray-400	">
                          User ID
                          <div>
                            <ChevronUpIcon
                              className={
                                "w-4 " +
                                (queryParams.sort_field === "id" &&
                                queryParams.sort_direction === "asc"
                                  ? " text-indigo-300"
                                  : "")
                              }
                            />
                            <ChevronDownIcon
                              className={
                                "w-4 -mt-2 " +
                                (queryParams.sort_field == "id" &&
                                queryParams.sort_direction === "desc"
                                  ? " text-indigo-300"
                                  : "")
                              }
                            />
                          </div>
                        </div>
                      </th>

                      <th
                        onClick={(e) => sortChanged("name")}
                        scope="col"
                        className="p-4  text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                      >
                        <div className="flex items-center justify-between gap-1 cursor-pointer hover:text-gray-400	">
                          User Name
                          <div>
                            <ChevronUpIcon
                              className={
                                "w-4 " +
                                (queryParams.sort_field === "name" &&
                                queryParams.sort_direction === "asc"
                                  ? " text-indigo-300"
                                  : "")
                              }
                            />
                            <ChevronDownIcon
                              className={
                                "w-4 -mt-2 " +
                                (queryParams.sort_field == "name" &&
                                queryParams.sort_direction === "desc"
                                  ? " text-indigo-300"
                                  : "")
                              }
                            />
                          </div>
                        </div>
                      </th>

                      <th
                        onClick={(e) => sortChanged("role")}
                        scope="col"
                        className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                      >
                        <div className="flex items-center justify-between gap-1 cursor-pointer hover:text-gray-400	">
                          Role
                          <div>
                            <ChevronUpIcon
                              className={
                                "w-4 " +
                                (queryParams.sort_field === "role" &&
                                queryParams.sort_direction === "asc"
                                  ? " text-indigo-300"
                                  : "")
                              }
                            />
                            <ChevronDownIcon
                              className={
                                "w-4 -mt-2 " +
                                (queryParams.sort_field == "role" &&
                                queryParams.sort_direction === "desc"
                                  ? " text-indigo-300"
                                  : "")
                              }
                            />{" "}
                          </div>
                        </div>
                      </th>
                      <th
                        onClick={(e) => sortChanged("email")}
                        scope="col"
                        className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                      >
                        <div className="flex items-center justify-between gap-1 cursor-pointer hover:text-gray-400	">
                          E-mail
                          <div>
                            <ChevronUpIcon
                              className={
                                "w-4 " +
                                (queryParams.sort_field === "email" &&
                                queryParams.sort_direction === "asc"
                                  ? " text-indigo-300"
                                  : "")
                              }
                            />
                            <ChevronDownIcon
                              className={
                                "w-4 -mt-2 " +
                                (queryParams.sort_field == "email" &&
                                queryParams.sort_direction === "desc"
                                  ? " text-indigo-300"
                                  : "")
                              }
                            />
                          </div>
                        </div>
                      </th>

                        <th
                          scope="col"
                          className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                        >
                          Action
                        </th>

                    </tr>
                  </thead>
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th
                        scope="col"
                        className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                      ></th>

                      <th
                        scope="col"
                        className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                      >
                        <TextInput
                          defaultValue={queryParams.name}
                          className="w-full"
                          placeholder="User Name"
                          onBlur={(e) =>
                            searchFieldChanged("name", e.target.value)
                          }
                          onKeyPress={(e) => onKeyPress("name", e)}
                        />
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                      ></th>
                      <th
                        scope="col"
                        className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                      ></th>



                      <th
                        scope="col"
                        className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                      ></th>

                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800">
                    {users.data.map(user => (

                      <tr key={user.email}>
                      <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                        User : <span className="font-semibold">{user.id}</span>
                      </td>
                      <td className="p-4 text-sm font-normal text-wrap text-gray-500 whitespace-nowrap dark:text-gray-400">
                      {user.name}
                      </td>

                      <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                      {user.role}
                      </td>
                      <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                      {user.email}
                      </td>


                      <td className="p-4 text-sm font-normal  flex flex-col">
                      <Link className='text-gray-500 whitespace-nowrap  dark:text-gray-400 dark:hover:text-indigo-300 underline  hover:no-underline' href={route("user.edit",user.id)}>Edit User</Link>
                              <button
                              className="text-gray-500 flex items-center  whitespace-nowrap  dark:text-gray-400 dark:hover:text-red-300 underline hover:no-underline"
                              onClick={(e) => deleteUser(user)}
                            >
                              Delete
                            </button>
                      </td>
                    </tr>
                    ))}




                  </tbody>
                </table>
                <Paggination links={users.meta.links} />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Card Footer --> */}
        <TableFooter />
      </div>

    </div>
  );
}
export default UsersTable;
