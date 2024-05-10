import React, { Fragment, useEffect } from 'react'; // Importer Fragment depuis react
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { NavLink, Navigate, Outlet } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';
import { Bars3Icon, BellIcon, UserCircleIcon, XMarkIcon } from '@heroicons/react/16/solid';
import axiosClient from '../axios';
// Définition des éléments de navigation
const navigation = [
  { name: 'Dashboard', href: '/', current: true },
  { name: 'Surveys', href: '/surveys', current: false },
];

// Définition des éléments de navigation pour l'utilisateur
const userNavigation = [
  { name: 'Sign out', href: '#' },
];

// Fonction utilitaire pour gérer les classes CSS conditionnelles
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

// Composant DefaultLayout
const DefaultLayout: React.FC = () => {
  const { currentUser,userToken,setCurrentUser,setUserToken } = useStateContext(); // Utiliser currentUser depuis le contexte


  if (!userToken) {
    return <Navigate to="login" />;
  }

  

  function logout(ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void {
    console.log('log out');
    ev.preventDefault();
    axiosClient.post("/logout").then((res) => {
      setCurrentUser({});
      setUserToken(null);
    });  }

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      {/* Remplacer l'image par votre propre logo */}
                      <img
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {/* Utilisation de NavLink pour la navigation */}
                        {navigation.map((item) => (
                          <NavLink
                            key={item.name}
                            to={item.href}
                            className={classNames(
                              item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      {/* Menu déroulant pour le profil de l'utilisateur */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          {/* Utiliser une image ou une icône pour l'avatar utilisateur */}
                          <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            {/* Utiliser currentUser pour afficher l'avatar */}
                          </Menu.Button>
                        </div>
                        {/* Transition pour le menu déroulant */}
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                              <button
                                onClick={(ev) => logout(ev)}
                                className={
                                  "block px-4 py-2 text-sm text-gray-700"
                                }
                              >
                                Sign out
                              </button>
                            </Menu.Item>
                          </Menu.Items>

                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Bouton de menu mobile */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {/* Utilisation d'icônes pour le bouton de menu mobile */}
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              {/* Panneau du menu mobile (Disclosure.Panel) */}
              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as={NavLink}
                      to={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
DVD
                </div>
                {/* Section utilisateur dans le menu mobile */}
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      {/* Utiliser une image ou une icône pour l'avatar utilisateur */}
                      <UserCircleIcon className="h-10 w-10 rounded-full" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{currentUser?.name}</div>
                      {/* Afficher l'email de l'utilisateur s'il est disponible */}
                      <div className="text-sm font-medium leading-none text-gray-400">{currentUser?.email}</div>
                    </div>
                    {/* Bouton pour les notifications (placeholder) */}
                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  {/* Liste d'options pour l'utilisateur dans le menu mobile */}
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* Outlet pour afficher le contenu spécifique à chaque route */}
        <Outlet />
      </div>
    </>
  );
};

export default DefaultLayout;
