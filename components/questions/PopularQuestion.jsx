import React from "react";

const PopularQuestion = ({ qustion }) => {
  return (
    <div className="flex p-2 bg-[#fff] m-2 flex-col  gap-4">
      <div className="flex">
        <p className="bg-[#E0F2EF] p-3 text-xs text-green-600">Q.</p>
        <p className="text-xs font-medium px-3">{qustion}</p>
      </div>
      <div className="flex text-xs items-center justify-between">
        <p className="text-[#88888C]">
          Volume:
          <br /> <span className="text-black">$25k</span>
        </p>
        <p className="text-[#88888C]">
          Ends In:
          <br />
          <span className="text-black">10:00,22 July 2022</span>
        </p>
        <button className="bg-[#32A693] w-16 h-6 text-white text-sm">
          Predict
        </button>
      </div>
    </div>
  );
};

export default PopularQuestion;
