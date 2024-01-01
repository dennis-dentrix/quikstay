import { useState } from "react";

export function Search() {
  const [query, setQuery] = useState("");
  return (
    <form action="" className="m-5 w-[16rem] ">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="border rounded px-2 py-1 w-full text-black tracking-wide focus:outline-none focus:outline-babyPowder shadow-md accent-black"
      />
    </form>
  );
}
