import { Routes, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import Purchases from "./pages/Purchases";
import Sales from "./pages/Sales";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path={"/usermanagement"} element={<UserManagement />} />
        <Route path={"/categories"} element={<Categories />} />
        <Route path={"/products"} element={<Products />} />
        <Route path={"/purchases"} element={<Purchases />} />
        <Route path={"/sales"} element={<Sales />} />
        <Route path={"/reports"} element={<Reports />} />
        <Route path={"/settings"} element={<Settings />} />
        <Route path={"/test"} element={<Login />} />
        <Route path="*" element={<p>Page not found 404</p>} />
      </Routes>
      d
    </>
  );
}

export default App;
