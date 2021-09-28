import Nav from './Navigation'
import Artwork from "../assets/Artwork.png"
import Characters from '../assets/Characters.png';
import Clothing from '../assets/Clothing.png';
import Critters from '../assets/Critters.png';
import { Link } from "react-router-dom";


export default function Home() {
    return (
        <div className='home'>
            <Nav />
        <div className="middle">
            <h1>Animal Crossing</h1>
            <h2>New Horizons</h2>
            <div className="links">
                {/* ----------------Image Links------------------- */}
            <Link to="/artwork">
                <img src={Artwork} alt="Artwork"/>
            </Link>
            <Link to="/characters">
                <img src={Characters} alt="Characters" />
            </Link>
            <Link to="/clothing">
                <img src={Clothing} alt="Clothing" className="clothing" />
            </Link>
            <Link to="/critters">
                <img src={Critters} alt="Critters"  />
            </Link>
               
            </div>
            </div> 
            
        <div className="footer">dfdsfds</div>   
        </div>

    );
}