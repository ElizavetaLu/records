import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import IMAGES from "../../../../images/Images";
import "./BandIntroduction.scss";


export default function BandIntroduction() {

    const { id } = useParams()
    const { bands } = useSelector(state => state.bands)

    const currentBand = bands.find(element => element.id == id)
    const imgUrl = `http://localhost:3003/images/${currentBand?.image}`;

    return (
        <section className="band-intro" style={{ backgroundImage: `url(${currentBand.image ? imgUrl : IMAGES.dummyCardImage})` }}>
            <div className="band-intro__gradient-rad"></div>
            <div className="band-intro__gradient-lin"></div>
            <h1 className="band-intro__name">{currentBand.name}</h1>
        </section>
    )
}
