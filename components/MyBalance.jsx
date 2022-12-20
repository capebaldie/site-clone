import React from "react";

const MyBalance = () => {
  return (
    <div>
      <h1 className="flex items-center justify-between mx-4 mt-2 text-xl font-bold">
        My Balance
      </h1>
      <main className="bg-[#32a693] mx-4 py-1 mt-4 flex relative rounded-sm">
        <img className="absolute top-0 right-0" src="Group.svg" alt="" />
        <div className="pl-6 pt-8 pb-4 text-white">
          <p className="text-3xl font-bold mb-1">$1000.00</p>
          <p className="text-base mb-2">Available Balance</p>
          <hr className="w-[50%]" />
          <p className="sm:text-base text-sm mt-2">
            Available To Withdraw Money
            <span className="ml-2 px-4 py-3 bg-white text-[#32a693] w-24 text-lg font-semibold hidden sm:inline rounded">
              $1000.00
            </span>
          </p>
        </div>
        <div className="flex flex-col absolute -right-2 bottom-8 sm:-bottom-0 sm:hover:bottom-1 ease-in-out duration-300">
          <img className="sm:w-48 sm:h-auto" src="wallet.svg" alt="" />
          <p className="px-1 py-1 bg-white text-[#32a693] w-20 text-base sm:hidden">
            $1000.00
          </p>
        </div>
      </main>
      <hr className="mx-4 mt-4 border border-[#f7f7f8] bg-[#f7f7f8]" />
    </div>
  );
};

export default MyBalance;
