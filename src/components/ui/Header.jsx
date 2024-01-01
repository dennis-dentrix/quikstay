import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-babyPowder w-full text-black py-3 px-6 col-start-1 col-end-2 h-screen shadow-lg ">
      <nav className="flex flex-col justify-between h-[80vh] md:h-full">
        <ul className="flex flex-col items-start gap-4">
          <Link to="/">
            <h1 className="animate-bounce font-bold text-xl">Quikstay</h1>
          </Link>
          <li>
            <NavLink to="/" className="text-lg">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/" className="text-lg">
              Hotels
            </NavLink>
          </li>
        </ul>

        <div className="flex justify-between mb-4">
          <button className="rounded-md bg-claret text-babyPowder px-3 py-1">
            <Link>Login</Link>
          </button>
          <button className="bg-black text-babyPowder px-3 py-1 rounded-md">
            <Link>Register</Link>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
