import React from 'react';

interface SurveyListItemProps {
    survey: {
        title: string;
        description: string;
    }
}

export default function SurveyListItem({ survey, key }: SurveyListItemProps) {
    return (
       <div>
        SurveysProps
       </div>
    );
}
