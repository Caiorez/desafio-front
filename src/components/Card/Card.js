import { Link } from "react-router-dom"
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import './Card.css'

const Card = ({ page, results }) => {
    let display

    if (results) {
        display = results.map((x) => {
            let { id, image, name, status, location } = x
            if(status === "Dead"){
                let classStatus = 'statusPDead'
            } else if(status === "Alive"){
                let classStatus = 'statusPAlive'
            } else {
                let classStatus = 'statusPUnk'
            }
            return (
                <Link
                    to={`${page}${id}`}
                    key={id}
                    className="cardBox"
                >   
                    <Box
                        sx={{
                            width: 300,
                            height: 450,
                            backgroundColor: '#fbfbfb',
                            border: '1px solid #fbfbfb',
                            '&:hover': {
                                border: '1px solid #5d92f0',
                                opacity: [0.9, 0.8, 0.7],
                            },
                        }}
                    >
                        <Badge badgeContent={status} color="secondary">
                            <div
                                key={id}
                                className=""
                            >
                                <div
                                    className=""
                                >
                                    <Avatar
                                        alt={name}
                                        src={image}
                                        sx={{ width: 250, height: 250 }}
                                    />
                                        <div className="textCB">
                                            <p className="statusP {classStatus}">{status}</p>
                                            <h2 className="nameH2">{name}</h2>
                                            <div className="infoCB">
                                                <p className="titP">Last Location:</p>
                                                <p className="textP">{location.name}</p>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </Badge>
                    </Box>
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