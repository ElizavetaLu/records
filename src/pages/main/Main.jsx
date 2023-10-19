import Introduction from "./sections/introduction/Introduction";
import Bands from "./sections/bands/Bands";
import "./Main.scss";

export default function Main() {

    return (
        <div className="main"> 
            <Introduction />
            <Bands /> 
        </div>
    )
}