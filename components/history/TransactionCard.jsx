import React from "react";

const TransactionCard = ({ acc_no, amt, date, bank }) => {
  return (
    <div className="flex border-b justify-between">
      <div className="flex items-center">
        <img
          className="hidden sm:flex bg-[#d3efe3] h-6 w-6 p-1"
          src="received.svg"
          alt=""
        />
        <p className="w-full p-3 sm:text-sm">
          {acc_no}
          <br />
          <span className="text-xs text-[#88888c]">{bank}</span>
        </p>
      </div>

      <p className="w-full p-3 sm:text-sm text-center">
        {date}
        <br />
        <span className="text-xs text-[#88888c]">11:25 AM</span>
      </p>
      <p className="w-full p-3 text-green-600 sm:text-sm text-center">${amt}</p>
    </div>
  );
};

export default TransactionCard;
