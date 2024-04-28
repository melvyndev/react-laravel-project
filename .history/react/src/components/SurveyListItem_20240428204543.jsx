import  React from 'react';

export default function SurveyListItem({survey,key}) {
    return (
        <li className="relative py-3 px-2"> 
            <div className="flex items-center space-x-4">
                <div className="min-w-0 flex-1">
                    <a href="#" className="block focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        <p className="text-sm font-medium text-gray-900">
                            {props.title}
                        </p>
                        <p className="text-sm text-gray-500">
                            {props.description}
                        </p>
                    </a>
                </div>
            </div>  

        </li>
    );
}