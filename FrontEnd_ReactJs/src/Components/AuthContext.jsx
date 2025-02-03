import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = ()=> useContext(AuthContext)


export const AuthProvider= ({children}) =>{

    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return localStorage.getItem("isAuthenticated") === "true";
      });

    const login = () => {
        setIsAuthenticated(true);
        localStorage.setItem("isAuthenticated", "true"); 
        console.log("Logged In", true);
     }
     
     const logout = () => {
        setIsAuthenticated(false);
        localStorage.setItem("isAuthenticated", "false");
        console.log("Logged Out", false);
     }
     

return (

    <AuthContext.Provider value={{isAuthenticated,login,logout}}>
        {children}
    </AuthContext.Provider>
)


}


// import React, { createContext, useState, useContext } from "react";

// const AuthContext = createContext();

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const login = () => {
//     setIsAuthenticated(true);
//   };

//   const logout = () => {
//     setIsAuthenticated(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
