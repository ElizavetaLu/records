import IMAGES from "../../../images/Images";
import "./RoundedCard.scss";

export default function RoundedCard() {

  const img = true;

  return (
    <button className="rounded-card">
      <div className="rounded-card__image" style={{ backgroundImage: `url(${img ? IMAGES.dump : IMAGES.dummyCardImage})` }} alt="" />
      <span className="rounded-card__title">Genre</span>
    </button>
  )
}
