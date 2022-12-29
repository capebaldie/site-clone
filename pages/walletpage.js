import SideNavBar from "../components/static/SideNavBar";
import MyBalance from "../components/MyBalance";
import Statistic from "../components/charts/Statistic";
import SearchBar from "../components/static/SearchBar";
import { useRouter } from "next/router";
import Transactions from "../components/transactions";

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
              <Transactions />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
