import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import TableFooter from "../../Components/TableFooter";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/16/solid";

export default function Table() {
  return ( <>
    <div className="px-4 pt-6 ">
      <div className=" mt-4 p-4  bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        {/* <!-- Card header --> */}
        <div className="items-center justify-between lg:flex ">
          <div className="mb-4 lg:mb-0">
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              Requests Table :
            </h3>
            <span className="text-base font-normal text-gray-500 dark:text-gray-400">
              This is a list of latest Requests
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
                        scope="col"
                        className="p-4  text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                      >
                        <div className="flex items-center justify-between gap-1 cursor-pointer hover:text-gray-400	">
                          ID
                          <div>
                            <ChevronUpIcon className={"w-4 "} />
                            <ChevronDownIcon className={"w-4 -mt-2 "} />
                          </div>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="p-4  text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                      >
                        <div className="flex items-center justify-between gap-1 cursor-pointer hover:text-gray-400	">
                          Request
                          <div>
                            <ChevronUpIcon className={"w-4 "} />
                            <ChevronDownIcon className={"w-4 -mt-2 "} />
                          </div>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                      >
                        Requester
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                      >
                        Role
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                      >
                        Email
                      </th>

                      <th
                        scope="col"
                        className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                      >
                        <div className="flex items-center justify-between gap-1 cursor-pointer hover:text-gray-400	">
                          Request Description
                          <div>
                            <ChevronUpIcon className={"w-4 "} />
                            <ChevronDownIcon className={"w-4 -mt-2 "} />{" "}
                          </div>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                      >
                        <div className="flex items-center justify-between gap-1 cursor-pointer hover:text-gray-400	">
                          Quantity
                          <div>
                            <ChevronUpIcon className={"w-4 "} />
                            <ChevronDownIcon className={"w-4 -mt-2 "} />
                          </div>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                      >
                        <div className="flex items-center justify-between gap-1 cursor-pointer hover:text-gray-400	">
                          Date
                          <div>
                            <ChevronUpIcon className={"w-4 "} />
                            <ChevronDownIcon className={"w-4 -mt-2 "} />
                          </div>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                      >
                        <div className="flex items-center justify-between gap-1 cursor-pointer hover:text-gray-400	">
                          Status
                          <div>
                            <ChevronUpIcon className={"w-4 "} />
                            <ChevronDownIcon className={"w-4 -mt-2 "} />
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
                          className="w-full"
                          placeholder="Request Title"
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
                      <th
                        scope="col"
                        className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                      >
                        {/* The purchaser doesn't view it */}

                        <SelectInput className="w-[100%]">
                          <option value="">Status</option>
                          <option value="fulfilled">Fulfilled</option>
                          <option value="accepted">Accepted</option>
                          <option value="rejected">Rejected</option>
                          <option value="pending">Pending</option>
                          <option value="stalled">Stalled</option>
                          <option value="inprogress">In progress</option>
                        </SelectInput>
                      </th>

                      <th
                        scope="col"
                        className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                      ></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800">
                    {/* FIRST ROW */}
                    <tr>
                      <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                        <span className="font-semibold">1</span>
                      </td>
                      <td className="p-4 text-sm font-semibold text-gray-900 text-wrap whitespace-nowrap dark:text-white">
                        mugs and plates
                      </td>
                      <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                        Request from :{" "}
                        <span className="font-semibold">samir</span>
                      </td>
                      <td className="p-4 text-sm font-normal text-wrap text-gray-500 whitespace-nowrap dark:text-gray-400">
                        site Engineer
                      </td>

                      <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                        samir@erp.eg
                      </td>

                      <td className="p-4 text-sm font-normal text-wrap text-gray-500 whitespace-nowrap dark:text-gray-400">
                        we should get this offer as fast as we can.
                      </td>
                      <td className="inline-flex items-center p-4 space-x-2 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                        77
                      </td>

                      <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                        april 12 - 2024
                      </td>

                      <td className="p-4 whitespace-nowrap">
                        <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 border border-green-100 dark:border-green-500">
                          Fulfilled
                        </span>
                      </td>

                      <td className="p-4  text-sm font-normal whitespace-nowrap !h-full">
                        <button className="text-gray-500 whitespace-nowrap  dark:text-gray-400 dark:hover:text-indigo-300 underline  hover:no-underline">
                          Edit
                        </button>
                        <button className="text-gray-500 flex items-center  whitespace-nowrap  dark:text-gray-400 dark:hover:text-red-300 underline hover:no-underline">
                          Delete
                        </button>
                      </td>
                    </tr>
                    {/* SECONED ROW */}
                    <tr>
                      <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                        <span className="font-semibold">1</span>
                      </td>
                      <td className="p-4 text-sm font-semibold text-gray-900 text-wrap whitespace-nowrap dark:text-white">
                        mugs and plates
                      </td>
                      <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                        Request from :{" "}
                        <span className="font-semibold">samir</span>
                      </td>
                      <td className="p-4 text-sm font-normal text-wrap text-gray-500 whitespace-nowrap dark:text-gray-400">
                        site Engineer
                      </td>

                      <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                        samir@erp.eg
                      </td>

                      <td className="p-4 text-sm font-normal text-wrap text-gray-500 whitespace-nowrap dark:text-gray-400">
                        we should get this offer as fast as we can.
                      </td>
                      <td className="inline-flex items-center p-4 space-x-2 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                        77
                      </td>

                      <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                        april 12 - 2024
                      </td>

                      <td className="p-4 whitespace-nowrap">
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md border border-yellow-100 dark:bg-gray-700 dark:border-yellow-300 dark:text-yellow-300">
                          Pending
                        </span>
                      </td>

                      <td className="p-4  text-sm font-normal whitespace-nowrap !h-full">
                        <button className="text-gray-500 whitespace-nowrap  dark:text-gray-400 dark:hover:text-indigo-300 underline  hover:no-underline">
                          Edit
                        </button>
                        <button className="text-gray-500 flex items-center  whitespace-nowrap  dark:text-gray-400 dark:hover:text-red-300 underline hover:no-underline">
                          Delete
                        </button>
                      </td>
                    </tr>
                    {/* Third Row */}
                    <tr>
                      <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                        <span className="font-semibold">1</span>
                      </td>
                      <td className="p-4 text-sm font-semibold text-gray-900 text-wrap whitespace-nowrap dark:text-white">
                        mugs and plates
                      </td>
                      <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                        Request from :{" "}
                        <span className="font-semibold">samir</span>
                      </td>
                      <td className="p-4 text-sm font-normal text-wrap text-gray-500 whitespace-nowrap dark:text-gray-400">
                        site Engineer
                      </td>

                      <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                        samir@erp.eg
                      </td>

                      <td className="p-4 text-sm font-normal text-wrap text-gray-500 whitespace-nowrap dark:text-gray-400">
                        we should get this offer as fast as we can.
                      </td>
                      <td className="inline-flex items-center p-4 space-x-2 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                        77
                      </td>

                      <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                        april 12 - 2024
                      </td>

                      <td className="p-4 whitespace-nowrap">
                        <span className="bg-teal-100 text-teal-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md border border-teal-100 dark:bg-gray-700 dark:border-teal-500 dark:text-teal-400">
                          Accepted
                        </span>
                      </td>

                      <td className="p-4  text-sm font-normal whitespace-nowrap !h-full">
                        <button className="text-gray-500 whitespace-nowrap  dark:text-gray-400 dark:hover:text-indigo-300 underline  hover:no-underline">
                          Edit
                        </button>
                        <button className="text-gray-500 flex items-center  whitespace-nowrap  dark:text-gray-400 dark:hover:text-red-300 underline hover:no-underline">
                          Delete
                        </button>
                      </td>
                    </tr>
                    {/* Fourth Row */}
                    <tr>
                      <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                        <span className="font-semibold">1</span>
                      </td>
                      <td className="p-4 text-sm font-semibold text-gray-900 text-wrap whitespace-nowrap dark:text-white">
                        mugs and plates
                      </td>
                      <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                        Request from :{" "}
                        <span className="font-semibold">samir</span>
                      </td>
                      <td className="p-4 text-sm font-normal text-wrap text-gray-500 whitespace-nowrap dark:text-gray-400">
                        site Engineer
                      </td>

                      <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                        samir@erp.eg
                      </td>

                      <td className="p-4 text-sm font-normal text-wrap text-gray-500 whitespace-nowrap dark:text-gray-400">
                        we should get this offer as fast as we can.
                      </td>
                      <td className="inline-flex items-center p-4 space-x-2 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                        77
                      </td>

                      <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                        april 12 - 2024
                      </td>

                      <td className="p-4 whitespace-nowrap">
                        <span className="bg-orange-100 text-orange-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md border border-orange-100 dark:bg-gray-700 dark:border-orange-300 dark:text-orange-300">
                          Stalled
                        </span>
                      </td>

                      <td className="p-4  text-sm font-normal whitespace-nowrap !h-full">
                        <button className="text-gray-500 whitespace-nowrap  dark:text-gray-400 dark:hover:text-indigo-300 underline  hover:no-underline">
                          Edit
                        </button>
                        <button className="text-gray-500 flex items-center  whitespace-nowrap  dark:text-gray-400 dark:hover:text-red-300 underline hover:no-underline">
                          Delete
                        </button>
                      </td>
                    </tr>
                    {/* Fifth Row */}
                    <tr>
                      <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                        <span className="font-semibold">1</span>
                      </td>
                      <td className="p-4 text-sm font-semibold text-gray-900 text-wrap whitespace-nowrap dark:text-white">
                        mugs and plates
                      </td>
                      <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                        Request from :{" "}
                        <span className="font-semibold">samir</span>
                      </td>
                      <td className="p-4 text-sm font-normal text-wrap text-gray-500 whitespace-nowrap dark:text-gray-400">
                        site Engineer
                      </td>

                      <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                        samir@erp.eg
                      </td>

                      <td className="p-4 text-sm font-normal text-wrap text-gray-500 whitespace-nowrap dark:text-gray-400">
                        we should get this offer as fast as we can.
                      </td>
                      <td className="inline-flex items-center p-4 space-x-2 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                        77
                      </td>

                      <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                        april 12 - 2024
                      </td>

                      <td className="p-4 whitespace-nowrap">
                        <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md border border-red-100 dark:border-red-400 dark:bg-gray-700 dark:text-red-400">
                          Rejected
                        </span>
                      </td>

                      <td className="p-4  text-sm font-normal whitespace-nowrap !h-full">
                        <button className="text-gray-500 whitespace-nowrap  dark:text-gray-400 dark:hover:text-indigo-300 underline  hover:no-underline">
                          Edit
                        </button>
                        <button className="text-gray-500 flex items-center  whitespace-nowrap  dark:text-gray-400 dark:hover:text-red-300 underline hover:no-underline">
                          Delete
                        </button>
                      </td>
                    </tr>
                    {/* Sixth Row */}
                    <tr>
                      <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                        <span className="font-semibold">1</span>
                      </td>
                      <td className="p-4 text-sm font-semibold text-gray-900 text-wrap whitespace-nowrap dark:text-white">
                        mugs and plates
                      </td>
                      <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                        Request from :{" "}
                        <span className="font-semibold">samir</span>
                      </td>
                      <td className="p-4 text-sm font-normal text-wrap text-gray-500 whitespace-nowrap dark:text-gray-400">
                        site Engineer
                      </td>

                      <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                        samir@erp.eg
                      </td>

                      <td className="p-4 text-sm font-normal text-wrap text-gray-500 whitespace-nowrap dark:text-gray-400">
                        we should get this offer as fast as we can.
                      </td>
                      <td className="inline-flex items-center p-4 space-x-2 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                        77
                      </td>

                      <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                        april 12 - 2024
                      </td>

                      <td className="p-4 whitespace-nowrap">
                      <span className="bg-lime-100 text-lime-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md border border-red-100 dark:border-lime-400 dark:bg-gray-700 dark:text-lime-400  ">
                      In progress
                      </span>

                      </td>

                      <td className="p-4  text-sm font-normal whitespace-nowrap !h-full">
                        <button className="text-gray-500 whitespace-nowrap  dark:text-gray-400 dark:hover:text-indigo-300 underline  hover:no-underline">
                          Edit
                        </button>
                        <button className="text-gray-500 flex items-center  whitespace-nowrap  dark:text-gray-400 dark:hover:text-red-300 underline hover:no-underline">
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Card Footer --> */}
        <TableFooter />
      </div>

    </div>
    </>
  );
}

