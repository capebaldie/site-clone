import SideNavBar from "../components/static/SideNavBar";
import MyBalance from "../components/MyBalance";
import Statistic from "../components/charts/Statistic";
import SearchBar from "../components/static/SearchBar";
import Transaction from "../components/history/Transaction";
import { useRouter } from "next/router";

export default function WalletPage() {
  //
  const router = useRouter();

  return (
    <>
      <div className="sm:flex">
        <SideNavBar />
        <div className="w-full">
          <SearchBar />
          <div className="flex sm:flex-row flex-col">
            <div>
              <MyBalance />
              <Statistic />
            </div>
            <div>
              <main className="m-4 bg-[#f7f7f8] sm:w-full w-auto sm:p-4 sticky top-24">
                <div className="flex justify-evenly relative">
                  <p
                    onClick={() => {
                      router.push("/walletpage");
                    }}
                    className="border p-3 cursor-pointer w-full"
                  >
                    Transaction
                  </p>
                  <p
                    onClick={() => {
                      router.push("/addmoneypage");
                    }}
                    className="border p-3 cursor-pointer w-full"
                  >
                    Add Money
                  </p>
                  <p
                    onClick={() => {
                      router.push("/withdrawpage");
                    }}
                    className="border p-3 cursor-pointer w-full"
                  >
                    Withdraw
                  </p>
                </div>
                <Transaction />
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
