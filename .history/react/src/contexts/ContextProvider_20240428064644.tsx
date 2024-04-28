import { createContext, useContext, useState } from "react";

interface ContextInterface {
    currentUser: any;
    setCurrentUser: React.Dispatch<React.SetStateAction<any>>;
    userToken: string | null;
    setUserToken: React.Dispatch<React.SetStateAction<string | null>>;
}

const StateContext = createContext<ContextInterface>({
    currentUser: null,
    setCurrentUser: () => {},
    userToken: null,
    setUserToken: () => {},
});

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentUser, setCurrentUser] = useState<any>(null);
    const [userToken, setUserToken] = useState<string | null>(null);

    return (
        <StateContext.Provider value={{ currentUser, setCurrentUser, userToken, setUserToken }}>
            {children}
        </StateContext.Provider>
    );
};

export const useUserStateContext = () => useContext(StateContext);

