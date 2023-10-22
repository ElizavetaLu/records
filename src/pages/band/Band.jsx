import BandIntroduction from "./sections/introduction/BandIntroduction";
import BandInformation from "./sections/band-info/BandInformation";
import "./Band.scss";


export default function Band() {
  return (
    <main className="band">
      <BandIntroduction />
      <BandInformation />
    </main>
  )
}
