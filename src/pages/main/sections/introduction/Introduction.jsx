import { useSelector } from "react-redux";
import RoundedCard from "../../../../components/cards/rounded/RoundedCard"
import useToggle from "../../../../hooks/useToggle";
import "./Introduction.scss"

export default function Introduction() {

    const [isGenresVisible, onToggle] = useToggle();

    const { genres } = useSelector(state => state.bands)


    return (
        <section className="introduction">
            <div className="introduction__background">
                <div className="introduction__bottom-gradient"></div>
            </div>

            <div className="introduction__content">
                <h1 className="introduction__title">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati hic sint amet dolore cumque
                </h1>

                <ul className="introduction__list">
                    {
                        genres?.length > 0 && genres.map((item, i) => { 

                            if (!isGenresVisible && i > 5) return;

                            return (
                                <li key={i} className="introduction__item">
                                    <RoundedCard genre={item} />
                                </li>
                            )
                        })
                    }
                </ul>

                <button className="introduction__list-button" onClick={onToggle}>
                    {
                        isGenresVisible
                            ? 'Hide'
                            : 'Show all'
                    }
                </button>
            </div>
        </section>
    )
}
