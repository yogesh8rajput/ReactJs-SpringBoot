import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute=({children})=>{

    const {isAuthenticated} = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login"></Navigate>
    }
    else{
        return children;
    }

}
export default ProtectedRoute;


// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useAuth } from "./AuthContext";

// const ProtectedRoute = ({ children }) => {
//   const { isAuthenticated } = useAuth();

//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;
