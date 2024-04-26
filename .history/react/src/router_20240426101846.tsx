import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Surveys from "./view/Surveys";
import Signup from "./view/Signup";
import Login from "./view/Login";

const router = createBrowserRouter([
{
    path: "/",
    element: <App />
},
{
    path: "/surveys",
    element: <Surveys />
},
{
    path: "/login",
    element: <Login />
},
{
    path: "/signup",
    element: <Signup />
},

    
])

export default router;