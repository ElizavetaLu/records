import { Link } from "react-router-dom";
import IMAGES from "../../../images/Images";
import "./BandCard.scss";

export default function BandCard({ id, image, name }) {
    
    const imgUrl = `http://localhost:3003/images/${image}`;

    return (
        <Link to={`/band/${id}`} className="band-card">
            <div className="band-card__image" style={{ backgroundImage: `url(${image ? imgUrl : IMAGES.dummyCardImage})` }} alt="" />
            <span className="band-card__title">{name}</span>
        </Link>
    )
}
