import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setBandInformation } from "../../../../store/actions/actionCreators";
import RoundedCard from "../../../../components/cards/rounded/RoundedCard";
import InfoBlock from "../../components/info-block/InfoBlock";
import Accordion from "../../components/accordion/Accordion";
import Dummy from "../../../../components/text-dummy/Dummy";
import Sidebar from "../../components/sidebar/Sidebar";
import "./BandInformation.scss";


export default function BandInformation() {

    const { id } = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setBandInformation(id));
    }, [])

    const { albums, members } = useSelector(state => state.currentBand)


    const historyRef = useRef(null);
    const artistryRef = useRef(null);
    const imgRef = useRef(null);
    const feudsRef = useRef(null);
    const albumsRef = useRef(null);
    const membersRef = useRef(null);
    const awardsRef = useRef(null);

    const handleClick = (title) => {
        let ref = null;

        switch (title) {
            case 'history':
                ref = historyRef;
                break;
            case 'artistry':
                ref = artistryRef;
                break;
            case 'Image and identities':
                ref = imgRef;
                break;
            case 'Feuds':
                ref = feudsRef;
                break;
            case 'albums':
                ref = albumsRef;
                break;
            case 'Band members':
                ref = membersRef;
                break;
            case 'Awards and nominations':
                ref = awardsRef;
                break;

            default:
                break;
        }

        return ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="band-info">
            <div className="band-info__sidebar-container">
                <Sidebar
                    handleClick={handleClick}
                />
            </div>
            <div className="band-info__content">
                <h2 className="band-info__title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, unde obcaecati autem neque possimus deleniti ab dignissimos.</h2>

                <InfoBlock scrollRef={historyRef} title="History" />
                <InfoBlock scrollRef={artistryRef} title="Artistry" />
                <InfoBlock scrollRef={imgRef} title="Image and identities" />
                <InfoBlock scrollRef={feudsRef} title="Feuds" />

                <div className="band-info__block" ref={albumsRef}>
                    <h3 className="band-info__block-title">Albums</h3>
                    <Accordion data={albums} />
                </div>

                <div className="band-info__block" ref={membersRef}>
                    <h3 className="band-info__block-title">Members</h3>
                    <ul className="band-info__list">
                        {
                            members?.length > 0
                                ? members.map(item => {
                                    return (
                                        <li key={item.id} className="band-info__member">
                                            {!!item.is_past_member && <p className="band-info__past-member">Past member</p>}
                                            <RoundedCard {...item} />
                                        </li>
                                    )
                                })
                                : <Dummy text="There's no information about band members" />
                        }
                    </ul>
                </div>

                <InfoBlock scrollRef={awardsRef} title="Awards and nominations" />
            </div>
        </section>
    )
}
