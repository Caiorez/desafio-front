import React from "react";
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import './Search.css'


const Search = ({ setSearch, updatePageNumber }) => {
  let searchBtn = (e) => {
    e.preventDefault()
  }
  return (
    <form>
      <Stack spacing={2} direction="row">
        <TextField 
            onChange={(e) => {
                updatePageNumber(1);
                setSearch(e.target.value);
            }}
            sx={{
              '& > :not(style)': { m: 0, width: '40ch' },
            }}
            type="text"
            id="iptSearch" 
            label="Search for Characters"
            variant="filled" 
        />
        <Button 
          id="btnSearch"
          onClick={searchBtn}
          variant="contained"
        >
          Search
        </Button>
      </Stack>
    </form>
  );
}
export default Search