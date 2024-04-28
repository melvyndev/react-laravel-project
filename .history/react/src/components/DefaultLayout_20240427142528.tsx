import React from 'react';

interface DefaultProps {
  // Ajoutez ici les propriétés de votre composant si nécessaire
}

const DefaultLayout: React.FC<DefaultProps> = () => {
  return (
    <div>
      <h1>default sur le tableau de bord</h1>
    </div>
  );
};

export default DefaultLayout;