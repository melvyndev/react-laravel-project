import { PhotoIcon, UserCircleIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";

const SurveyView : React.FC = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
      });
      
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
      

      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submitted Data:', formData);
        // Ajoutez ici la logique pour envoyer les données au serveur
      };
      
    return (
        <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center">
        <form onSubmit={handleSubmit}>
          <div className="relative w-full mb-3">
          <label className="block uppercase text-gray-700 text-sm font-bold mb-2"
                htmlFor="username">
             Username
          </label>
          <input
            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
            type="text" 
            id="username" 
            name="username"
            placeholder="Username"
            onChange={handleChange}
            value={formData.username}
          />
        </div>

        <div className="relative w-full mb-3">
          <label className="block uppercase text-gray-700 text-sm font-bold mb-2"
                htmlFor="email">
             Email
          </label>
          <input
            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
            type="text" 
            id="email" 
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
          />
        </div>

        <div className="relative w-full mb-3">
          <label className="block uppercase text-gray-700 text-sm font-bold mb-2"
                htmlFor="password">
             Password
          </label>
          <input
            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
            type="password" 
            id="password" 
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
          />
        </div>

        <button 
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Sign up
        </button>
        </form>
        </div>
        </div>
       
      )
}

export default SurveyView;

