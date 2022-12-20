import React from "react";

const PayementCard = ({ name, img, detail01, detail02 }) => {
  return (
    <main className="border p-3 m-3">
      <div className="flex gap-3 items-center justify-between">
        <div className="bg-[#e1eef5] px-6 py-8">
          <img className="w-20 h-6" src={img} alt="" />
        </div>
        <div className="flex flex-col w-full gap-2">
          <p className="font-bold">{name}</p>
          <p className="text-xs text-[#88888c]">• {detail01}</p>
          <p className="text-xs text-[#88888c]">• {detail02}</p>
        </div>
        <div className="hidden sm:inline">
          <button className="bg-transparent text-[#32a693] w-20 py-1 hover:text-white hover:bg-[#32a693] transition ease-out duration-300 border border-[#32a693] rounded-sm">
            Set Up
          </button>
        </div>
      </div>
      <button className="sm:hidden bg-transparent text-[#32a693] w-full py-2 mt-8 hover:text-white hover:bg-[#32a693] transition ease-out duration-300 border border-[#32a693] rounded-sm">
        Set Up
      </button>
    </main>
  );
};

export default PayementCard;
