import { HeaderSimple } from "../../../components/HeaderSimple.tsx";
import myImage from "../../../assets/images/placeholder.png";

export default function Home() {
    return (
        <div className="home-container">
            <HeaderSimple />
            <img src={myImage} alt="Description" className="home-image" />
        </div>
    );
}