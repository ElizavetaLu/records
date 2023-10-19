import { Link } from "react-router-dom";
import IMAGES from "../../../images/Images";
import "./BandCard.scss";

export default function BandCard() {
    const img = false;

    return (
        <Link to={`/band/${0}`} className="band-card">
            <div className="band-card__image" style={{ backgroundImage: `url(${img ? img : IMAGES.dummyCardImage})` }} alt="" />
            <span className="band-card__title">Band name</span>
        </Link>
    )
}
