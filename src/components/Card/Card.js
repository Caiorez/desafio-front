import { Link } from "react-router-dom"

const Card = ({ page, results }) => {
    let display

    if (results) {
        display = results.map((x) => {
            let { id, image, name, status, location } = x
            return (
                <Link
                    to={`${page}${id}`}
                    key={id}
                >
                    <div
                        key={id}
                        className="cardBox"
                    >
                        <div>
                            <img src={image} alt="" />
                            <div>
                                <div>{name}</div>
                                <div>
                                    <div>Status:</div>
                                    <div>{status}</div>
                                    <div>Last Location:</div>
                                    <div>{location.name}</div>
                                </div>
                            </div>
                        </div>
                    </div>
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