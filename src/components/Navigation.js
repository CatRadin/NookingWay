import { Link } from "react-router-dom";
import CoconutTree from '../assets/Coconut Tree.png'


export default function Navigation() {
    return (
        <div className='nav'>
            <div className='div-left'>
                <h1>Nooking<span className='lightBrown'>Way</span></h1>
                <img src={CoconutTree}></img>
            </div>
            <div className='div-right'>
            <Link to="/">Home</Link>
            </div>
        </div>

    );
}