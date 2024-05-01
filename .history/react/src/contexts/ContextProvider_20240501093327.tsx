import { useContext, FC } from "react";
import { createContext, useState } from "react";

const StateContext = createContext<{
  currentUser: {}; 
  userToken: string | null;
  surveys: Array<any>;
  questionTypes: Array<string>;
  toast: {
    message: string | null;
    show: boolean;
  };
  setCurrentUser: (user: object) => void;
  setUserToken: (token: string | null) => void;
  showToast: (message: string | null) => void;
}>({
  currentUser: {},
  userToken: null,
  surveys: [],
  questionTypes: [],
  toast: {
    message: null,
    show: false,
  },
  setCurrentUser: () => {},
  setUserToken: () => {},
  showToast: () => {}
});

const tmpSurveys = [
  {
    "id": 1,
    "image_url": "https:\/\/api.yoursurveys.xyz\/images\/vJutXzn02CDwdOyh.png",
    "title": "TheCodeholic YouTube channel",
    "slug": "thecodeholic-youtube-channel",
    "status": true,
    "description": "My name is Zura.<br>I am Web Developer with 9+ years of experience, free educational content creator, CTO, Lecturer and father of two wonderful daughters.<br><br>The purpose of the channel is to share my several years of experience with beginner developers.<br>Teach them what I know and make my experience as a lesson for others.",
    "created_at": "2022-01-07 13:23:41",
    "updated_at": "2022-01-18 16:34:19",
    "expire_date": "2022-01-23",
    "questions": [
      {
        "id": 15,
        "type": "text",
        "question": "From which country are you?",
        "description": null
      },
      {
        "id": 16,
        "type": "checkbox",
        "question": "Which language videos do you want to see on my channel?",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earum eos esse est ex facilis, iure laboriosam maiores neque nesciunt nulla placeat praesentium quae quos ratione, recusandae totam velit!",
        "data": {
          "options": [
            {
              "uuid": "8ee03188-9e7e-44e5-9176-7574c0beec6f",
              "text": "JavaScript"
            },
            {
              "uuid": "fe9497f2-8f05-4c82-9586-26e36736fa9e",
              "text": "PHP"
            },
            {
              "uuid": "db0f194c-d32d-4e19-929e-08f7b4e2bcc0",
              "text": "HTML + CSS"
            },
            {
              "uuid": "93273c4c-ac8f-432e-b847-e467df64ab9c",
              "text": "All of the above"
            },
            {
              "uuid": "d54818a7-ad7e-4b69-9287-16a8dc50a6cb",
              "text": "Everything Zura thinks will be good"
            }
          ]
        }
      },
      {
        "id": 17,
        "type": "select",
        "question": "Which PHP framework videos do you want to see on my channel?",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earum eos esse est ex facilis, iure laboriosam maiores neque nesciunt nulla placeat praesentium quae quos ratione, recusandae totam velit!",
        "data": {
          "options": [
            {
              "uuid": "fb907cfe-b7a1-4b24-86fb-03f9c44aa710",
              "text": "Laravel"
            },
            {
              "uuid": "e2629262-93ca-4a7a-8129-19c765664a04",
              "text": "Yii2"
            },
            {
              "uuid": "9a11a425-d9fe-4fe9-86af-bb814e3d9271",
              "text": "Codeigniter"
            },
            {
              "uuid": "484268b1-d3aa-47f8-a185-356ed48e50fe",
              "text": "Symfony"
            }
          ]
        }
      },
      {
        "id": 18,
        "type": "radio",
        "question": "Which Laravel Framework do you love most?",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earum eos esse est ex facilis, iure laboriosam maiores neque nesciunt nulla placeat praesentium quae quos ratione, recusandae totam velit!",
        "data": {
          "options": [
            {
              "uuid": "c02e50e6-5ebf-4344-9822-baa16502dbdb",
              "text": "Laravel 5"
            },
            {
              "uuid": "90a15aae-ef4c-4d04-aa05-8e840d4a2ded",
              "text": "Laravel 6"
            },
            {
              "uuid": "93c64532-c1eb-4bfd-bd00-ab51cafdee78",
              "text": "Laravel 7"
            },
            {
              "uuid": "51f6a704-7a86-47a4-9b2d-72bb026a3371",
              "text": "Laravel 8"
            }
          ]
        }
      },
      {
        "id": 19,
        "type": "checkbox",
        "question": "What type of projects do you want to see on my channel built with Laravel?",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earum eos esse est ex facilis, iure laboriosam maiores neque nesciunt nulla placeat praesentium quae quos ratione, recusandae totam velit!",
        "data": {
          "options": [
            {
              "uuid": "c5519ab0-3282-4758-a34b-506052bf1342",
              "text": "REST API"
            },
            {
              "uuid": "dfbbc0af-8fff-44ae-be36-e85270041729",
              "text": "E-commerce"
            },
            {
              "uuid": "6940c122-505f-4d9d-a103-472f923fad94",
              "text": "Real Estate"
            },
            {
              "uuid": "2b3c12a4-8f3c-4276-ae59-4e9d55e849be
