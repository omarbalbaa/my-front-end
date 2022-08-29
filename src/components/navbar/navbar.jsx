import { Link } from "react-router-dom";
import "./navbar-style.css";

function Navbar (){
    return (
        <div className="navbar">
                <div className="container  fw-semibold">
                    <Link to="/" className="links fs-5 mx-2">Home</Link>
                    <Link to="/about" className="links fs-5 mx-2">About</Link>
                    <Link to="/users" className="links fs-5 mx-2">Users</Link>

                </div>
        </div>
    );
}
export default Navbar;