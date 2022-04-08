import React, { useEffect } from "react";
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import './styles.css'
import { useCharacterContext } from "../../context/character";

const Search = ({ }) => {
  
  const { search, setSearch } = useCharacterContext()

  let timeout
  const handleChangeSearch = e => {
    clearTimeout(timeout)
    const searchValue = e.target.value
    
    timeout = setTimeout(() => {
      setSearch(searchValue)
      //console.log(searchValue)
    }, 500)

  }

  return (
    <>
      <Stack spacing={2} direction="row">
        <TextField 
            onChange={handleChangeSearch}
            sx={{
              width: '100%',
              '& > :not(style)': { m: 0, width: '40ch' },
              '& div': { width: '100%'},
              '& input': { width: '100%'},
              '& label': {textAlign: 'left'}
            }}
            type="text"
            id="input-search" 
            label="Search for Characters"
            variant="filled"
        />
      </Stack>
    </>
  );
}
export default Search