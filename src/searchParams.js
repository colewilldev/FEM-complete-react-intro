import { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location: {location}
          <input
            id={location}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
          />
        </label>
        <button>Subimt</button>
      </form>
    </div>
  );
};

export default SearchParams;
