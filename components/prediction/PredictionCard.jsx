import React, { useState } from "react";

const PredictionCard = ({ image, topic, quest }) => {
  //
  const [accordian, setAccordian] = useState(false);

  const handleAccordian = () => {
    setAccordian(!accordian);
  };

  return (
    <main className="m-4 sm:m-0 p-3 bg-[#f7f7f8] sm:bg-transparent sm:border-b">
      <div className="flex flex-grow items-center sm:justify-evenly">
        <div className="">
          <img className="w-16 h-auto" src={image} alt="" />
        </div>
        <div className="flex flex-col ml-3 items-start justify-start sm:w-[50%]">
          <p className="text-[#32a693] font-semibold sm:text-sm">{topic}</p>
          <p className="text-sm sm:text-xs w-[90%] sm:w-auto mt-2 font-medium">
            {quest}
          </p>
          {/*  desktop */}
          <div className="sm:flex hidden my-3  sm:text-xs">
            <p className="text-[#88888c] mr-2">Volume: $25k</p>
            <p className="text-[#88888c] mx-2">Winning Pool: Yes</p>
            <p className="text-[#88888c] mx-2">25 june 2022</p>
          </div>
        </div>
        <div className="sm:flex hidden text-xs gap-4">
          <p className="text-[#88888c]">
            My Prediction: <br />
            <span className="font-bold text-black">NO</span>
          </p>
          <p className="text-[#88888c]">
            Investment: <br />
            <span className="font-bold text-black">$50.00</span>
          </p>
          <p className="text-[#88888c] mr-4">
            Return On Investment:
            <br /> <span className="font-bold text-black">$12.00</span>
          </p>
        </div>
      </div>
      {/*  mobile */}
      <div className="flex sm:hidden justify-between my-3">
        <p className="text-[#88888c]">
          Pool Size: <br /> <span className="font-bold">25k</span>
        </p>
        <p className="text-[#88888c]">
          Winning Pool: <br /> <span className="font-bold">Yes</span>
        </p>
        <p className="text-[#88888c] mr-4">
          Date:
          <br /> <span className="font-bold">25 june 2022</span>
        </p>
      </div>
      {/*  mobile */}
      <p
        onClick={handleAccordian}
        className="text-center font-bold text-[#32a693] hover:underline cursor-pointer sm:hidden"
      >
        {accordian ? "Show Less" : "Show More"}
      </p>
      <div
        className={`${
          accordian ? "flex" : "hidden"
        } justify-between my-3 transition ease-in-out duration-1000 sm:hidden`}
      >
        <p className="text-[#88888c]">
          My Prediction: <br /> <span className="font-bold text-black">NO</span>
        </p>
        <p className="text-[#88888c]">
          Investment: <br />{" "}
          <span className="font-bold text-black">$50.00</span>
        </p>
        <p className="text-[#88888c] mr-4">
          ROI:
          <br /> <span className="font-bold text-black">$12.00</span>
        </p>
      </div>
    </main>
  );
};

export default PredictionCard;
