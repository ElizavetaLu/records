import "./VectorDown.scss";

export default function VectorDown({ active }) {
    return (
        <div className={`vector-down ${active && 'vector-down--active'}`}>
            <span className="vector-down__line"></span>
            <span className="vector-down__line"></span>
        </div>
    )
}
