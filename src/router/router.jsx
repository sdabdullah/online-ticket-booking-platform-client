import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllTickets from "../Pages/AllTickets/AllTickets";
import DashboardLayout from "../Layouts/DashboardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AdminProfile from "../Pages/Dashboard/Menu/Admin/AdminProfile";
import ManageTickets from "../Pages/Dashboard/Menu/Admin/ManageTickets";
import ManageUsers from "../Pages/Dashboard/Menu/Admin/ManageUsers";
import AdvertiseTickets from "../Pages/Dashboard/Menu/Admin/AdvertiseTickets";
import VendorProfile from "../Pages/Dashboard/Menu/Vendor/VendorProfile";
import AddTicket from "../Pages/Dashboard/Menu/Vendor/AddTicket";
import MyAddedTickets from "../Pages/Dashboard/Menu/Vendor/MyAddedTickets";
import RequestedBookings from "../Pages/Dashboard/Menu/Vendor/RequestedBookings";
import RevenueOverview from "../Pages/Dashboard/Menu/Vendor/RevenueOverview";
import MyBookedTickets from "../Pages/Dashboard/Menu/User/MyBookedTickets ";
import TransactionHistory from "../Pages/Dashboard/Menu/User/TransactionHistory";
import UserProfile from "../Pages/Dashboard/Menu/User/UserProfile";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/all-tickets',
                element: <AllTickets></AllTickets>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]

    },

    {
        path: 'dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/user-profile',
                element: <UserProfile></UserProfile>
            },
            {
                path: '/dashboard/my-booked-tickets',
                element: <MyBookedTickets></MyBookedTickets>
            },
            {
                path: '/dashboard/transaction-history',
                element: <TransactionHistory></TransactionHistory>
            },

            // Vendor Router
            {
                path: '/dashboard/vendor-profile',
                element: <VendorProfile></VendorProfile>
            },
            {
                path: '/dashboard/add-ticket',
                element: <AddTicket></AddTicket>
            },
            {
                path: '/dashboard/my-added-tickets',
                element: <MyAddedTickets></MyAddedTickets>
            },
            {
                path: '/dashboard/requested-bookings',
                element: <RequestedBookings></RequestedBookings>
            },
            {
                path: '/dashboard/revenue-overview',
                element: <RevenueOverview></RevenueOverview>
            },

            // Admin Router
            {
                path: '/dashboard/admin-profile',
                element: <AdminProfile></AdminProfile>
            },
            {
                path: '/dashboard/manage-tickets',
                element: <ManageTickets></ManageTickets>
            },
            {
                path: '/dashboard/manage-users',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: '/dashboard/advertise-tickets',
                element: <AdvertiseTickets></AdvertiseTickets>
            },


        ]
    },
])