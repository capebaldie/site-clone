import React from "react";
import SideNavBar from "../components/static/SideNavBar";
import SearchBar from "../components/static/SearchBar";
import Settings from "../components/settings/Settings";
import Notification from "../components/settings/Notification";

const Settingspage = () => {
  return (
    <>
      <div className="sm:flex">
        <SideNavBar />
        <div className="w-full">
          <SearchBar />
          <div className="flex">
            <Settings />
            <Notification />
          </div>
        </div>
      </div>
    </>
  );
};

export default Settingspage;
