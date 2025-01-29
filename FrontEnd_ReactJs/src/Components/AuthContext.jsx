import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = ()=> useContext(AuthContext)


export const AuthProvider= ({children}) =>{

    const [isauthenticated, setIsAuthenticated] = useState(()=>{
        return localStorage.getItem("isauthenticated") === "true"
    })

const login=()=>{
    setIsAuthenticated(true)
    localStorage.setItem("isauthenticated",true)
}
const logout=()=>{
    setIsAuthenticated(false)
    localStorage.setItem("isauthenticated",false)
}

return (

    <AuthContext.Provider value={{isauthenticated,login,logout}}>
        {children}
    </AuthContext.Provider>
)


}