import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'all-tickets',
                element: <p>All Tickts</p>
            },
            {
                path: 'all-tickets',
                element: <p>All Tickts</p>
            },
            {
                path: 'dashboard',
                element: <p>dashboard</p>,
                children:[
                    {
                        path: 'user',
                        element: <p>User</p>
                    },
                    {
                        path: 'vendor',
                        element: <p>vendor</p>
                    },
                ]
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
        ]
    }
])