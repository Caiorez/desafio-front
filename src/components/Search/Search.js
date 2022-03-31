import React from "react";
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'


const Search = ({ setSearch, updatePageNumber }) => {
  let searchBtn = (e) => {
    e.preventDefault()
  }
  return (
    <form>
        <TextField 
            onChange={(e) => {
                updatePageNumber(1);
                setSearch(e.target.value);
            }}
            placeholder="Search for characters"
            type="text"
            id="filled-basic" 
            label="Filled" 
            variant="filled" 
        />
        <Button 
          onClick={searchBtn}
          variant="contained"
        >
          Search
        </Button>
    </form>
  );
}
export default Search