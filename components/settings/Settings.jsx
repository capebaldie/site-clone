import React from "react";

const Settings = () => {
  return (
    <>
      <main className="mx-4">
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex group border-2 gap-2 p-2 sm:w-[20rem] w-full hover:border-[#32a693]">
            <img src="notification-bing.svg" alt="" />
            <p className="text-[#88888c]  group-hover:text-[#32a693]">
              Notification Settings
            </p>
          </div>
          <div className="flex border-2 gap-2 p-2 sm:w-[20rem] w-full hover:border-[#32a693] group">
            <img src="user-tag.svg" alt="" />
            <p className="text-[#88888c] group-hover:text-[#32a693]">
              Account Settings
            </p>
          </div>
          <div className="flex border-2 gap-2 p-2 sm:w-[20rem] w-full hover:border-[#32a693] group">
            <img src="wallet-check.svg" alt="" />
            <p className="text-[#88888c] group-hover:text-[#32a693]">
              Payment Method
            </p>
          </div>
          <div className="flex border-2 gap-2 p-2 sm:w-[20rem] w-full hover:border-[#32a693] group">
            <img className="" src="danger.svg" alt="" />
            <p className="text-[#88888c] group-hover:text-[#32a693]">
              Permissions
            </p>
          </div>
          <div className="flex border-2 gap-2 p-2 w-[20rem]  hover:border-[#32a693] group">
            <img src="crown.svg" alt="" />
            <p className="text-[#88888c] group-hover:text-[#32a693]">
              Pro Account
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Settings;
