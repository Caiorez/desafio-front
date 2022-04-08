import React, { useEffect } from 'react'
import Card from '../../components/Card/'
import Pagination from "../../components/Pagination/"
import Header from "../../components/Header/"
import Search from "../../components/Search"

import { useCharacterContext } from '../../context/character'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';

const Home = () => {

    const { search, setSearch, pageNumber, setPageNumber, characterList, setCharacterList, loading, setLoading } = useCharacterContext()
    let { info, results, error = null } = characterList
  
    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`
  
    useEffect(() => {
      (async function () {
        let data = await fetch(api).then((res) => res.json());
        console.log(data)
        setCharacterList(data)
        setLoading(false)
      })()
    }, [api])

    return (
      <>
        <Header headerTitle="Rick and Morty - Characters" headerComponent={<Search setSearch={setSearch} updatePageNumber={setPageNumber} />}/>
        <Container id="container" maxWidth="lg">
          {loading && <p className="no-character-found">Carregando informações de personagens.</p>}
          {!loading && 
            <>
              {results &&
                <>
                  <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                    <Card page="/" results={results} error={error} />
                  </Grid>
                  <Pagination
                    info={info}
                    pageNumber={pageNumber}
                    updatePageNumber={setPageNumber}
                  />
                </>
              }
              {(error || !results) && <p className="no-character-found">Nenhum personagem encontrado!</p>}
            </>
          }
        </Container>
      </>
    )
  }
  
  export default Home