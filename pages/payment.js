import React from "react";
import SideNavBar from "../components/static/SideNavBar";
import SearchBar from "../components/static/SearchBar";
import PaymentPage from "../components/payment/PaymentPage";

const Payment = () => {
  return (
    <>
      <div className="sm:flex">
        <SideNavBar />
        <div className="w-full">
          <SearchBar />
          <div className="flex sm:flex-row flex-col">
            <PaymentPage />
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
