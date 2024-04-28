import { createContext } from "react";
import { useState } from "react";

const StateContext = createContext({});

export const ContextProvider = () => {
    const [curentUser, setCurrentUser] = useState();

retrun (

    <StateContext.Provider>
        <StateContext.Provider value={{

        }}>  
{children}
    </StateContext.Provider>
)


}