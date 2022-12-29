import React, { useState } from "react";
import PredictionCard from "../prediction/PredictionCard";
import past from "../../data/past";
import LiveCard from "../prediction/liveCard";

const PastPrediction = () => {
  //
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="sm:flex">
        <div className="flex mx-4 my-6 gap-4 font-bold text-xl border-b-2">
          <p
            onClick={() => {
              setShow(false);
            }}
            className="hover:border-b-4 border-[#32a693]"
          >
            Past predictions
          </p>
          <p
            onClick={() => {
              setShow(true);
            }}
            className="hover:border-b-4 border-[#32a693]"
          >
            Live Investment
          </p>
        </div>
        <div className="flex mx-4 gap-3 justify-between pb-3">
          <div className="flex gap-2 bg-[#f7f7f8] p-2 sm:my-3 items-center">
            <img
              className="w-6 sm:w-8 h-auto"
              src="../logos/calendar.svg"
              alt=""
            />
            <p className="text-xs text-[#969699]">Start Date - End Date</p>
            <select className="rounded" name="" id="">
              <option value=""></option>
            </select>
          </div>
          <div className="flex gap-2 bg-[#f7f7f8] p-2 sm:pr-4 sm:my-3 items-center">
            <img
              className="w-6 sm:w-8 h-auto"
              src="../logos/arrow-3.svg"
              alt=""
            />
            <p className="text-xs text-[#969699]">Sort by</p>
            <select className="rounded" name="" id="">
              g<option value=""></option>
            </select>
          </div>
        </div>
      </div>
      {/* changing section in the page */}
      <main className="sm:w-[49.5rem]">
        {show
          ? past.map((item, index) => (
              <PredictionCard
                key={index}
                image={item.image}
                topic={item.topic}
                quest={item.quest}
              />
            ))
          : past.map((item, index) => (
              <LiveCard
                key={index}
                image={item.image}
                topic={item.topic}
                quest={item.quest}
              />
            ))}
      </main>
    </>
  );
};

export default PastPrediction;
