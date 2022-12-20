import React from "react";

const Statistic02 = () => {
  return (
    <>
      <h1 className="text-xl text-black font-bold mx-4 my-6 sm:my-2">
        Statistic
      </h1>
      <main className="mx-4 bg-[#f7f7f8] sm:w-[47.5rem]">
        <div className=" flex justify-between p-2 -mb-5">
          <h1 className="font-semibold">Invest/ROI</h1>
          <select className="outline-none rounded-sm" name="" id="">
            <option value="">Monthly</option>
            <option value="">Weekly</option>
            <option value="">Yearly</option>
          </select>
        </div>
        <div className="relative p-2">
          <div className="flex flex-col items-center w-full max-w-screen-md pb-6 mt-10 px-12 sm:px-20 bg-transparent sm:p-8">
            <div className="flex items-end w-full mt-2 justify-between">
              <div className="relative flex flex-col items-center pb-5 group">
                <div className="flex items-end w-full gap-2">
                  <div className="relative flex justify-center h-14 w-2 bg-red-500"></div>
                  <div className="relative flex justify-center h-16 w-2 bg-[#32a693]"></div>
                </div>
                <span className="absolute bottom-0 text-xs text-[#969699]">
                  Jan
                </span>
              </div>
              <div className="relative flex flex-col items-center pb-5 group">
                <div className="flex items-end w-full gap-2">
                  <div className="relative flex justify-center h-12 w-2 bg-red-500"></div>
                  <div className="relative flex justify-center h-20 w-2 bg-[#32a693]"></div>
                </div>
                <span className="absolute bottom-0 text-xs text-[#969699]">
                  Feb
                </span>
              </div>
              <div className="relative flex flex-col items-center pb-5 group">
                <div className="flex items-end w-full gap-2">
                  <div className="relative flex justify-center h-24 w-2 bg-red-500"></div>
                  <div className="relative flex justify-center h-36 w-2 bg-[#32a693]"></div>
                </div>
                <span className="absolute bottom-0 text-xs text-[#969699]">
                  Mar
                </span>
              </div>
              <div className="relative flex flex-col items-center  pb-5 group">
                <div className="flex items-end w-full gap-2">
                  <div className="relative flex justify-center h-6 w-2 bg-red-500"></div>
                  <div className="relative flex justify-center h-24 w-2 bg-[#32a693]"></div>
                </div>
                <span className="absolute bottom-0 text-xs text-[#969699]">
                  Apr
                </span>
              </div>
              <div className="relative hidden  sm:flex flex-col items-center  pb-5 group">
                <div className="flex items-end w-full gap-2">
                  <div className="relative flex justify-center h-12 w-2 bg-red-500"></div>
                  <div className="relative flex justify-center h-24 w-2 bg-[#32a693]"></div>
                </div>
                <span className="absolute bottom-0 text-xs text-[#969699]">
                  May
                </span>
              </div>
              <div className="relative hidden  sm:flex flex-col items-center  pb-5 group">
                <div className="flex items-end w-full gap-2">
                  <div className="relative flex justify-center h-6 w-2 bg-red-500"></div>
                  <div className="relative flex justify-center h-24 w-2 bg-[#32a693]"></div>
                </div>
                <span className="absolute bottom-0 text-xs text-[#969699]">
                  Jun
                </span>
              </div>
              <div className="relative  hidden  sm:flex flex-col items-center  pb-5 group">
                <div className="flex items-end w-full gap-2">
                  <div className="relative flex justify-center h-6 w-2 bg-red-500"></div>
                  <div className="relative flex justify-center h-24 w-2 bg-[#32a693]"></div>
                </div>
                <span className="absolute bottom-0 text-xs text-[#969699]">
                  Jul
                </span>
              </div>
              <div className="relative hidden  sm:flex flex-col items-center  pb-5 group">
                <div className="flex items-end w-full gap-2">
                  <div className="relative flex justify-center h-6 w-2 bg-red-500"></div>
                  <div className="relative flex justify-center h-32 w-2 bg-[#32a693]"></div>
                </div>
                <span className="absolute bottom-0 text-xs text-[#969699]">
                  Aug
                </span>
              </div>

              <div className="relative hidden  sm:flex flex-col items-center  pb-5 group">
                <div className="flex items-end w-full gap-2">
                  <div className="relative flex justify-center h-16 w-2 bg-red-500"></div>
                  <div className="relative flex justify-center h-24 w-2 bg-[#32a693]"></div>
                </div>
                <span className="absolute bottom-0 text-xs text-[#969699]">
                  Sept
                </span>
              </div>
              <div className="relative hidden  sm:flex flex-col items-center  pb-5 group">
                <div className="flex items-end w-full gap-2">
                  <div className="relative flex justify-center h-10 w-2 bg-red-500"></div>
                  <div className="relative flex justify-center h-24 w-2 bg-[#32a693]"></div>
                </div>
                <span className="absolute bottom-0 text-xs text-[#969699]">
                  Oct
                </span>
              </div>
              <div className="relative hidden  sm:flex flex-col items-center  pb-5 group">
                <div className="flex items-end w-full gap-2">
                  <div className="relative flex justify-center h-12 w-2 bg-red-500"></div>
                  <div className="relative flex justify-center h-32 w-2 bg-[#32a693]"></div>
                </div>
                <span className="absolute bottom-0 text-xs text-[#969699]">
                  Nov
                </span>
              </div>
              <div className="relative hidden  sm:flex flex-col items-center  pb-5 group">
                <div className="flex items-end w-full gap-2">
                  <div className="relative flex justify-center h-6 w-2 bg-red-500"></div>
                  <div className="relative flex justify-center h-28 w-2 bg-[#32a693]"></div>
                </div>
                <span className="absolute bottom-0 text-xs text-[#969699]">
                  Dec
                </span>
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
          <div className="absolute top-11 text-[#88888c]">
            {/* <div className="flex mb-6">
              <p className="">$5000</p>
              <p className="ml-4">
                -----------------------------------------------------
              </p>
            </div>
            <div className="flex my-6">
              <p className="p">$1000</p>
              <p className="ml-4">
                -----------------------------------------------------
              </p>
            </div>
            <div className="flex my-6">
              <p className="p">$500</p>
              
            </div>
            <div className="flex my-6">
              <p className="p">$0</p>
              
            </div> */}
            <p className="sm:mt-6">$ 5000</p>
            <p className="my-6">$ 1000</p>
            <p className="my-6">$ 500</p>
            <p className="mt-6">$ 0</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Statistic02;
