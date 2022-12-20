import React from "react";
import PopularQuestion from "../questions/PopularQuestion";

const Questions = () => {
  return (
    <div className="bg-[#F7F7F8] w-auto hidden md:block h-auto py-6 sticky top-16">
      <div className="text-2xl font-bold p-5">Popular Questions</div>
      <PopularQuestion qustion="Will Donald Trump run for the next US Presidential Election? Predict " />
      <PopularQuestion qustion="Will Joe Biden resign as President ofUS by 2023? " />
      <PopularQuestion qustion="Will France retain Men's WorldcupFootball title in 2022? " />
    </div>
  );
};

export default Questions;
