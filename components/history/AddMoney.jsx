import React, { useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { useRouter } from "next/router";

const AddMoney = () => {
  //
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  return (
    <>
      <main className="mx-4">
        <h1 className="font-bold text-xl py-4">Add Money to your account</h1>
        <div className="grid grid-flow-row-dense grid-cols-2 py-4  gap-4 items-center justify-center">
          <p className="bg-[#e3efee] py-4 sm:py-1 border border-green-300 border-dashed text-center text-[#32a693]  text-xl">
            +10
          </p>
          <p className="bg-[#e3efee] py-4 sm:py-1 border border-green-300 border-dashed text-center text-[#32a693]  text-xl">
            +50
          </p>
          <p className="bg-[#e3efee] py-4 sm:py-1 border border-green-300 border-dashed text-center text-[#32a693]  text-xl">
            +100
          </p>
          <p className="bg-[#e3efee] py-4 sm:py-1 border border-green-300 border-dashed text-center text-[#32a693]  text-xl">
            +200
          </p>
          <p className="bg-[#e3efee] py-4 sm:py-1 border border-green-300 border-dashed text-center text-[#32a693]  text-xl">
            +500
          </p>
          <p className="bg-[#e3efee] py-4 sm:py-1 border border-green-300 border-dashed text-center text-[#32a693]  text-xl">
            +1000
          </p>
        </div>
        <div className="flex flex-col w-full my-4">
          <button
            onClick={() => {
              router.push("/addexmoneypage");
            }}
            className="border border-[#32a693] text-[#32a693] hover:bg-[#32a693] hover:text-white my-2 py-4 sm:py-2 transition ease-out duration-300"
          >
            Other
          </button>
          <button
            onClick={() => {
              setShowModal(!showModal);
            }}
            className="bg-[#32a693] text-white my-2 py-4 sm:py-2 hover:text-[#32a693] hover:bg-transparent transition ease-out duration-300 border border-[#32a693]"
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

export default AddMoney;
