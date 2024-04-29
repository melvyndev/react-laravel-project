import React from 'react';
import PageComponent from '../components/PageComponent';
import { useStateContext } from '../contexts/ContextProvider';
import SurveyListItem from '../components/SurveyListItem';

interface SurveysProps {
  // Ajoutez ici les propriétés de votre composant si nécessaire
}

const Surveys: React.FC<SurveysProps> = () => {

  const { surveys } = useStateContext();
  console.log(surveys);
  return (
    <PageComponent title='Surveys' button={(
      <button className='btn btn-primary'>Add Survey</button>
    )} >  
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8'>
        {surveys.map((survey:any) => (
          <SurveyListItem survey={survey} key={survey.id}  />
        ))}
      </div>
    </PageComponent>
  );
}
  


export default Surveys;
