import React from 'react';
import { Outlet } from 'react-router-dom';

interface GuestLayoutProps {
  // Ajoutez ici les propriétés de votre composant si nécessaire
}

const GuestLayout: React.FC<GuestLayoutProps> = () => {
  return (
    <div>
      indente le code
      <Outlet/>    
 </div>
  );
};

export default GuestLayout;