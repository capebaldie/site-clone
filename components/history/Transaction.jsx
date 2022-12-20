import React from "react";
import TransactionCard from "./TransactionCard";

const Transaction = () => {
  return (
    <>
      <div className="flex  justify-evenly items-center border-b py-2">
        <p className=" p-3 text-[rgb(136,136,140)]">Transaction</p>
        <div className="flex p-3 gap-2 px-6">
          <p className="text-[#88888c]">Date</p>
          <img src="../logos/calendar.svg" alt="" />
        </div>

        <div className="flex p-3 gap-2">
          <p className="text-[#88888c]">Cr/Dr</p>
          <img src="../logos/arrow-3.svg" alt="" />
        </div>
      </div>
      <TransactionCard
        acc_no="749374282637"
        amt="84"
        date="Jun 15,2022"
        bank="HDFCBank"
      />
      <TransactionCard
        acc_no="749374282637"
        amt="84"
        date="Jun 15,2022"
        bank="HDFCBank"
      />
      <TransactionCard
        acc_no="352637282637"
        amt="234"
        date="Jun 15,2022"
        bank="HDFCBank"
      />
      <TransactionCard
        acc_no="749374282637"
        amt="84"
        date="Jun 15,2022"
        bank="HDFCBank"
      />
      <TransactionCard
        acc_no="749374282637"
        amt="84"
        date="Jun 15,2022"
        bank="HDFCBank"
      />
    </>
  );
};

export default Transaction;
