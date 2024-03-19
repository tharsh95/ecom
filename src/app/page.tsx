import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex h-[80vh] items-center justify-center">
      <div className="w-2/5 rounded-3xl p-8 border-2 border-gray-500">
        <div className="flex items-center flex-col ">
          <h1 className="text-2xl mt-4 font-semibold">Create your account</h1>
          
        </div>
        <form className="flex justify-center flex-col items-center">
          <div className="mb-4 w-3/4 ">
            <label
              htmlFor="name"
              className="block  text-gray-700 "
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter"
              className="focus:shadow-outline w-full rounded-lg border p-4 leading-tight text-gray-700 focus:outline-none"
            />
          </div>
          <div className="mb-4 w-3/4 ">
            <label
              htmlFor="email"
              className="block  text-gray-700 "
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter"
              className="focus:shadow-outline w-full rounded-lg border p-4 leading-tight text-gray-700 focus:outline-none"
            />
          </div>
          <div className="mb-4 w-3/4 ">
            <label
              htmlFor="name"
              className="block  text-gray-700 "
            >
              Password
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter"
              className="focus:shadow-outline w-full rounded-lg border p-4 leading-tight text-gray-700 focus:outline-none"
            />
          </div>
          <div className="mb-8">
            <button className="bg-black text-white p-4 w-[24rem] rounded-xl">SIGN UP</button>
          </div>
        </form>
        <div className="flex flex-col items-center">

        <div className="border-gray-500 mb-4 border-[1.4px] w-3/4"></div>
        <div>Have an account?<Link className="ml-4" href="/login">LOGIN</Link></div>
        </div>
      </div>
    </div>
  );
};

export default page;
