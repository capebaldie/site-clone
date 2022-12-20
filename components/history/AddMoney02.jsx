import React, { useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { BsFillPatchCheckFill } from "react-icons/bs";

const AddMoney02 = () => {
  //
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <main className="mx-4">
        <h1 className="font-bold text-xl py-4">Add Money to your account</h1>
        <div className="">
          <input
            className="focus:outline-none px-4 py-3 w-full bg-transparent border border-[#88888c] rounded-sm text-lg sm:mt-4"
            type="text"
            placeholder="Add Amount"
          />
        </div>
        <div className="my-4">
          <button
            onClick={() => {
              setShowModal(!showModal);
            }}
            className="bg-[#32a693] text-white my-2 py-4 sm:py-2 hover:text-[#32a693] hover:bg-transparent transition ease-out duration-300 border border-[#32a693] w-full"
          >
            ADD
          </button>
        </div>
      </main>
      {/*     modal */}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none h-full">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="rounded-sm shadow-lg relative flex flex-col bg-white items-end">
                <button
                  onClick={() => {
                    setShowModal(!showModal);
                  }}
                  className="border p-1 m-2"
                >
                  <RiCloseFill />
                </button>
                <div className="relative p-6 flex flex-col items-center gap-2 px-12">
                  <BsFillPatchCheckFill className="text-[#32a693] w-12 h-auto" />
                  <p className="font-bold text-lg">Top up Sucessfull</p>
                  <p className="text-center text-sm text-[#88888c]">
                    Your current balance is <br /> $1700
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default AddMoney02;
