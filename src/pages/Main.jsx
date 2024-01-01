/* eslint-disable react/prop-types */
import { useState } from "react";
import { Search } from "../components/ui/Search";
import { ChevronRight } from "react-bootstrap-icons";
import { HotelCard } from "../components/ui/HotelCard";

function Main() {
  const [note, setNote] = useState(true);

  return (
    <div className="col-start-1 col-end-2 md:w-2/3 ml-10">
      <div className="hidden md:block">
        <Search />
      </div>
      <div className="h-screen">
        {note && <Welcome setNote={setNote} />}

        <div className="flex flex-col px-3 shadow-md md:shadow-black rounded-md md:overflow-y-scroll scroll-smooth">
          <div className="flex justify-between mb-2 py-2">
            <h1 className="font-bold">Popular Hotels</h1>
            <p className="flex items-center text-sm">
              View all...
              <span>
                <ChevronRight style={{ width: 20, height: 13 }} />
              </span>
            </p>
          </div>
          {/* <div className="py-4 flex md:justify-center justify-around md:gap-8 md:px-6"> */}
          <div className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-2 gap-4">
            <HotelCard />
            <HotelCard />
            <HotelCard />
            <HotelCard />
            <HotelCard />
            <HotelCard />
            <HotelCard />
            <HotelCard />
            <HotelCard />
            <HotelCard />
          </div>
        </div>
      </div>
    </div>
  );
}

function Welcome({ setNote }) {
  return (
    <div className="flex justify-between bg-claret px-6 py-4 rounded-md text-babyPowder shadow-xl mb-6 transition-all duration-300">
      <div className="flex flex-col gap-5">
        <h1>Hi, Denis Kyusya</h1>
        <p>Let&apos;s find you a spot in Macha</p>
      </div>

      {/* LEARN MORE WILL LEAD TO THE ABOUT PAGE */}
      <div className="flex flex-col items-end gap-5">
        <p onClick={(see) => setNote(!see)} className=" cursor-pointer">
          X
        </p>
        <button className="bg-babyPowder text-black px-3 py-1 rounded-md text-sm">
          LEARN MORE
        </button>
      </div>
    </div>
  );
}

export default Main;
