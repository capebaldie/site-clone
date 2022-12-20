import React from "react";

const SearchBar = () => {
  return (
    <>
      <main className="sm:flex p-4 justify-between h-16 w-full hidden border-b  sticky top-0 bg-white z-10">
        <div className="border border-gray-300 h-10 w-80 flex items-center p-2 gap-4">
          <img className="w-5 h-auto" src="search-normal.svg" alt="" />
          <input
            className="text-[#88888c] text-lg outline-none"
            placeholder="Search"
          />
        </div>
        <div className="flex gap-4 items-center">
          <img
            className="w-10 h-10 border border-gray-300 px-1 shadow-sm rounded"
            src="notification-bing.svg"
            alt=""
          />
          <img
            className="w-10 h-10 border border-gray-300 shadow-sm rounded"
            src="Avatar-32 2.svg"
            alt=""
          />
          <div className="flex flex-col">
            <p>Johnson Smith</p>
            <p className="text-[#88888c] text-sm">$1000.00</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default SearchBar;
