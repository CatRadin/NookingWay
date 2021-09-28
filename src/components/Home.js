import Nav from './Navigation'
import Artwork from "../assets/Artwork.png"
import Characters from '../assets/Characters.png';
import Clothing from '../assets/Clothing.png';
import Critters from '../assets/Critters.png';
import DIY from '../assets/DIY.png';
import Events from '../assets/Events.png';
import Fossils from '../assets/Fossils.png';
import Furniture from '../assets/Furniture.png';
import Locations from '../assets/Locations.png';
import Music from '../assets/Music.png';
import Tools from '../assets/Tools.png';
import Villagers from '../assets/Villagers.png';
import TomNook from '../assets/TomNook.png'
import TandT from '../assets/TandT.png'
import { Link } from "react-router-dom";


export default function Home() {
    return (
        <div className='home'>
            <Nav />
        <div className="middle">
            <h1>Animal Crossing</h1>
            <h2>New Horizons</h2>
            <img src={TomNook} alt="Toom Nook" className="TomNook" />
            <img src={TandT} alt="Timmy And Tommy" className="TandT" />
            <div className="links">
                {/* ----------------Image Links # 1------------------- */}
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
            {/* ----------------Image Links # 2------------------- */}
            <div className="links">
             <Link to="/diy">
                <img src={DIY} alt="DIY"  />
            </Link>
            <Link to="/events">
                <img src={Events} alt="DIY"  />
            </Link>
            <Link to="/fossils">
                <img src={Fossils} alt="fossils"  />
            </Link>
            <Link to="/furniture">
                <img src={Furniture} alt="furniture"  />
            </Link>
            </div>
            {/* ----------------Image Links # 3------------------- */}
            <div className="links">
            <Link to="/locations">
                <img src={Locations} alt="locations" className="clothing" />
            </Link> 
            <Link to="/music">
                <img src={Music} alt="Music" className="clothing" />
            </Link> 
            <Link to="/tools">
                <img src={Tools} alt="Tools" className="clothing" />
            </Link>
            <Link to="/villagers">
                <img src={Villagers} alt="Villagers" className="clothing" />
            </Link>  
            </div>
            </div> 
            
        <div className="footer"></div>   
        </div>

    );
}