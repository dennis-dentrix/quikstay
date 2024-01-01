import { useNavigate } from "react-router-dom";

export function HotelCard() {
  const navigate = useNavigate();
  function handleHotel() {
    // the hotel's link will oopen up specific hotel
    navigate("/hotels");
  }
  return (
    <div className="pb-2 h-fit rounded-sm border-2">
      {/* // <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 p-4"> */}
      <div className="p-2 bg-babyPowder rounded-md">
        <img
          src="./gelian.jpg"
          alt="Gelian Hotel"
          className="w-full object-cover rounded-md "
        />
      </div>

      <div className="p-2">
        <div>
          <h2 className="font-medium">Gelian Hotel</h2>
          {/* <Rating rating={4} max_rating={5} size="small" color="#ffc068" /> */}
          <p className="text-sm font-medium">Machakos town</p>
        </div>
        <div>
          <input
            id="default-range"
            type="range"
            value="2500"
            max="10000"
            disabled
            className="w-full h-1 bg-caledon rounded-xl appearance-none cursor-pointer dark:bg-claret "
          />
          <label
            htmlFor="default-range"
            className="block mb-2 text-xs font-medium "
          >
            kes 2500 || BnB
          </label>
        </div>
        <div className="grid place-content-center">
          <button
            className=" rounded-full bg-claret text-babyPowder py-2 px-3 text-sm"
            onClick={handleHotel}
          >
            View Hotel
          </button>
        </div>
      </div>
    </div>
  );
}
