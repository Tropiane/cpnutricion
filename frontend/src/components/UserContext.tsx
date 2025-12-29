import React from "react";

interface UserContextType{
    user: string | null;
    setUser: (user: string | null)=> void;
    logout: ()=> void;
}

export const UserContext = React.createContext<UserContextType>({
    user:null,
    setUser: ()=>{},
    logout: ()=>{}
})