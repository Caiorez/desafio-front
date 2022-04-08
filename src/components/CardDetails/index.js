import React, { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useCharacterContext } from "../../context/character";
import Header from "../Header"
import Container from '@mui/material/Container'
import './styles.css'

const CardDetails = () => {
    let { id } = useParams()
    const navigate = useNavigate();
    const { character, setCharacter } = useCharacterContext()
    let { name, location, origin, gender, image, status, species } = character
    
    let api = `https://rickandmortyapi.com/api/character/${id}`

    useEffect(() => {
        (async function () {
          let data = await fetch(api).then((res) => res.json())
          setCharacter(data);
        })()
      }, [api])

      const previousPage = () => {
        navigate(-1)
      }

    return (
      <>
        <Header headerTitle={name} />
        <Container id="container" maxWidth="lg">
          <div className="card-details">
            <img className="card-details-image-character" src={image} alt={name} title={name} />
            <div className="card-detail-box-text">
              <table className="card-detail-info-table">
                <thead>
                  <tr>
                    <th>Gender</th>
                    <th>Species</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{gender}</td>
                    <td>{species}</td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th>Origin</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{origin?.name}</td>
                    <td>{location?.name}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {(() => {
              if (status === "Dead") {
                return (
                    <div
                      className={`card-box-badge-status card-box-badge-status-dead position-absolute badge bg-danger`}
                    >
                      {status}
                    </div>
                );
              } else if (status === "Alive") {
                return (
                  <div
                    className={`card-box-badge-status card-box-badge-status-alive position-absolute badge bg-success`}
                  >
                    {status}
                  </div>
                );
              } else {
                  return (
                    <div
                      className={`card-box-badge-status card-box-badge-status-unknown position-absolute badge bg-secondary`}
                    >
                      {status}
                    </div>
                  );
              }
            })()}
          </div>
          <button onClick={previousPage} className="card-details-button-back">Voltar</button>
        </Container>
        </>
    )
}
export default CardDetails