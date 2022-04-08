import { Link } from "react-router-dom"
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import './styles.css'

const Card = ({ page, results }) => {

    return results.map((x) => {
        let { id, image, name, status, location } = x
        return (
            <Grid item xs={2} sm={4} md={3}>
                <Link
                    to={"/character" + `${page}${id}`}
                    key={id}
                    className="card-box"
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
                        >
                            <img src={image} alt={name} title={name} className="card-box-image-character" />
                            <div className="card-box-text-content">
                                <h2 className="card-box-name-character">{name}</h2>
                                <div className="card-box-information-character">
                                    <p className="card-box-title-info">Last Location:</p>
                                    <p className="card-box-text-info">{location.name}</p>
                                </div>
                            </div>
                        </div>
                    </Box>
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
                </Link>
            </Grid>
        )
    })

}
export default Card