import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Surveys from "./view/Surveys";
import Signup from "./view/Signup";
import Login from "./view/Login";
import GuestLayout from "./components/GuestLayout";
import Dashboard from "./view/Dashboard";
import DefaultLayout from "./components/DefaultLayout";

const router = createBrowserRouter([

{
    path: "/",
    element: <DefaultLayout />,
    children: [
        {
            path: "/",
            element: <Navigate to="/dashboard"/>
        
        },
        {
            path: "surveys",
            element: <Surveys />
        },
    ]
},
{
    path: "/guest",
    element: <GuestLayout />,
    children: [
        {
            path: "login",
            element: <Login />
        },
        {
            path: "signup",
            element: <Signup />
        },
    ]
},


    
])

export default router;