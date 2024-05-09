import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import React from "react";

const Create = ({ auth }) => {
  const { data, setData, post, errors, reset } = useForm({
    user_id: "",
    item_name: "",
    description: "",
    quantity: "",
    status: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log("Form submitted");
    post(route("request.store"));
  };

  return (
    <Authenticated
      user={auth.user}
      className="h-screen"
      header={
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-500 leading-tight">
            Create New Request :
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
              className="grid gap-4 lg:gap-y-12 lg:mt-12 items-center gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-5">
                  <InputLabel className="text-gray-200" htmlhtmlFor="req_name">
                    Request Title
                  </InputLabel>
                  <TextInput
                    type="text"
                    name="item_name"
                    id="req_name"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-700"
                    placeholder="Request Title"
                    value={data.item_name}
                    onChange={(e) => setData("item_name", e.target.value)}
                  />
                  <InputError className="mt-2" message={errors.item_name} />
                </div>
                <div className="md:col-span-5 text-gray-200">
                  <InputLabel className="text-gray-200" htmlhtmlFor="req_desc">
                    Request Description
                  </InputLabel>
                  <TextAreaInput
                    name="description"
                    id="req_desc"
                    className="h-20 border mt-1 rounded px-4 w-full bg-gray-900"
                    placeholder="Request Description"
                    value={data.description}
                    onChange={(e) => setData("description", e.target.value)}
                  />
                  <InputError className="mt-2" message={errors.description} />
                </div>

                <div className="md:col-span-1 text-gray-200">
                  <InputLabel className="text-gray-200" htmlhtmlFor="quantity">
                    Quantity
                  </InputLabel>
                  <TextInput
                    type="number"
                    name="quantity"
                    id="quantity"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-700"
                    value={data.quantity}
                    min="1"
                    placeholder="Quantity"
                    onChange={(e) => setData("quantity", e.target.value)}
                  />
                  <InputError className="mt-2" message={errors.quantity} />
                </div>

                {/* <div className="md:col-span-4">
                <InputLabel className="text-gray-200" htmlhtmlFor="status">status</InputLabel>
                <SelectInput name="status" id="status" className="h-10 border mt-1 rounded px-4 w-full bg-gray-700"  >
                          <option value="">Status</option>
                          <option value="fulfilled">Fulfilled</option>
                          <option value="accepted">Accepted</option>
                          <option value="rejected">Rejected</option>
                          <option value="pending">Pending</option>
                          <option value="stalled">Stalled</option>
                          <option value="inprogress">In progress</option>
                </SelectInput>
              </div> */}

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

export default Create;
