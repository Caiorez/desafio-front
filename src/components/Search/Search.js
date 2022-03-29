import React from "react";

const Search = ({ setSearch, updatePageNumber }) => {
  let searchBtn = (e) => {
    e.preventDefault()
  }
  return (
    <form>
        <input
            onChange={(e) => {
                updatePageNumber(1);
                setSearch(e.target.value);
            }}
            placeholder="Search for characters"
            type="text"
        />
        <button
            onClick={searchBtn}
        >
            Search
        </button>
    </form>
  );
}
export default Search