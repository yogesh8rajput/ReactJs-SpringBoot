import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = ()=> useContext(AuthContext)


export const AuthProvider= ({children}) =>{

    const [isAuthenticated, setIsAuthenticated] = useState(()=>{
        return localStorage.getItem("isAuthenticated") === "true"
    })

const login=()=>{
    setIsAuthenticated(true)
    localStorage.setItem("isAuthenticated",true)
    console.log(isAuthenticated, "in")
}
const logout=()=>{
    setIsAuthenticated(false)
    console.log(isAuthenticated,"out")

    localStorage.setItem("isAuthenticated",false)
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
