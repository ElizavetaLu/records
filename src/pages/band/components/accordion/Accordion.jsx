import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSongs } from "../../../../store/actions/actionCreators";
import AccordionNestedList from "../accordion-nested-list/AccordionNestedList";
import VectorDown from "../../../../components/vector-down/VectorDown";
import IMAGES from "../../../../images/Images";
import "./Accordion.scss";



export default function Accordion({ data }) {

    const [currentId, setCurrentId] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        currentId && dispatch(setSongs(currentId));
    }, [currentId])

    const { songs } = useSelector(state => state.currentBand);


    return (
        <div className="accordion">
            {
                data?.length > 0 && data?.map(({ id, name, image }) => {

                    const isActive = currentId === id;
                    const imgUrl = `http://localhost:3003/images/${image}`;
                    const currentImage = `url(${image ? imgUrl : IMAGES.dummyCardImage})`;

                    return (
                        <div key={id} className="accordion__item">
                            <button className="accordion__button" onClick={() => isActive ? setCurrentId(null) : setCurrentId(id)}>
                                <div className="accordion__data">
                                    <div className="accordion__image" style={{ backgroundImage: currentImage }}></div>
                                    <span className="accordion__title">{name}</span>
                                </div>
                                <VectorDown active={isActive} />
                            </button>

                            <AccordionNestedList data={songs} isActive={isActive} img={currentImage}/>
                        </div>
                    )
                })
            }
        </div>
    )
}
