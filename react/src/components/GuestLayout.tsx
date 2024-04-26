import React from 'react';
import { Outlet } from 'react-router-dom';

interface GuestLayoutProps {
  // Ajoutez ici les propriétés de votre composant si nécessaire
}

const GuestLayout: React.FC<GuestLayoutProps> = () => {
  return (
    <div>
        part of GuestLayout
      <Outlet/>    
 </div>
  );
};

export default GuestLayout;