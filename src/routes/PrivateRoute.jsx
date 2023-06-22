import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import BigSpinner from "../components/Spinners/BigSpinner";
import { AuthContext } from "../contexts/AuthProvider";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const currentlocation = useLocation()
    console.log("loading", loading)
    if (loading) {
        return <>
            <BigSpinner />
        </>
    }
    if (!loading && !user) {
        return <Navigate to="/login" state={{ from: currentlocation }} replace></Navigate>
    }
    if (user?.email)
        return children;

}

export default PrivateRoute