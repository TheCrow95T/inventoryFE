import { Navigate, Outlet } from "react-router-dom";
import getCookie from "./utilities/getCookie";

const LoginRoute = ({ user, redirectPath }) => {
    if (getCookie("accessToken")) {
        return <Navigate to={redirectPath} replace />;
    }
    return <Outlet />;
};

export default LoginRoute;
