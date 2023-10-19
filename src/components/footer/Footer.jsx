import { Link } from "react-router-dom";
import IMAGES from "../../images/Images";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <Link to="/">
        <img className="footer__logo" src={IMAGES.logo} alt="" />
      </Link>

      <p className="footer__text">@ Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid qui reiciendis consectetur inventore nesciunt, eius accusantium vero provident ullam. 2023.</p>
    </footer>
  )
}
