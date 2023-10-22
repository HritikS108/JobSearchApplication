import { Link } from "react-router-dom";
import '../css/navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Find Your Dream Jobs Here </h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to = "/contact-us">Contact Us</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;