import "./Sidebar.scss";

const test = ['history', 'artistry', 'Image and identities', 'Feuds', 'albums', 'Band members', 'Awards and nominations']

export default function Sidebar({ handleClick }) {
    return (
        <nav className="sidebar">
            <ul className="sidebar__list">
                {
                    test.map(item => {
                        return (
                            <li
                                key={item}
                                onClick={() => handleClick(item)}
                                className="sidebar__item"
                            >
                                {item}
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}
