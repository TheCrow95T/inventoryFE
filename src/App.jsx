import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import ProtectedRoute from "./ProtectedRoute";
import LoginRoute from "./LoginRoute";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import Purchases from "./pages/Purchases";
import Sales from "./pages/Sales";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Login from "./pages/Login";

import getCookie from "./utilities/getCookie";

function App() {
  const [user, setUser] = useState(getCookie("accessToken"));

  return (
    <>
      <div className={user ? "main" : ""}>
        {user ? <NavBar setUser={setUser} /> : null}
        <div className={user ? "page" : ""}>
          <Routes>
            <Route element={<LoginRoute user={user} redirectPath="/" />}>
              <Route path={"/login"} element={<Login setUser={setUser} />} />
            </Route>
            <Route
              element={<ProtectedRoute user={user} redirectPath="/login" />}
            >
              <Route exact path={"/"} element={<Dashboard />} />
              <Route path={"/usermanagement"} element={<UserManagement />} />
              <Route path={"/categories"} element={<Categories />} />
              <Route path={"/products"} element={<Products />} />
              <Route path={"/purchases"} element={<Purchases />} />
              <Route path={"/sales"} element={<Sales />} />
              <Route path={"/reports"} element={<Reports />} />
              <Route path={"/settings"} element={<Settings />} />
              <Route path="*" element={<p>Page not found 404</p>} />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
