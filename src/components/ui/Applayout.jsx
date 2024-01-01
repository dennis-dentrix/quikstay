import { Outlet } from "react-router-dom";
import Header from "./Header";
import Cta from "../../pages/Cta";
import TemporaryDrawer from "./TemporaryDrawer";
import { Search } from "./Search";

function Applayout() {
  return (
    <div className=" px-6 md:px-0 md:grid md:grid-cols-[250px_auto] h-screen md:overflow-hidden ">
      <div className="hidden md:block ">
        <Header />
      </div>

      <div className=" md:overflow-y-scroll col-start-2 col-end-3 flex md:flex-1 md:flex-row flex-col h-screen px-3 py-4 md:px-0 md:py-0">
        <div className="flex justify-between items-center  md:hidden ">
          <div className="flex items-center gap-2 md:block">
            <div>
              <TemporaryDrawer />
            </div>
            <h1>Mh</h1>
          </div>
          <Search />
        </div>
        <Outlet />

        <div className="hidden md:contents">
          <Cta />
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Applayout;
