import { Navigate, Outlet } from "react-router-dom";
import getCookie from "./utilities/getCookie";

const ProtectedRoute = ({ user, redirectPath }) => {
    if (getCookie("accessToken")) {
        return <Outlet />;
    }
    return <Navigate to={redirectPath} replace />;
};

export default ProtectedRoute;
