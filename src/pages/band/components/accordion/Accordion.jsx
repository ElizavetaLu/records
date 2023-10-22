import { useState } from "react";
import AccordionNestedList from "../accordion-nested-list/AccordionNestedList";
import VectorDown from "../../../../components/vector-down/VectorDown";
import IMAGES from "../../../../images/Images";
import "./Accordion.scss";


export default function Accordion({ data }) {

    const [currentId, setCurrentId] = useState(null)

    return (
        <div className="accordion">
            {
                data?.map((item, i) => {

                    const isActive = currentId === i;

                    return (
                        <div key={i} className="accordion__item">
                            <button className="accordion__button" onClick={() => isActive ? setCurrentId(null) : setCurrentId(i)}>
                                <div className="accordion__data">
                                    <div className="accordion__image" style={{ backgroundImage: `url("${IMAGES.bandBg}")` }}></div>
                                    <span className="accordion__title">{item}</span>
                                </div>
                                <VectorDown active={isActive} />
                            </button>

                            <AccordionNestedList isActive={isActive}/>
                        </div>
                    )
                })
            }
        </div>
    )
}
