import React, { useState } from "react";
import { useRouter } from "next/router";
import { RiCloseFill } from "react-icons/ri";
import { TfiAlignRight } from "react-icons/tfi";
import { BsFillPatchCheckFill } from "react-icons/bs";

const SideNavBar = () => {
  //
  const router = useRouter();

  const [mobileMenu, setMobileMenu] = useState(false);

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <main className="sm:flex flex-col bg-[#f7f7f8] gap-4 w-[18%] h-screen hidden sticky top-0">
        <div className="">
          <img className="w-16 h-auto m-4" src="peg.png" alt="" />
        </div>
        <div
          onClick={() => {
            router.push("/eventpage");
          }}
          className="flex items-center pl-3 py-1 group hover:bg-[#32a693] transition ease-out duration-200 "
        >
          <img className="w-5 h-auto " src="../logos/ticket-star.png" alt="" />
          <p className="pl-3 text-[#88888c] text-base group-hover:text-white">
            All Events
          </p>
        </div>
        <div className="flex items-center pl-3 py-1 group hover:bg-[#32a693] transition ease-out duration-200">
          <img className="w-5 h-auto " src="../logos/flash.png" alt="" />
          <p className="pl-3 text-[#88888c] text-base group-hover:text-white">
            Trending
          </p>
        </div>
        <div className="flex items-center pl-3 py-1 group hover:bg-[#32a693] transition ease-out duration-200">
          <img className="w-5 h-auto " src="../logos/element-plus.png" alt="" />
          <p className="pl-3 text-[#88888c] text-base group-hover:text-white">
            Categories
          </p>
        </div>
        <div className="flex items-center pl-3 py-1 group  hover:bg-[#32a693] transition ease-out duration-200">
          <img className="w-5 h-auto " src="../logos/heart.png" alt="" />
          <p className="pl-3 text-[#88888c] text-base group-hover:text-white">
            Favourite
          </p>
        </div>
        {/* routing function wallet page */}
        <div
          onClick={() => {
            router.push("/walletpage");
          }}
          className="flex items-center pl-3 py-1 group hover:bg-[#32a693] transition ease-out duration-200"
        >
          <img className="w-5 h-auto " src="../logos/wallet.png" alt="" />
          <p className="pl-3 text-[#88888c] text-base group-hover:text-white">
            Wallet
          </p>
        </div>
        {/* routing function investment page */}
        <div
          onClick={() => {
            router.push("/");
          }}
          className="flex items-center pl-3 py-1 group hover:bg-[#32a693] transition ease-in-out duration-300"
        >
          <img className="w-5 h-auto " src="../logos/chart.svg" alt="" />
          <p className="pl-3 text-[#88888c] text-base group-hover:text-white">
            Investment History
          </p>
        </div>
        <div
          onClick={() => {
            router.push("/settingspage");
          }}
          className="flex items-center pl-3 py-1 group  hover:bg-[#32a693] transition ease-in-out duration-200"
        >
          <img className="w-5 h-auto " src="../logos/setting-2.png" alt="" />
          <p className="pl-3 text-[#88888c] text-base group-hover:text-white">
            Settings
          </p>
        </div>
        <div
          onClick={() => {
            setShowModal(!showModal);
          }}
          className="flex items-center pl-3 py-1 mt-39 cursor-pointer"
        >
          <img className="w-5 h-auto " src="../logos/export.svg" alt="" />
          <p className="pl-3 text-red-500 text-base ">Log out</p>
        </div>
      </main>

      {/* mobile nav */}
      {mobileMenu ? null : (
        <TfiAlignRight
          onClick={() => setMobileMenu(!mobileMenu)}
          className="absolute sm:hidden block top-11 right-1 w-8 h-10 mr-4 text-black cursor-pointer z-20 ease-in-out duration-500 "
        />
      )}
      <div
        className={`fixed top-0 h-screen w-[72%] bg-[#f7f7f8] z-10 sm:hidden transition-all ease-in-out duration-300 ${
          mobileMenu ? "left-0" : "-left-full"
        }`}
      >
        <RiCloseFill
          onClick={() => setMobileMenu(!mobileMenu)}
          className="absolute sm:hidden block top-11 right-0 w-10 h-10 mr-2 text-black cursor-pointer z-20 ease-in-out duration-500"
        />
        <div className="bg-[#f7f7f8] my-[8rem] flex flex-col gap-6  ">
          <div className="flex items-center pl-6 py-1 group hover:bg-[#32a693] transition ease-out duration-200 ">
            <img
              className="w-5 h-auto "
              src="../logos/ticket-star.png"
              alt=""
            />
            <p
              onClick={() => {
                router.push("/eventpage");
              }}
              className="pl-3 text-[#88888c] text-base group-hover:text-white"
            >
              All Events
            </p>
          </div>
          <div className="flex items-center pl-6 py-1 group hover:bg-[#32a693] transition ease-out duration-200">
            <img className="w-5 h-auto " src="../logos/flash.png" alt="" />
            <p className="pl-3 text-[#88888c] text-base group-hover:text-white">
              Trending
            </p>
          </div>
          <div className="flex items-center pl-6 py-1 group hover:bg-[#32a693] transition ease-out duration-200">
            <img
              className="w-5 h-auto "
              src="../logos/element-plus.png"
              alt=""
            />
            <p className="pl-3 text-[#88888c] text-base group-hover:text-white">
              Categories
            </p>
          </div>
          <div className="flex items-center pl-6 py-1 group  hover:bg-[#32a693] transition ease-out duration-200">
            <img className="w-5 h-auto " src="../logos/heart.png" alt="" />
            <p className="pl-3 text-[#88888c] text-base group-hover:text-white">
              Favourite
            </p>
          </div>
          {/* routing function wallet page */}
          <div
            onClick={() => {
              router.push("/walletpage");
            }}
            className="flex items-center pl-6 py-1 group hover:bg-[#32a693] transition ease-out duration-200"
          >
            <img className="w-5 h-auto " src="../logos/wallet.png" alt="" />
            <p className="pl-3 text-[#88888c] text-base group-hover:text-white">
              Wallet
            </p>
          </div>
          {/* routing function investment page */}
          <div
            onClick={() => {
              router.push("/");
            }}
            className="flex items-center pl-6 py-1 group hover:bg-[#32a693] transition ease-out duration-200"
          >
            <img className="w-5 h-auto " src="../logos/chart.svg" alt="" />
            <p className="pl-3 text-[#88888c] text-base group-hover:text-white">
              Investment History
            </p>
          </div>
          <div
            onClick={() => {
              router.push("/settingspage");
            }}
            className="flex items-center pl-6 py-1 group  hover:bg-[#32a693] transition ease-out duration-200"
          >
            <img className="w-5 h-auto " src="../logos/setting-2.png" alt="" />
            <p className="pl-3 text-[#88888c] text-base group-hover:text-white">
              Settings
            </p>
          </div>
        </div>
      </div>
      {/* mobile nav */}
      <main className="flex flex-col sm:hidden  w-full">
        <div className="flex items-center gap-20 mt-10 mx-4">
          <img
            className="w-20 ease-in-out duration-300 h-auto"
            src="peg.png"
            alt=""
          />
          <p className="font-bold text-xl">My Wallet</p>
        </div>
        <div className=" h-14 rounded-sm bg-[#f9f9f9] flex items-center px-1 py-4 gap-4 mx-4 my-6">
          <img className="ml-2 w-6 h-auto" src="search-normal.svg" alt="" />
          <input
            className="text-[#88888c] text-base outline-none bg-[#f9f9f9]"
            placeholder="Search"
          />
        </div>
      </main>

      {/*     modal */}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none h-full">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="rounded-sm shadow-lg relative flex flex-col bg-white items-end">
                <div className="relative p-6 flex flex-col items-center gap-2 px-0">
                  <img
                    className="w-14 h-auto "
                    src="../logos/export.svg"
                    alt=""
                  />
                  <p className="font-bold text-lg w-[70%] text-center">
                    Are you sure you want to Logout from PEG?
                  </p>
                  <div className="flex w-full justify-evenly my-4">
                    <button
                      onClick={() => {
                        setShowModal(!showModal);
                      }}
                      className="border w-[8rem] border-[#32a693] text-[#32a693] hover:bg-[#32a693] hover:text-white my-2 py-4 sm:py-2 transition ease-out duration-300"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => {
                        setShowModal(!showModal);
                      }}
                      className="bg-[#32a693] w-[8rem] text-white my-2 py-4 sm:py-2 hover:text-[#32a693] hover:bg-transparent transition ease-out duration-300 border border-[#32a693]"
                    >
                      Yes
                    </button>
                  </div>
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

export default SideNavBar;
