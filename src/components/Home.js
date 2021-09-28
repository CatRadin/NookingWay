import Nav from './Navigation'
import Artwork from "../assets/Artwork.png"
import Characters from '../assets/Characters.png';
import { Link } from "react-router-dom";


export default function Home() {
    return (
        <div className='home'>
            <Nav />
        <div className="middle">
            <h1>Animal Crossing</h1>
            <h2>New Horizons</h2>
            <div className="links">

            <Link to="/artwork">
                <img src={Artwork} />
            </Link>
            
            <Link to="/characters">
                <img src={Characters} />
            </Link>
               
            </div>
            </div> 
            
        <div className="footer">dfdsfds</div>   
        </div>

    );
}