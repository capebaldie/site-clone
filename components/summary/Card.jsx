import React from "react";

const Card = ({ name, image, rate }) => {
  return (
    <div className="flex gap-3">
      <div className="bg-white p-2">
        <img className="w-16 sm:w-14 h-auto" src={image} alt="" />
      </div>
      <div className="">
        <p className="text-lg">{name}</p>
        <p className="font-bold text-2xl sm:text-xl mt-2">{rate}</p>
      </div>
    </div>
  );
};

export default Card;
