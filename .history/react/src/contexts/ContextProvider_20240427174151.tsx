import { createContext } from "react";
import { useState } from "react";

const StateContext = createContext({});

export const ContextProvider = ({children}) => {
    const [curentUser, setCurrentUser] = useState();

return (

        <StateContext.Provider value={{

        }}>  
{children}
    </StateContext.Provider>
)


}