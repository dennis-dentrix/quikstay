import { NavLink } from "react-router-dom";

export function HotelNav() {
  return (
    <nav>
      <ul className="flex items-center gap-8">
        <li>
          <NavLink
            to="/hotels/room"
            className="border-b-2 border-claret text-black font-medium "
          >
            Rooms
          </NavLink>
        </li>

        <li>
          <NavLink to="/hotels/conference">Conference</NavLink>
        </li>

        <li>
          <NavLink to="/hotels/hotel">Hotel</NavLink>
        </li>
      </ul>
    </nav>
  );
}
