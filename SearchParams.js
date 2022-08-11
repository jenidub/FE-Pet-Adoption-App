import { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("");
  console.log(location);

  return (
    <div className="search-params">
      <form onSubmit={(e) => setLocation(e.target.value)}>
        <label htmlFor="location">
          Location
          {location}
          <input id="location" placeholder="San Leandro, CA" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
