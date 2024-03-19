import React from "react";

const Header = () => {
  return (
    <>
      <div className="m-4">
        <div className="flex justify-end">
          <ul className="flex w-[15rem] justify-between text-xs text-gray-600">
            <li>Help</li>
            <li>Orders & Return</li>
            <li>Hi, John</li>
          </ul>
        </div>
        <div className="mt-4 flex justify-between">
          <div className="text-3xl font-bold">
            <h1>ECOMMERCE</h1>
          </div>
          <ul className="flex w-1/3 items-center justify-between font-semibold ">
            <li>Categories</li>
            <li>Sale</li>
            <li>Clearance</li>
            <li>New Stock</li>
            <li>Trending</li>
          </ul>
          <ul className="flex w-[10rem] items-center justify-between">
            <li>Search</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
      <div className="mt-4 h-[2rem] w-screen flex items-center justify-center bg-[#e3e2e2]">

        <h1>Get 10% of business Sign-Up</h1>
      </div>
    </>
  );
};

export default Header;
