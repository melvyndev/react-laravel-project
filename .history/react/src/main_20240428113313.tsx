import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import router from './router.tsx'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { ContextProvider } from './contexts/ContextProvider.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextProvider> 
    <RouterProvider router={router} />
    </ContextProvider> 
   </React.StrictMode>,
)
