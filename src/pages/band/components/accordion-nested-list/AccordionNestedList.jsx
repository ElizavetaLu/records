import "./AccordionNestedList.scss";


export default function AccordionNestedList({ data, isActive, img }) {

    const countTime = time => {

        const minutes = Math.floor(time / 60);
        const seconds = time - minutes * 60;

        const correctMin = minutes < 10 ? `0${minutes}` : minutes;
        const correctSec = seconds < 10 ? `0${seconds}` : seconds;


        return `${correctMin}:${correctSec}`;
    }


    return (
        <ul className={`nested-list ${isActive && 'nested-list--active'}`}>
            {
                data?.length > 0 && data.map(item => {

                    return (
                        <li key={item.id} className="nested-list__item">
                            <div className="nested-list__data">
                                <div className="nested-list__image" style={{ backgroundImage: img }}></div>
                                <span className="nested-list__title">{item.name}</span>
                            </div>
                            <span className="nested-list__time">{countTime(item.length)}</span>
                        </li>
                    )
                })
            }
        </ul>
    )
}
