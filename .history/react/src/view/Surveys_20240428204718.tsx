import React from 'react';
import PageComponent from '../components/PageComponent';
import { useStateContext } from '../contexts/ContextProvider';

interface SurveysProps {
  // Ajoutez ici les propriétés de votre composant si nécessaire
}

const Surveys: React.FC<SurveysProps> = () => {

  const { surveys } = useStateContext();
  console.log(surveys);
  return (
    <>

<PageComponent title='Surveys' button={''} >  
{
  surveys.map((survey:any) => (
    <SurveyListItem survey={survey} key={survey.id}  />
    
  
  ))
}

</PageComponent>
  
</>
  );
};

export default Surveys;