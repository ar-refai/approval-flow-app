import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import React from "react";

const Edit = ({ auth, user }) => {
  // console.log(user);
  const { data, setData, put, errors, reset } = useForm({
    id: user.data.id || "",
    name: user.data.name || "",
    email: user.data.email || "",
    role: user.data.role || "",
    password: user.data.password || "",
    password_confirmation: user.data.password_confirmation || "",
    _method: "PUT"
  });
  // console.log(errors)

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log("Submitted");
    put(route("user.update", user.data.id));
  };

  return (
    <Authenticated
      user={auth.user}
      className="h-screen"
      header={
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-500 leading-tight">
            Edit User :<p className="indent-3">{user.data.item_name}</p>
          </h2>
        </div>
      }
    >
      <Head title="Users" />
      <div className=" !h-[calc(100vh-64px-74px);] flex justify-center items-center">
        <div className="bg-gray-800   rounded shadow-lg p-4 px-4 md:p-8 mb-6 container mx-auto flex  justify-center items-center">
          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div className="text-gray-200 text-center flex flex-col items-center justify-center">
              <p className="font-bold tracking-wide  text-3xl uppercase ">
                User Details{" "}
              </p>
              <p>Please fill out all the fields.</p>
            </div>

            <div className=" lg:col-span-2 text-gray-200">

            <form
              onSubmit={onSubmit}
              className="grid gap-4 lg:gap-y-12 lg:mt-12 items-center gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-5">
                  <InputLabel className="text-gray-200" htmlFor="user_name">
                    User Name
                  </InputLabel>
                  <TextInput
                    type="text"
                    name="name"
                    id="user_name"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-700"
                    placeholder="User Name"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                  />
                  <InputError className="mt-2" message={errors.name} />
                </div>
                <div className="md:col-span-5 text-gray-200">
                  <InputLabel className="text-gray-200" htmlFor="user_email">
                    User Email
                  </InputLabel>
                  <TextInput
                    type="email"
                    name="email"
                    id="user_email"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-700"
                    placeholder="User Email "
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                  />
                  <InputError className="mt-2" message={errors.email} />
                </div>
                <div className="md:col-span-5">
                  <InputLabel className="text-gray-200" htmlFor="password">
                    Password
                  </InputLabel>
                  <TextInput
                    type="password"
                    name="password"
                    id="password"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-700"
                    placeholder="Password"
                    value={data.password}
                    onChange={(e) => setData("password", e.target.value)}
                  />
                  <InputError className="mt-2" message={errors.password} />
                </div>
                <div className="md:col-span-5">
                  <InputLabel className="text-gray-200" htmlFor="password_confirmation">
                    Password Confirmation
                  </InputLabel>
                  <TextInput
                    type="password"
                    name="password_confirmation"
                    id="password_confirmation"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-700"
                    placeholder="Password Confirmation"
                    value={data.password_confirmation}
                    onChange={(e) => setData("password_confirmation", e.target.value)}
                  />
                  <InputError className="mt-2" message={errors.password_confirmation} />
                </div>
                <div className="md:col-span-1 text-gray-200">
                  <InputLabel className="text-gray-200" htmlFor="role">
                    Role
                  </InputLabel>
                  <SelectInput
                    type="number"
                    name="role"
                    id="role"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-700"
                    value={data.role}
                    placeholder="Role"
                    onChange={(e) => setData("role", e.target.value)}
                  >
                          <option value="">Role</option>
                          <option value="admin">Admin</option>
                          <option value="purchaser">Purchaser</option>
                          <option value="treasury">Treasury</option>
                          <option value="requester">Requester</option>

                    </SelectInput>
                  <InputError className="mt-2" message={errors.role} />

              </div>


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
                        <span className="relative">Submit User </span>
                      </button>
                      <Link
                              href={route("user.index")}
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
