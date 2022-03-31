import Search from "./components/Search/Search"
import Card from "./components/Card/Card"
import Pagination from "./components/Pagination/Pagination"
import CardDetails from "./components/Card/CardDetails"
import Container from '@mui/material/Container'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React, { useEffect, useState } from 'react'




function App() {
  return (
    <Router>
      <div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  )
}

const Home = () => {

  /*let api = `https://rickandmortyapi.com/api/character/?page=1`*/
  let [fetchedData, updateFetchedData] = useState([])
  let [pageNumber, updatePageNumber] = useState(1)
  let [search, setSearch] = useState("")
  let { info, results } = fetchedData

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      console.log(data)
      updateFetchedData(data)
    })()
  }, [api])

  return (
    <>
      <header>
        <h1>Characters</h1>
        <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
      </header>
      <Container maxWidth="lg">
            <Card page="/" results={results} />
                <Pagination
                  info={info}
                  pageNumber={pageNumber}
                  updatePageNumber={updatePageNumber}
                />
      </Container>
    </>
  )
}

export default App