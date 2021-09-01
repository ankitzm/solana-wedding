import { Link } from "react-router-dom";
import CoreBTN from "../../core/btn/btn";
import "./Card.css"

function Card() {
    return (
        <div className="card-container">
            <div className="card">
                <div className="title">WEDDING REGISTRY</div>

                <Link to="/certificate"><CoreBTN text="Click here" type="light" /> </Link>
            </div>
        </div>
    )
}

export default Card
