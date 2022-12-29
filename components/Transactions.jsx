import React, { useState } from "react";
import Transaction from "./history/Transaction";
import Withdraw from "./history/Withdraw";
import AddMoney from "./history/AddMoney";
import AddMoney02 from "./history/AddMoney02";

const Transactions = () => {
  //
  const [transaction, setTransaction] = useState(true);
  const [addMoney, setAddMoney] = useState(false);
  const [withdraw, setWithdraw] = useState(false);
  const [addMoney2, setAddMoney2] = useState(false);

  const transactionFunction = () => {
    setTransaction(true);
    setAddMoney(false);
    setWithdraw(false);
    setAddMoney2(false);
  };

  const addMoneyFunction = () => {
    setTransaction(false);
    setAddMoney(true);
    setWithdraw(false);
    setAddMoney2(false);
  };

  const withdrawFunction = () => {
    setTransaction(false);
    setAddMoney(false);
    setWithdraw(true);
    setAddMoney2(false);
  };

  const addMoney2Function = () => {
    setTransaction(false);
    setAddMoney(false);
    setWithdraw(false);
    setAddMoney2(true);
  };

  return (
    <div>
      <main className="m-4 bg-[#f7f7f8] sm:w-full w-auto sm:p-4 sticky top-24">
        <div className="flex justify-evenly relative">
          <p
            onClick={transactionFunction}
            className="border p-3 cursor-pointer w-full"
          >
            Transaction
          </p>
          <p
            onClick={addMoneyFunction}
            className="border p-3 cursor-pointer w-full"
          >
            Add Money
          </p>
          <p
            onClick={withdrawFunction}
            className="border p-3 cursor-pointer w-full"
          >
            Withdraw
          </p>
        </div>
        {transaction && <Transaction />}
        {addMoney && <AddMoney addMoney2Function={addMoney2Function} />}
        {withdraw && <Withdraw />}
        {addMoney2 && <AddMoney02 />}
      </main>
    </div>
  );
};

export default Transactions;
