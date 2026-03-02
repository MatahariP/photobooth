import { Link } from "react-router-dom";
import './index.css'

export default function MainPage() {

    return (
        <>
        <nav>
            <Link to="/payment" className="btn-start">Start</Link>
        </nav>
        </>
    )
}