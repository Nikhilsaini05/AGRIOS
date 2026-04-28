import { createContext, useContext, useState } from "react";


export const dataContext = createContext();

export function UserLoginData({children}){
    const [sessionToken , setSession] = useState(null); 
    const [user, setUser] = useState(null);


    const saveUserProfile = (profile)=> {
        if(!profile) return;

        setUser(profile);
    }

    // const isUserAvialable = ()=> {
    //     if(user){
    //         return user;
    //     }
    //     if(localdata.user){
    //         localdata.user;
    //     }
    //     return null;
    // }

    const setUserSession = (token) => {
        console.log(token);
        
        setSession(token);
    }


    return <dataContext.Provider
        value={{
            sessionToken,
            setSession,
            setUserSession,
            saveUserProfile,
            user
        }}
        >
            {children}
        </dataContext.Provider>
}

export const UserData = ()=> {
    return  useContext(dataContext); 
} 