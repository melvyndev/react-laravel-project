import React from 'react';

interface SurveysProps {
  // Ajoutez ici les propriétés de votre composant si nécessaire
}

const Surveys: React.FC<SurveysProps> = () => {
  return (
    <>

    <header className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Surveys</h1>
      </div>
    </header>
    <main>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8"></div>
    </main>
</>
  );
};

export default Surveys;