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
    const [currentUser, setCurrentUser] = useState<any>(
        {
   name: 'Tom Cook',
   email: 'tom@example.com',
   imageUrl:
     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
    );
    const [userToken, setUserToken] = useState<string | null>(null);

    return (
        <StateContext.Provider value={{ currentUser, setCurrentUser, userToken, setUserToken }}>
            {children}
        </StateContext.Provider>
    );
};

export const useUserStateContext = () => useContext(StateContext);

