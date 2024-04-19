import { Link, router } from '@inertiajs/react';
import React from 'react'
import Paggination from './Paggination';
import TextInput from './TextInput';
import SelectInput from './SelectInput';

function RequestsTable({requests ,queryParams = null}) {
  queryParams = queryParams || {};

  // SEARCH FUNCTION
  queryParams = queryParams || {};
  const searchFieldChanged = (name, value) => {
    if (value) {
      queryParams[name] = value;
    } else {
      delete queryParams[name];
    }

    router.get(route("request.index"), queryParams);
  };

  const onKeyPress = (name, e) => {
    if (e.key !== "Enter") return;

    searchFieldChanged(name, e.target.value);
  };

  return (
    <div className="px-4 pt-6 ">

      <div className="p-4  bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        {/* <!-- Card header --> */}
        <div className="items-center justify-between lg:flex ">
          <div className="mb-4 lg:mb-0">
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Requests Table :</h3>
            <span className="text-base font-normal text-gray-500 dark:text-gray-400">This is a list of latest Requests</span>
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
                        Requester
                      </th>
                      <th scope="col" className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                        Role
                      </th>
                      <th scope="col" className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                        Email
                      </th>
                      <th scope="col" className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                        Request
                      </th>

                      <th scope="col" className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                        Request Description
                      </th>
                      <th scope="col" className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                        Quantity
                      </th>
                      <th scope="col" className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                        Date
                      </th>
                      <th scope="col" className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                        Status
                      </th>
                      <th scope="col" className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                        Action
                      </th>

                    </tr>
                  </thead>
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                    <th scope="col" className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">

                      </th>
                    <th scope="col" className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">

                      </th>
                      <th scope="col" className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">

                      </th>
                      <th scope="col" className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">

                      </th>
                      <th scope="col" className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                      <TextInput
                      defaultValue = {queryParams.name}
                      className="w-full"
                      placeholder="Request Title"
                      onBlur={e => searchFieldChanged('name',e.target.value)}
                      onKeyPress={e => onKeyPress('name',e)}
                      />

                      </th>

                      <th scope="col" className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">

                      </th>
                      <th scope="col" className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">

                      </th>
                      <th scope="col" className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">

                      </th>
                      <th scope="col" className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                        <SelectInput
                        className= "w-[100%]"
                        onChange={(e) =>
                          searchFieldChanged("status", e.target.value)
                        }
                        defaultValue = {queryParams.status}

                          >
                          <option value="">Status</option>
                          <option value="fulfilled">Fulfilled</option>
                          <option value="accepted">Accepted</option>
                          <option value="rejected">Rejected</option>
                          <option value="pending">Pending</option>
                          <option value="stalled">Stalled</option>
                          <option value="inprogress">In progress</option>



                          </SelectInput>
                      </th>
                      <th scope="col" className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">

                      </th>

                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800">
                    {requests.data.map(req => (
                      <tr key={req.item_name}>
                        <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                        <span className="font-semibold">{req.id}</span>
                      </td>
                      <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                        Request from : <span className="font-semibold">{req.created_by.name}</span>
                      </td>
                      <td className="p-4 text-sm font-normal text-wrap text-gray-500 whitespace-nowrap dark:text-gray-400">
                      {req.created_by.role}
                      </td>

                      <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                      {req.created_by.email}
                      </td>
                      <td className="p-4 text-sm font-semibold text-gray-900 text-wrap whitespace-nowrap dark:text-white">
                      {req.item_name}

                      </td>
                      <td className="p-4 text-sm font-normal text-wrap text-gray-500 whitespace-nowrap dark:text-gray-400">
                      {req.description}
                      </td>
                      <td className="inline-flex items-center p-4 space-x-2 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                      {req.quantity}
                      </td>

                      <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                      {req.created_at}
                      </td>

                      <td className="p-4 whitespace-nowrap">

                        {(() => {
                          switch(req.status) {
                            case 'fulfilled':
                              return (
                                <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 border border-green-100 dark:border-green-500">Fulfilled</span>
                              );
                            case 'accepted':
                              return (
                                <span className="bg-teal-100 text-teal-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md border border-teal-100 dark:bg-gray-700 dark:border-teal-500 dark:text-teal-400">Accepted</span>
                              );
                            case 'pending':
                              return (
                                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md border border-yellow-100 dark:bg-gray-700 dark:border-yellow-300 dark:text-yellow-300">Pending</span>
                              );
                            case 'stalled':
                              return (
                                <span className="bg-orange-100 text-orange-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md border border-orange-100 dark:bg-gray-700 dark:border-orange-300 dark:text-orange-300">Stalled</span>
                              );
                            case 'rejected':
                              return (
                                <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md border border-red-100 dark:border-red-400 dark:bg-gray-700 dark:text-red-400">Rejected</span>
                              );
                            case 'inprogress':
                              return (
                                <span className="bg-lime-100 text-lime-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md border border-red-100 dark:border-lime-400 dark:bg-gray-700 dark:text-lime-400  ">In progress</span>
                              );
                            default:
                              return null;
                          }
                        })()}

                      </td>
                      <td className="p-4 text-sm font-normal  flex flex-col">
                      <Link className='text-gray-500 whitespace-nowrap  dark:text-gray-400 dark:hover:text-blue-300 underline  hover:no-underline' href={route("request.edit",req.id)}>Edit Status</Link>
                      <Link className='text-gray-500 whitespace-nowrap  dark:text-gray-400 dark:hover:text-red-300 underline hover:no-underline' href={route("request.destroy",req.id)}>Delete Status</Link>
                      </td>
                    </tr>
                    ))}




                  </tbody>
                </table>
                <Paggination links={requests.meta.links}/>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Card Footer --> */}
        <div className="flex items-center justify-between pt-3 sm:pt-6">

          <h4 className='text-center mx-auto bg-gray-900 rounded px-14 py-2 text-gray-200'>Developed By : Abdelrahman Elrefai  &reg; 2024 </h4>
        </div>
      </div>
      {/* <pre className="text-white">
        {JSON.stringify(requests,undefined,2)}
      </pre> */}
    </div>

  )
}
export default RequestsTable;


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
