import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useUserStateContext } from '../contexts/ContextProvider';

interface GuestLayoutProps {
  // Ajoutez ici les propriétés de votre composant si nécessaire
}

const GuestLayout: React.FC<GuestLayoutProps> = () => {



  const { currentUser,userToken } = useUserStateContext(); // Utiliser currentUser depuis le contexte

  if(userToken){
    return <Navigate to="/" />
  }
  
  return (
    <div>
       


    
     <Outlet/>    
    </div>
  );
};

export default GuestLayout;