import { Navigate, createBrowserRouter } from "react-router-dom";
import Surveys from "./view/Surveys";
import Signup from "./view/Signup";
import Login from "./view/Login";
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";
import Dashboard from "./view/Dashboard";
import SurveyView from "./view/SurveyView";
import TodoView from "./view/TodoView";

const router = createBrowserRouter([
{
    path: "/",
    element: <DefaultLayout />,
    children: [
        {
            path: "dashboard",
            element: <Navigate to="/"/>
        },
        {
            path: "/",
            element: <Dashboard />
        },
        {
            path: "surveys",
            element: <Surveys />
        },
        {
            path: "todo",
            element: <TodoView />
        },
        {   
            path: "surveys/create",
            element: <SurveyView title={""} description={""} img_url={""}/> 
        },
    ]
},
{
    path: "/",
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