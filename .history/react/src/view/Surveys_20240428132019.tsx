import React from 'react';
import PageComponent from '../components/PageComponent';
import { useUserStateContext } from '../contexts/ContextProvider';

interface SurveysProps {
  // Ajoutez ici les propriétés de votre composant si nécessaire
}

const Surveys: React.FC<SurveysProps> = () => {

  const {surveys} = useUserStateContext();
  return (
    <>

<PageComponent title='Surveys' button={''} children={undefined}>  
{
  surveys.map((survey) => (
    <div key={survey.id}>
      <h2>{survey.title}</h2>
      <p>{survey.description}</p>
    </div>
  ))
}

</PageComponent>
  
</>
  );
};

export default Surveys;