import IMAGES from "../../../images/Images";
import "./RoundedCard.scss";

export default function RoundedCard({image, name,last_name, genre}) { 

  const imgUrl = `http://localhost:3003/images/${image}`;
  const currentImage = `url(${image ? imgUrl : IMAGES.dummyCardImage})`;

  return (
    <button className="rounded-card">
      <div className="rounded-card__image" style={{ backgroundImage: currentImage }} alt="" />
      <span className="rounded-card__title">{name + ' ' + last_name || genre}</span>
    </button>
  )
}
