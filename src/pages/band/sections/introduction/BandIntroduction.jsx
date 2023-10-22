import IMAGES from "../../../../images/Images"; 
import "./BandIntroduction.scss";

export default function BandIntroduction() {
    return (
        <section className="band-intro" style={{ backgroundImage: `url("${IMAGES.bandBg}")` }}>
            <div className="band-intro__gradient-rad"></div>
            <div className="band-intro__gradient-lin"></div>
            <h1 className="band-intro__name">BAND NAME LASDKN ALKNDVLKA ALSKDN ASLDKNC SLDNC</h1>
            {/* <div className="band-intro__image" style={{ backgroundImage: `url("${IMAGES.dump}")` }}></div> */}
        </section>
    )
}
