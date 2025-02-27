import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#333", color: "white" }}>
      <h2>My Website</h2>
      <Link to="/about" style={{ marginRight: "15px", color: "white" }}>
        About
      </Link>
      <Link to="/contact" style={{ color: "white" }}>
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
