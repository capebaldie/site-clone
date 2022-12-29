import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import PayementCard from "../payment/PayementCard";
import { useRouter } from "next/router";

const PaymentPage = () => {
  //
  const router = useRouter();

  return (
    <>
      <main className="flex flex-col p-4">
        <div className="flex gap-4 items-center">
          <BsArrowLeft
            onClick={() => {
              router.push("/walletpage");
            }}
            className="border p-2 w-10 h-auto cursor-pointer hover:bg-[#f7f7f8] transition ease-in-out duration-200"
          />
          <p className="font-bold text-xl">Add New Account</p>
        </div>
        <div className="w-full bg-[#f7f7f8] mt-4">
          <div className="grid grid-flow-row-dense sm:grid-cols-2">
            <PayementCard
              img="paypal-3 1.svg"
              name="Paypal"
              detail01="$30 USD per wise to any bank."
              detail02="Paypal may charge additional fees for sending and withdrawing funds."
            />
            <PayementCard
              img="image 159.svg"
              name="Payoneer"
              detail01="$1 USD Upwork withdrawal fee"
              detail02="Payoneer charges additional fees to withdraw funds. Don’t have a Payoneer account?"
            />
            <PayementCard
              img="bank.svg"
              name="Wire Transfer"
              detail01="$1 USD Upwork withdrawal fee"
              detail02="Up to 7 business days to receive funds."
            />
            <PayementCard
              img="bank.svg"
              name="Direct to U.S Bank"
              detail01="$1 USD Upwork withdrawal fee"
              detail02="Deposite to a U.S. bank account in USD"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default PaymentPage;
