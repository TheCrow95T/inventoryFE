import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const NavBar = ({ setUser }) => {
  const navigate = useNavigate();
  const logout = () => {
    let confirmLogout = confirm("Confirm Logout?");

    if (confirmLogout) {
      document.cookie = "accessToken=;";
      navigate("/login");
      setUser("");
    }
  };
  return (
    <div className="navbar">
      <div className="title">Inventory Management System</div>
      <Link to={"/"}>Dashboard</Link>
      <Link to={"/usermanagement"}>User Management</Link>
      <Link to={"/categories"}>Categories</Link>
      <Link to={"/products"}>Products</Link>
      <Link to={"/purchases"}>Purchases</Link>
      <Link to={"/sales"}>Sales</Link>
      <Link to={"/reports"}>Reports</Link>
      <Link to={"/settings"}>Settings</Link>
      <div onClick={logout}>Logout</div>
    </div>
  );
};

export default NavBar;
