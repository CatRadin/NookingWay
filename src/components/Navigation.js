import { Link } from "react-router-dom";
import CoconutTree from '../assets/Coconut Tree.png'


export default function Navigation() {
    return (
        <div className='nav'>
            <div className='div-left'>
                <h1>Nooking<span className='lightBrown'>Way</span></h1>
                <img className='coconutTree' src={CoconutTree}></img>
            </div>
            <div className='div-right'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/faq">FAQ</Link>
            </div>
        </div>

    );
}