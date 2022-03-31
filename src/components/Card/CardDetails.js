import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import './CardDetails.css'

const CardDetails = () => {
    let { id } = useParams()
    let [fetchedData, updateFetchedData] = useState([])
    let { name, location, origin, gender, image, status, species } = fetchedData
    
    let api = `https://rickandmortyapi.com/api/character/${id}`

    useEffect(() => {
        (async function () {
          let data = await fetch(api).then((res) => res.json())
          updateFetchedData(data);
        })()
      }, [api])

    return (
      <>
        <header>
          <div className="boxHeader">
            <h1>{name}</h1>
          </div>
        </header>
          <div className="cardDetails">
            <img className="imgCD" src={image} alt={name} title={name} />
            <div className="boxTxtCD">
              <table className="tableTxtCD">
                <tr>
                  <th>Gender</th>
                  <th>Species</th>
                </tr>
                <tr>
                  <td>{gender}</td>
                  <td>{species}</td>
                </tr>
                <tr>
                  <th>Origin</th>
                  <th>Location</th>
                </tr>
                <tr>
                  <td>{origin?.name}</td>
                  <td>{location?.name}</td>
                </tr>
              </table>
            </div>
          </div>
        </>
    )
}
export default CardDetails