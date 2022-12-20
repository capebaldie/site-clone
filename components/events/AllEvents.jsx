import React from "react";
import live from "../../data/live";
import upcoming from "../../data/upcoming";
import sponsored from "../../data/sponsored";
import closed from "../../data/closed";

const AllEvents = () => {
  return (
    <main className="sm:w-[45rem] mx-4">
      {/* live */}
      <div className="flex items-center justify-between my-2">
        <p className="font-bold text-lg">Live</p>
        <p className="text-sm">View all</p>
      </div>
      <div className="flex">
        {live.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-1 border rounded p-2 m-1"
          >
            <img src={item.image} alt="" />
            <p className="text-sm">{item.topic}</p>
            <p className="text-xs text-[#88888c]">{item.quest}</p>
            <div className="flex justify-between items-center">
              <p className="text-xs">28 June,2022</p>
              <button className="bg-[#32A693] rounded w-16 h-6 text-white text-sm">
                Predict
              </button>
            </div>
          </div>
        ))}
      </div>
      {/*  upcoming */}
      <div className="flex items-center justify-between my-2">
        <p className="font-bold text-lg">Upcoming</p>
        <p className="text-sm">View all</p>
      </div>
      <div className="flex">
        {upcoming.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-1 border rounded p-2 m-1"
          >
            <img src={item.image} alt="" />
            <p className="text-sm">{item.topic}</p>
            <p className="text-xs text-[#88888c]">{item.quest}</p>
            <div className="flex justify-between items-center">
              <p className="text-xs">07 July,2022</p>
              <button className="bg-[#32A693] rounded w-16 h-6 text-white text-sm">
                Join Now
              </button>
            </div>
          </div>
        ))}
      </div>
      {/*  sponsored */}
      <div className="flex items-center justify-between my-2">
        <p className="font-bold text-lg">Sponsored</p>
        <p className="text-sm">View all</p>
      </div>
      <div className="flex">
        {sponsored.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-1 border rounded p-2 m-1"
          >
            <img src={item.image} alt="" />
            <p className="text-sm">{item.topic}</p>
            <p className="text-xs text-[#88888c]">{item.quest}</p>
            <div className="flex justify-between items-center">
              <p className="text-xs">07 July,2022</p>
              <button className="bg-[#32A693] rounded w-16 h-6 text-white text-sm">
                Predict
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* recently closed */}
      <div className="flex items-center justify-between my-2">
        <p className="font-bold text-lg">Recently Closed</p>
        <p className="text-sm">View all</p>
      </div>
      <div className="flex">
        {closed.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-1 border rounded p-2 m-1"
          >
            <img src={item.image} alt="" />
            <p className="text-sm">{item.topic}</p>
            <p className="text-xs text-[#88888c]">{item.quest}</p>
            <div className="flex justify-between items-center">
              <p className="text-xs">07 July,2022</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default AllEvents;
