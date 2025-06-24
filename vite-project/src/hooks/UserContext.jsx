import { createContext } from "react";
//create context
export const UserContext=createContext();

//contextProvider
export const UserProvider=({children})=>{
    const name='Vinith'
    return(
        <UserContext.Provider value={name}>
            {children}
        </UserContext.Provider>
    )
}