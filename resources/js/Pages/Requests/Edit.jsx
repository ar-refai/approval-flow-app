import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import React from "react";

const Edit = ({ auth, request }) => {
  const { data, setData, put, errors, reset } = useForm({
    user_id: request.data.created_by.id || "",
    item_name: request.data.item_name || "",
    description: request.data.description || "",
    quantity: request.data.quantity || "",
    status: request.data.status || "",
    forward_to_purchaser: request.data.forward_to_purchaser || "",
    forward_to_requester: request.data.forward_to_requester || "",
    _method: "PUT"
  });
  // console.log(data);
  const statusOptions =
    auth.user.role === "requester"
      ? ["fulfilled"]
      : ["accepted", "inprogress", "pending", "stalled", "rejected"];

  // console.log(data );
  // console.log(request );

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log("Submitted");
    put(route("request.update", request.data.id));
  };

  return (
    <Authenticated
      user={auth.user}
      className="h-screen"
      header={
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-500 leading-tight">
            Edit Request :<p className="indent-3">{request.data.item_name}</p>
          </h2>
        </div>
      }
    >
      <Head title="Requests" />
      <div className=" !h-[calc(100vh-64px-74px);] flex justify-center items-center">
        <div className="bg-gray-800   rounded shadow-lg p-4 px-4 md:p-8 mb-6 container mx-auto flex  justify-center items-center">
          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div className="text-gray-200 text-center flex flex-col items-center justify-center">
              <p className="font-bold tracking-wide  text-3xl uppercase ">
                Request Details{" "}
              </p>
              <p>Please fill out all the fields.</p>
            </div>

            <div className=" lg:col-span-2 text-gray-200">
              <form
                onSubmit={onSubmit}
                className="grid gap-4 lg:gap-y-12 lg:mt-12 items-center gap-y-2 text-sm grid-cols-1 md:grid-cols-5"
              >
                <div className="md:col-span-5">
                  <InputLabel className="text-gray-200" htmlFor="req_name">
                    Request Title
                  </InputLabel>
                  <TextInput
                    type="text"
                    name="item_name"
                    id="req_name"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-700"
                    placeholder="Request Title"
                    value={data.item_name}
                    disabled={auth.user.role === "requester"}
                    onChange={(e) => setData("item_name", e.target.value)}
                  />
                  <InputError className="mt-2" message={errors.item_name} />
                </div>
                <div className="md:col-span-5 text-gray-200">
                  <InputLabel className="text-gray-200" htmlFor="req_desc">
                    Request Description
                  </InputLabel>
                  <TextAreaInput
                    name="description"
                    id="req_desc"
                    className="h-20 border mt-1 rounded px-4 w-full bg-gray-900"
                    placeholder="Request Description"
                    value={data.description}
                    disabled={auth.user.role === "requester"}
                    onChange={(e) => setData("description", e.target.value)}
                  />
                  <InputError className="mt-2" message={errors.description} />
                </div>

                <div className="md:col-span-1 text-gray-200">
                  <InputLabel className="text-gray-200" htmlFor="quantity">
                    Quantity
                  </InputLabel>
                  <TextInput
                    type="number"
                    name="quantity"
                    id="quantity"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-700"
                    value={data.quantity}
                    disabled={auth.user.role === "requester"}
                    min="1"
                    placeholder="Quantity"
                    onChange={(e) => setData("quantity", e.target.value)}
                  />
                  <InputError className="mt-2" message={errors.quantity} />
                </div>

                <div className="md:col-span-4">
                  <InputLabel className="text-gray-200" htmlFor="status">
                    status
                  </InputLabel>
                  <SelectInput
                    name="status"
                    id="status"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-700"
                    value={data.status}
                    onChange={(e) => setData("status", e.target.value)}
                  >
                    <option value="">Status</option>
                    {statusOptions.map((option) => (
                      <option key={option} value={option}>
                        {option.toUpperCase()}
                      </option>
                    ))}
                    {/* <option value="fulfilled">Fulfilled</option>
                          <option value="accepted">Accepted</option>
                          <option value="rejected">Rejected</option>
                          <option value="pending">Pending</option>
                          <option value="stalled">Stalled</option>
                          <option value="inprogress">In progress</option> */}
                  </SelectInput>
                </div>
                {auth.user.role === "treasury" && (
                  <div className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center ps-3">
                      <input
                        id="purchaser_check"
                        type="checkbox"
                        checked={data.forward_to_purchaser === '1'}
                        onChange={(e) => setData("forward_to_purchaser", e.target.checked ? '1' : '0')}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      {/* {console.log(data.forward_to_purchaser)}
                      {console.log(data)} */}

                      <label
                        htmlFor="purchaser_check"
                        className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Forward To Purchaser
                      </label>
                    </div>
                  </div>
                )}
                {auth.user.role === "purchaser" && (
                  <div className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center ps-3">
                      <input
                        id="requester_check"
                        type="checkbox"
                        checked={data.forward_to_requester === '1'}
                        onChange={(e) => setData("forward_to_requester", e.target.checked ? '1' : '0')}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        htmlFor="requester_check"
                        className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Forward To Requester
                      </label>
                    </div>
                  </div>
                )}

                <div className="md:col-span-5 text-right">
                  <div className="inline-flex items-end">
                    <div className="flex justify-between items-center">
                      <button
                        type="submit"
                        className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
                      >
                        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-[#274060]  to-[#1B2845] group-hover:opacity-100"></span>
                        {/* <!-- Top glass gradient --> */}
                        <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                        {/* <!-- Bottom gradient --> */}
                        <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                        {/* <!-- Left gradient --> */}
                        <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                        {/* <!-- Right gradient --> */}
                        <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                        <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                        <span className="relative">Submit Request </span>
                      </button>
                      <Link
                        href={route("request.index")}
                        className="relative inline-flex items-center mx-4 justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
                      >
                        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-[#274060]  to-[#1B2845] group-hover:opacity-100"></span>
                        {/* <!-- Top glass gradient --> */}
                        <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                        {/* <!-- Bottom gradient --> */}
                        <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                        {/* <!-- Left gradient --> */}
                        <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                        {/* <!-- Right gradient --> */}
                        <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                        <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                        <span className="relative">Cancel </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Authenticated>
  );
};

export default Edit;
