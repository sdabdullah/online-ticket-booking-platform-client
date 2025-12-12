import React from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../Pages/Dashboard/Sidebar';
import Navbar from '../Pages/Dashboard/Navbar';
import MainFooter from '../component/Shared/Footer/MainFooter';

const DashboardLayout = () => {
    return (
        <div>
            
            <Sidebar></Sidebar>
            


            <div className='grow ml-22 md:ml-25 h-full lg:h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white'>
                <div>
                    <Navbar></Navbar>
                </div>
                <Outlet></Outlet>
                
            </div>

            
        </div>
    );
};

export default DashboardLayout;