import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { useRouter } from "next/router";

const Withdraw = () => {
  //
  const [check, setCheck] = useState(false);

  const router = useRouter();

  const handleCheck = () => {
    setCheck(!check);
  };
  return (
    <main className="mx-4 sm:mx-0">
      <h1 className="font-bold text-xl py-4 sm:hidden">
        Add Money to your account
      </h1>
      <div className="a">
        <input
          className="focus:outline-none px-4 py-3 w-full bg-transparent border border-[#88888c] rounded-sm text-lg sm:mt-4"
          type="text"
          placeholder="Add Amount"
        />
        <p className="text-xs text-center text-[#88888c] my-2">
          5% of your withdrawal amount will be charged as charges.
        </p>
        <div className="flex items-center justify-evenly gap-4 border rounded-sm border-[#88888c] p-3 my-3 hover:border-green-600 cursor-pointer focus:ring-violet-300">
          <img className="bg-[#e6f2f0] p-4" src="bank.svg" alt="" />
          <p className="w-full">
            Bank of West Field <br />{" "}
            <span className="text-[#88888c]">**** **** **** 2356</span>
          </p>
          <BsCheckCircleFill
            onClick={handleCheck}
            className={`w-7 h-auto ${
              check ? "text-green-600" : "text-gray-600"
            }`}
          />
        </div>
        <div className="flex items-center justify-evenly gap-4 border rounded-sm border-[#88888c] p-3 my-3 hover:border-green-600 cursor-pointer">
          <img className="bg-[#e6f2f0] p-4" src="paypal.svg" alt="" />
          <p className="w-full">
            Paypal Account <br />
            <span className="text-[#88888c]">johnson@john.com</span>
          </p>
          <BsCheckCircleFill
            onClick={handleCheck}
            className={`w-7 h-auto ${
              check ? "text-green-600" : "text-gray-600"
            }`}
          />
        </div>
        <p
          onClick={() => {
            router.push("/payment");
          }}
          className="hover:underline text-[#32a693] my-4 cursor-pointer"
        >
          + Add New Account
        </p>
        <button className="bg-[#32a693] text-white my-2 py-4 hover:text-[#32a693] hover:bg-transparent transition ease-out duration-200 border border-[#32a693] w-full">
          Confirm
        </button>
      </div>
    </main>
  );
};

export default Withdraw;
