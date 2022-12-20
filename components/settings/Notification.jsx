import React from "react";

const Notification = () => {
  return (
    <>
      <main className="hidden sm:block mx-4 bg-[#f7f7f8] mt-4">
        <h1 className="border-b py-2 text-lg font-bold mx-4">
          Notification Settings
        </h1>
        <p className="py-2 mx-4">Notification Preferences</p>
        <p className="text-sm text-[#88888c] mx-4">
          Receive the latest news, updates and gaming tutorials from us
        </p>
        <div className="flex items-center justify-between m-4">
          <div className="flex items-center">
            <label className="text-sm" htmlFor="">
              <input className="" type="checkbox" name="" id="" />
              News and Updates
              <p className="text-[#88888c] text-xs">
                Receive the latest news, updates and gaming tutorials from us.
              </p>
            </label>
          </div>
          <div className="flex">
            <label className="flex items-center mx-2 text-sm" htmlFor="">
              <input className="mr-1" type="checkbox" name="" id="" />
              Email
            </label>
            <label className="flex items-center mx-2 text-sm" htmlFor="">
              <input className="mr-1" type="checkbox" name="" id="" />
              Text Message <br />
            </label>
          </div>
        </div>
        <div className="flex items-center justify-between m-4">
          <div className="flex items-center">
            <label className="text-sm" htmlFor="">
              <input className="" type="checkbox" name="" id="" />
              Tips and Tutorials
              <p className="text-[#88888c] text-xs">
                Tips on getting more out of untitled.
              </p>
            </label>
          </div>
          <div className="flex">
            <label className="flex items-center mx-2 text-sm" htmlFor="">
              <input className="mr-1" type="checkbox" name="" id="" />
              Email
            </label>
            <label className="flex items-center mx-2 text-sm" htmlFor="">
              <input className="mr-1" type="checkbox" name="" id="" />
              Text Message <br />
            </label>
          </div>
        </div>
        <div className="flex items-center justify-between m-4">
          <div className="flex items-center">
            <label className="text-sm" htmlFor="">
              <input className="" type="checkbox" name="" id="" />
              User Research
              <p className="text-[#88888c] text-xs">
                Get involved in our beta testing program or participate in paid
                product user research,
              </p>
            </label>
          </div>
          <div className="flex">
            <label className="flex items-center mx-2 text-sm" htmlFor="">
              <input className="mr-1" type="checkbox" name="" id="" />
              Email
            </label>
            <label className="flex items-center mx-2 text-sm" htmlFor="">
              <input className="mr-1" type="checkbox" name="" id="" />
              Text Message <br />
            </label>
          </div>
        </div>
      </main>
    </>
  );
};

export default Notification;
