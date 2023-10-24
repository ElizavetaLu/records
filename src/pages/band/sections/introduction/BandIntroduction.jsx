import { useSelector } from "react-redux";
import IMAGES from "../../../../images/Images";
import "./BandIntroduction.scss";

export default function BandIntroduction() {

    const { band } = useSelector(state => state.currentBand);
    const imgUrl = `http://localhost:3003/images/${band?.image}`;

    return (
        <section className="band-intro" style={{ backgroundImage: `url(${band?.image ? imgUrl : IMAGES.dummyCardImage})` }}>
            <div className="band-intro__gradient-rad"></div>
            <div className="band-intro__gradient-lin"></div>
            <h1 className="band-intro__name">{band?.name}</h1>
        </section>
    )
}
