import React from "react";

export const Search = ({setCari}) => {
  return (
    <label htmlFor="" className="inline-block w-full">
      <input
        type="text"
        className="inputSearch"
        placeholder="Search a movie..."
        onChange={(e) => setCari(e.target.value)}
      />
    </label>
  );
};
