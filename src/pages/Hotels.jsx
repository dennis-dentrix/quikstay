import { ChevronLeft, Map } from "react-bootstrap-icons";
import { Search } from "../components/ui/Search";
import Gallery from "./Gallery";
import { Link, useNavigate } from "react-router-dom";
import HotelLayout from "../components/ui/HotelLayout";
import { HotelNav } from "../components/ui/HotelNav";

function Hotels() {
  const navigate = useNavigate();
  return (
    <section className="md:w-2/3 ml-10 md:overflow-y-scroll">
      <div className="hidden md:block">
        <Search />
      </div>

      <div className="px-3 py-2 shadow-md md:shadow-black rounded-md ">
        <div className="flex items-center gap-2">
          <span
            onClick={() => navigate(-1)}
            className="cursor-pointer font-bold"
          >
            <ChevronLeft style={{ width: 12, height: 12 }} />
          </span>
          <h1 className="font-bold uppercase ">Gelian Hotel</h1>
        </div>

        <Gallery />
      </div>

      <div className=" py-4 border-b flex items-end justify-between">
        <div>
          <h2 className="font-bold tracking-wide">
            Mwatu Wa Ngoma Street, Machakos
          </h2>
          <p>Hotel | conference | Rooms | swimming</p>

          <p>
            4.6 ⭐ . <Link className="underline ">400 reviews</Link>
          </p>
        </div>

        <button className="px-3 py-1 bg-claret text-babyPowder rounded-full flex gap-2 items-center">
          Show map
          <span>
            <Map />
          </span>
        </button>
      </div>

      <div className="my-7">
        <HotelNav />
        <HotelLayout />
      </div>
    </section>
  );
}

export default Hotels;
