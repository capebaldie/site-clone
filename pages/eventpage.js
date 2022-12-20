import React from "react";
import SideNavBar from "../components/static/SideNavBar";
import SearchBar from "../components/static/SearchBar";
import Questions from "../components/questions/Questions";
import AllEvents from "../components/events/AllEvents";

const EventPage = () => {
  return (
    <>
      <div className="sm:flex">
        <SideNavBar />
        <div className="w-full">
          <SearchBar />
          <div className="flex">
            <div>
              <AllEvents />
            </div>
            <div>
              <Questions />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventPage;
