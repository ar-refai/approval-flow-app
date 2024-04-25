import { Link } from '@inertiajs/react';
import React from 'react'
import TableFooter from './TableFooter';

function UsersTable({users}) {

  return (
    <div className="px-4 pt-6 ">
    {/* <pre className='text-white'>
      {JSON.stringify(users,undefined,2)}
    </pre> */}

      <div className="p-4  bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        {/* <!-- Card header --> */}
        <div className="items-center justify-between lg:flex ">
          <div className="mb-4 lg:mb-0">
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Users Table :</h3>
            <span className="text-base font-normal text-gray-500 dark:text-gray-400">This is a list of Users</span>
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
                    <th scope="col" className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                        ID
                      </th>
                      <th scope="col" className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                        Name
                      </th>
                      <th scope="col" className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                        Role
                      </th>
                      <th scope="col" className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                        Email
                      </th>

                      <th scope="col" className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                        Action
                      </th>
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
                      <Link className='text-gray-500 whitespace-nowrap  dark:text-gray-400 dark:hover:text-indigo-300 underline  hover:no-underline' href={route("request.edit",user.id)}>Edit User</Link>
                      <Link className='text-gray-500 whitespace-nowrap  dark:text-gray-400 dark:hover:text-red-300 underline hover:no-underline' href={route("request.destroy",user.id)}>Delete User</Link>
                      </td>
                    </tr>
                    ))}




                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Card Footer --> */}
        <TableFooter />
      </div>
      {/* <pre className="text-white">
        {JSON.stringify(requests,undefined,2)}
      </pre> */}
    </div>

  )
}
export default UsersTable;


/*
Status :
case: fulfilled:
  <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 border border-green-100 dark:border-green-500">Completed</span>
case: accepted:
  <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md border border-purple-100 dark:bg-gray-700 dark:border-purple-500 dark:text-purple-400">In progress</span>
case: pending:
<span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md border border-yellow-100 dark:bg-gray-700 dark:border-yellow-300 dark:text-yellow-300">Pending</span>
case: stalled:
  <span className="bg-orange-100 text-orange-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md border border-orange-100 dark:bg-gray-700 dark:border-orange-300 dark:text-orange-300">Pending</span>
case: rejected:
  <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md border border-red-100 dark:border-red-400 dark:bg-gray-700 dark:text-red-400">Cancelled</span>
case: inprogress:
  <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md border border-red-100 dark:border-red-400 dark:bg-gray-700 dark:text-red-400">Cancelled</span>
*/
