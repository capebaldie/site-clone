import React from "react";

const Statistic = () => {
  return (
    <>
      <h1 className="text-xl mx-4 my-6 sm:my-2 font-bold">Statistic</h1>
      <main className="mx-4 bg-[#f7f7f8] sm:w-[40rem]">
        <div className=" flex justify-between p-2 -mb-5 sm:-mb-14">
          <h1 className="font-semibold">Invest/ROI</h1>
          <select className="outline-none rounded-sm" name="" id="">
            <option value="">Monthly</option>
            <option value="">Weekly</option>
            <option value="">Yearly</option>
          </select>
        </div>
        <div className="relative p-2">
          <div className="flex flex-col items-center w-full max-w-screen-md pb-6 mt-10 px-14 sm:px-24 bg-transparent sm:p-6">
            <div className="flex items-end w-full mt-2 justify-between">
              <div className="relative flex flex-col items-center pb-5 group">
                <div className="flex items-end w-full gap-2">
                  <div className="relative flex justify-center h-14 w-2 bg-red-500"></div>
                  <div className="relative flex justify-center h-16 w-2 bg-[#32a693]"></div>
                </div>
                <span className="absolute bottom-0 text-xs">January</span>
              </div>
              <div className="relative flex flex-col items-center pb-5 group">
                <div className="flex items-end w-full gap-2">
                  <div className="relative flex justify-center h-12 w-2 bg-red-500"></div>
                  <div className="relative flex justify-center h-20 w-2 bg-[#32a693]"></div>
                </div>
                <span className="absolute bottom-0 text-xs">February</span>
              </div>
              <div className="relative flex flex-col items-center pb-5 group">
                <div className="flex items-end w-full gap-2">
                  <div className="relative flex justify-center h-24 w-2 bg-red-500"></div>
                  <div className="relative flex justify-center h-36 w-2 bg-[#32a693]"></div>
                </div>
                <span className="absolute bottom-0 text-xs">March</span>
              </div>
              <div className="relative flex flex-col items-center  pb-5 group">
                <div className="flex items-end w-full gap-2">
                  <div className="relative flex justify-center h-6 w-2 bg-red-500"></div>
                  <div className="relative flex justify-center h-24 w-2 bg-[#32a693]"></div>
                </div>
                <span className="absolute bottom-0 text-xs">April</span>
              </div>
              <div className="relative hidden  sm:flex flex-col items-center  pb-5 group">
                <div className="flex items-end w-full gap-2">
                  <div className="relative flex justify-center h-12 w-2 bg-red-500"></div>
                  <div className="relative flex justify-center h-32 w-2 bg-[#32a693]"></div>
                </div>
                <span className="absolute bottom-0 text-xs">May</span>
              </div>
              <div className="relative hidden  sm:flex flex-col items-center  pb-5 group">
                <div className="flex items-end w-full gap-2">
                  <div className="relative flex justify-center h-16 w-2 bg-red-500"></div>
                  <div className="relative flex justify-center h-12 w-2 bg-[#32a693]"></div>
                </div>
                <span className="absolute bottom-0 text-xs">June</span>
              </div>
              <div className="relative  hidden  sm:flex flex-col items-center  pb-5 group">
                <div className="flex items-end w-full gap-2">
                  <div className="relative flex justify-center h-12 w-2 bg-red-500"></div>
                  <div className="relative flex justify-center h-28 w-2 bg-[#32a693]"></div>
                </div>
                <span className="absolute bottom-0 text-xs">July</span>
              </div>
            </div>
            <div className="flex mt-2 -mb-4 justify-center">
              <div className="flex items-center ml-auto">
                <span className="block w-4 h-2 bg-red-500"></span>
                <span className="ml-1 text-xs font-medium">Invest</span>
              </div>
              <div className="flex items-center ml-4">
                <span className="block w-4  h-2 bg-[#32a693]"></span>
                <span className="ml-1 text-xs font-medium">
                  Return of Investment
                </span>
              </div>
            </div>
          </div>
          <div className="absolute top-10 sm:top-16 text-[#88888c]">
            <p className="mb-6">$ 5000</p>
            <p className="my-6">$ 1000</p>
            <p className="my-6">$ 500</p>
            <p className="my-6">$ 0</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Statistic;
