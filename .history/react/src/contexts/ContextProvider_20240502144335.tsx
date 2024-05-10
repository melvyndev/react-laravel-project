import { useContext, createContext } from 'react'; // c'est un fichier tsx
import { useState } from 'react';

interface ContextInterface {
  currentUser: any;
  setCurrentUser: (user: any) => void;
  userToken: string | null;
  setUserToken: (token: string | null) => void;
  surveys: any[];
  questionTypes: string[];
  toast: {message: string, show: boolean};
  showToast: (message: string) => void;
}

const StateContext = createContext<ContextInterface>({
  currentUser: {},
  setCurrentUser: () => {},
  userToken: null,
  setUserToken: () => {},
  surveys: [],
  questionTypes: [],
  toast: {
    message: '',
    show: false,
  },
  showToast: () => {},
});

export const ContextProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState({});
  const [userToken, _setUserToken] = useState( '');
  const [surveys, setSurveys] = useState([]);
  const [questionTypes] = useState(['text', 'select', 'radio', 'checkbox', 'textarea']);
  const [toast, setToast] = useState({message: '', show: false});

  const setUserToken = (token: string | null) => {
    if (token) {
      localStorage.setItem('TOKEN', token)
    } else {
      localStorage.removeItem('TOKEN')
    }
    _setUserToken(token);
  }

  const showToast = (message: string) => {
    setToast({ message, show: true });
    setTimeout(() => {
      setToast({message: '', show: false});
    }, 5000);
  }

  return (
    <StateContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        userToken,
        setUserToken,
        surveys,
        questionTypes,
        toast,
        showToast
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
