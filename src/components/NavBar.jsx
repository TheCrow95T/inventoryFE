import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Link to={"/"}>Dashboard</Link>
      <Link to={"/usermanagement"}>User Management</Link>
      <Link to={"/categories"}>Categories</Link>
      <Link to={"/products"}>Products</Link>
      <Link to={"/purchases"}>Purchases</Link>
      <Link to={"/sales"}>Sales</Link>
      <Link to={"/reports"}>Reports</Link>
      <Link to={"/settings"}>Settings</Link>
    </>
  );
};

export default NavBar;
