import { createContext, useContext } from "react";
import { useState } from "react";

const StateContext = createContext({});

export const ContextProvider = ({ children }) => {
    const [curentUser, setCurrentUser] = useState();
    const [userToken, setUserToken] = useState(null);

    return (
        <StateContext.Provider value={{ 
            currentUser,
            setCurrentUser,
            userToken,
            setUserToken
         }}>
            {children}
        </StateContext.Provider>
    )
}

export const useUserStateContext = () => useContext(StateContext);
