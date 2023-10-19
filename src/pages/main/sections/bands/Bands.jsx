import SectionTitle from "../../../../components/section-title/SectionTitle";
import IMAGES from "../../../../images/Images";
import BandCard from '../../../../components/cards/band/BandCard';
import "./Bands.scss";


export default function Bands() {

    return (
        <section className="bands">
            <div className="bands__title">
                <SectionTitle title="available for viewing bands" />
                <button className="bands__search-button">
                    <img className="bands__search-icon" src={IMAGES.search} alt="" />
                </button>
            </div>

            <ul className="bands__list"> 
                {
                    [...Array(20).keys()].map(item => {
                        return (
                            <li key={item} className="bands__item">
                                <BandCard />
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}
