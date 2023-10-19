import { Link } from "react-router-dom";
import IMAGES from "../../images/Images";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={IMAGES.logo} alt="" />
      </Link>
    </header>
  )
}
