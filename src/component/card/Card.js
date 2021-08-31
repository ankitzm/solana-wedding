import { Link } from "react-router-dom";
import "./Card.css"

function Card() {
    return (
        <div className="card-container">
            <div className="card">
                <div className="title">WEDDING REGISTRY</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quia beatae explicabo cumque voluptatem
                    accusamus adipisci maxime unde voluptatibus. Dolorum aperiam illo delectus quisquam quod hic saepe.
                    Aliquam, ab impedit?</p>

                <Link to="/certificate"> click here </Link>
            </div>
        </div>
    )
}

export default Card
