import React, { useState } from "react";
import axiosClient from "../axios.js";
import { useStateContext } from "../contexts/ContextProvider.js";
import { Link } from 'react-router-dom';
import { LockClosedIcon } from "@heroicons/react/24/outline";

interface SignupProps {
}

const Signup :React.FC<SignupProps> = () => {

  const { setCurrentUser, setUserToken } = useStateContext();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (ev) => {
    ev.preventDefault();
    setError("");

    axiosClient
      .post('/signup', {
        name: fullName,
        email,
        password,
        password_confirmation: passwordConfirmation,
      })
      .then(({ data }) => {
        console.log(data)
        setCurrentUser(data.user)
        setUserToken(data.token)
      })
      .catch((error) => {
        if (error.response) {
          const finalErrors = Object.values(error.response.data.errors).reduce((accum, next) => [...accum, ...next], [])
          console.log(finalErrors)
          setError(finalErrors.join('<br>'))
        }
        console.error(error)
      });
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">

      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
Inscrivez vous
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        ou{" "}
        <Link
          to="/login"
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Connecté vous ici
        </Link>
      </p>

      {error && (<div className="bg-red-500 rounded py-2 px-3 text-white" dangerouslySetInnerHTML={{__html: error}}>
      </div>)}

      <form
        onSubmit={onSubmit}
        className="mt-8 space-y-6"
        action="#"
        method="POST"
      >
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md shadow-sm space-y-2">
          <div>
            <label htmlFor="full-name" className="sr-only">
            Prénom
            </label>
            <input
              id="full-name"
              name="name"
              type="text"
              required
              value={fullName}
              onChange={ev => setFullName(ev.target.value)}
              className="block w-full rounded-none rounded-t-md border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Full Name"
            />
          </div>
          <div>
            <label htmlFor="email-address" className="sr-only">
              Adresse email
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={ev => setEmail(ev.target.value)}
              className="block w-full rounded-none border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Mot de passe
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={ev => setPassword(ev.target.value)}
              className="block w-full rounded-none border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Password"
            />
          </div>

          <div>
            <label htmlFor="password-confirmation" className="sr-only">
             Confirmation du mot de passe
            </label>
            <input
              id="password-confirmation"
              name="password_confirmation"
              type="password"
              required
              value={passwordConfirmation}
              onChange={ev => setPasswordConfirmation(ev.target.value)}
              className="block w-full rounded-none rounded-b-md border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Password Confirmation"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />
            </span>
            S'inscrire
          </button>
        </div>
      </form>
      </div>      </div>


    </>
  );
} 

export default Signup;
