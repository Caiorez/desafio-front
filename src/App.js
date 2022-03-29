import React, { useEffect, useState } from 'react'

import Search from "./components/Search/Search"
import Card from "./components/Card/Card"
import Pagination from "./components/Pagination/Pagination"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CardDetails from "./components/Card/CardDetails"



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
    <div>
      <h1>Characters</h1>
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
      <div>
        <div >
          Filter component will be placed here
          <div>
            <div>
              <Card page="/" results={results} />
              <Pagination
                info={info}
                pageNumber={pageNumber}
                updatePageNumber={updatePageNumber}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App