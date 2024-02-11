import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
// import Users from "../Pages/Users/Users";

import Details from "../Layouts/Details";
import UserDetails from "../Pages/UserDetails/UserDetails";
import LoginLayout from "../Layouts/LoginLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
// import SingleUser from "../Pages/SingleUser/SingleUser";




const router = createBrowserRouter([

   
    {
        path: '/',
        element: <Main></Main>,

    },

    {
        path:'/',
        element: <LoginLayout></LoginLayout>,
        children:[
            {
                path:'/login',
                element: <Login></Login>
            },

            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },

    {
        path:'/seeDetails',
        element: <Details></Details>,
        children: [
            {
                path: ':id',
                element: <UserDetails></UserDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
            }
        ]
    }

   
])

export default router;