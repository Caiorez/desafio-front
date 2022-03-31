import { Link } from "react-router-dom"
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import './Card.css'

const Card = ({ page, results }) => {
    let display

    if (results) {
        display = results.map((x) => {
            let { id, image, name, status, location } = x
            return (
                <Link
                    to={`${page}${id}`}
                    key={id}
                    className="cardBox"
                >   
                    <Box
                        sx={{
                            backgroundColor: '#383a3e',
                            border: '1px solid #383a3e',
                            '&:hover': {
                                opacity: [0.9, 0.8, 0.7],
                            },
                        }}
                    >
                        <div
                            key={id}
                            className=""
                        >
                            <img src={image} alt={name} title={name} className="imgCB"/>
                            <div className="textCB">
                                <h2 className="nameH2">{name}</h2>
                                <div className="infoCB">
                                    <p className="titP">Last Location:</p>
                                    <p className="textP">{location.name}</p>
                                </div>
                            </div>
                        </div>
                    </Box>
                    {(() => {
                        if (status === "Dead") {
                        return (
                            <div
                            className={`badgeCB statusPDead position-absolute badge bg-danger`}
                            >
                            {status}
                            </div>
                        );
                        } else if (status === "Alive") {
                        return (
                            <div
                            className={`badgeCB statusPAlive position-absolute badge bg-success`}
                            >
                            {status}
                            </div>
                        );
                        } else {
                        return (
                            <div
                            className={`badgeCB statusPUnk position-absolute badge bg-secondary`}
                            >
                            {status}
                            </div>
                        );
                        }
                    })()}
                </Link>

            )

        })
    }
    else {
        display = "No characters found."
    }
    return (
        <p>{display}</p>
    )
}
export default Card