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
import MyBookedTickets from "../Pages/Dashboard/Menu/User/MyBookedTickets";
import TransactionHistory from "../Pages/Dashboard/Menu/User/TransactionHistory";
import UserProfile from "../Pages/Dashboard/Menu/User/UserProfile";
import UpdateVendorTicekt from "../Pages/Dashboard/Menu/Vendor/UpdateVendorTicekt";
import TicketDetailsCard from "../component/ForHome/TicketDetailsCard";
import PrivateRouter from "./PrivateRouter";

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
                element: <PrivateRouter><AllTickets></AllTickets></PrivateRouter>
            },
            {
                path: '/ticket-details/:id',
                element: <PrivateRouter><TicketDetailsCard></TicketDetailsCard></PrivateRouter> 
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
        path: '/',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                index: true,
                path: '/dashboard',
                element: <PrivateRouter><Dashboard></Dashboard></PrivateRouter> 
            },
            {
                path: '/user-profile',
                element: <UserProfile></UserProfile>
            },
            {
                path: '/my-booked-tickets',
                element: <MyBookedTickets></MyBookedTickets>
            },
            {
                path: '/transaction-history',
                element: <TransactionHistory></TransactionHistory>
            },

            // Vendor Router
            {
                path: '/vendor-profile',
                element: <VendorProfile></VendorProfile>
            },
            {
                path: '/add-ticket',
                element: <AddTicket></AddTicket>
            },
            {
                path: '/my-added-tickets',
                element: <MyAddedTickets></MyAddedTickets>
            },
            {
                path: '/update-vendor-ticket/:id',
                element: <UpdateVendorTicekt></UpdateVendorTicekt>
            },
            {
                path: '/requested-bookings',
                element: <RequestedBookings></RequestedBookings>
            },
            {
                path: '/revenue-overview',
                element: <RevenueOverview></RevenueOverview>
            },

            // Admin Router
            {
                path: '/admin-profile',
                element: <AdminProfile></AdminProfile>
            },
            {
                path: '/manage-tickets',
                element: <ManageTickets></ManageTickets>
            },
            {
                path: '/manage-users',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: '/advertise-tickets',
                element: <AdvertiseTickets></AdvertiseTickets>
            },


        ]
    },
])