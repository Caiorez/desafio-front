import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React from 'react'
import CardDetails from "./components/CardDetails"
import { CharacterContextProvider } from "./context/character"
import Home from "./Pages/Home"
import './App.css'


function App() {
  return (
    <CharacterContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<CardDetails />} />
        </Routes>
      </Router>
    </CharacterContextProvider>
  )
}

export default App