import React from "react";
import Card from "./Card";

const Summary = () => {
  return (
    <>
      <div className="w-full">
        <h1 className=" m-4 text-xl font-bold">Summary</h1>
        <div className="sm:flex">
          <div className="flex sm:flex-col mx-4 gap-3 bg-[#e0e6f2] p-3 my-4">
            <Card
              image="../images/image 146.svg"
              name="Total Investment"
              rate="$5,000.00"
            />
          </div>
          <div className="flex sm:flex-col mx-4 gap-3 bg-[#ffeeee] p-3 my-4">
            <Card
              image="../images/image 149.svg"
              name="Total ROI"
              rate="$3,000.00"
            />
          </div>
          <div className="flex sm:flex-col mx-4 gap-3 bg-[#e8fef0] p-3 my-4">
            <Card
              image="../images/image 150.svg"
              name="Growth (in per)"
              rate="65%"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
