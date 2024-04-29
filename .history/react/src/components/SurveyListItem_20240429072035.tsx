import React from 'react';

interface SurveyListItemProps {
    survey: {
        title: string;
        description: string;
        img_url: string;
    }
}

const SurveyListItem<SurveyListItemProps>=>( survey : SurveyListItemProps) {
    return (
       <div className='flex flex-col rounded border border-gray-200 p-6 shadow'>
        <img src={survey.img_url} alt={survey.title} className='h-32 w-full object-cover' />
        <h3 className='mt-4 text-lg font-medium text-gray-900'>{survey.title}</h3>
        <p className='mt-1 text-sm text-gray-500'>{survey.description}</p>
       </div>
    );
}

export default SurveyListItem;
