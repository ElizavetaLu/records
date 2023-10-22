import IMAGES from "../../../../images/Images";
import "./AccordionNestedList.scss";

export default function AccordionNestedList({ isActive }) {
    return (
        <ul className={`nested-list ${isActive && 'nested-list--active'}`}>
            {
                [1, 2, 3, 4, 5, 6].map(item => {
                    return (
                        <li key={item} className="nested-list__item">
                            <div className="nested-list__data">
                                <div className="nested-list__image" style={{ backgroundImage: `url("${IMAGES.bandBg}")` }}></div>
                                <span className="nested-list__title">Some song name</span>
                            </div>
                            <span className="nested-list__time">3:00</span>
                        </li>
                    )
                })
            }
        </ul>
    )
}
