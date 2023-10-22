import { Link } from "react-router-dom";
import "./Sidebar.scss";

const test = ['history', 'artistry', 'Image and identities', 'Feuds', 'albums', 'Band members', 'Awards and nominations']

export default function Sidebar() {
    return (
        <nav className="sidebar">
            <ul className="sidebar__list">
                {
                    test.map(item => {
                        return (
                            <Link key={item} to="#">
                                <li className="sidebar__item">
                                    {item}
                                </li>
                            </Link>
                        )
                    })
                }
            </ul>
        </nav>
    )
}
