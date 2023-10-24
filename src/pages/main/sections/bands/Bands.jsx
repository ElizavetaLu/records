import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SectionTitle from "../../../../components/section-title/SectionTitle";
import { setBands } from "../../../../store/actions/actionCreators";
import BandCard from '../../../../components/cards/band/BandCard';
import Dummy from "../../../../components/text-dummy/Dummy";
import IMAGES from "../../../../images/Images";
import "./Bands.scss";



export default function Bands() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setBands())
    }, [])

    const { bands } = useSelector(state => state.bands)

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
                    bands?.length > 0
                        ? bands.map(item => {
                            return (
                                <li key={item.id} className="bands__item">
                                    <BandCard {...item} />
                                </li>
                            )
                        })
                        : <Dummy text="Seems like the list is empty..."/>
                }
            </ul>
        </section>
    )
}
