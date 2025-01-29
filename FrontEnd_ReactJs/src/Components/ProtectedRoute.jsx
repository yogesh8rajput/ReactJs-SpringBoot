import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute=({children})=>{

    const {isauthenticated} = useAuth();

    if (!isauthenticated) {
        return <Navigate to="/login"></Navigate>
    }
    else{
        return children;
    }

}
export default ProtectedRoute;