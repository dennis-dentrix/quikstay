import { Bell, Person } from "react-bootstrap-icons";

export default function Cta() {
  return (
    <section className="md:w-1/3 bg-babyPowder px-4 py-3 ml-5 md:ml-6 h-max rounded-md">
      <div>
        <div className="flex flex-row-reverse items-center gap-2">
          <h5 className="font-medium text-lg">Alice</h5>
          <div className="text-[1.1rem]">
            <Person />
          </div>
          <div className="text-[1.1rem]">
            <Bell />
          </div>
        </div>

        <div>
          <h5 className="text-center text-xl font-bold mt-6">Macha Town</h5>

          <div className="my-2 bg-white py-2 px-3 space-y-2 ">
            <HotelList />
            <HotelList />
            <HotelList />
            <HotelList />
          </div>
        </div>
      </div>
    </section>
  );
}

function HotelList() {
  return (
    <div className="flex items-start gap-2 border-b py-3">
      <img
        src="./gelLogo.jpg"
        alt="Gelian Hotel"
        className="rounded-full w-10"
      />

      <div className="flex sm:flex-col md:flex-row items-start gap-2 justify-between w-full">
        <div className="space-y-1">
          <h2 className="font-medium ">Gelian Hotel</h2>
          <p className="text-sm">Machakos Town</p>
          <div className="flex items-center text-sm">
            <span>⭐⭐⭐⭐⭐</span> <p>3/5</p>
          </div>
        </div>
        <button className="bg-claret px-3 py-1 text-babyPowder uppercase rounded-full">
          Visit
        </button>
      </div>
    </div>
  );
}
