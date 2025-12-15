import React from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../Pages/Dashboard/Sidebar';
import Navbar from '../Pages/Dashboard/Navbar';
import NavbarMenu from '../component/Shared/Navbar/NavbarMenu';

const DashboardLayout = () => {
    return (
        <div>

            <section>
                <header>
                    {/* <NavbarMenu></NavbarMenu> */}
                </header>
            </section>

            <section>

                <Sidebar></Sidebar>
            </section>

            <div className='grow ml-16 md:ml-65 h-full lg:h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white'>
                <div>
                    <Navbar></Navbar>
                </div>
                <Outlet></Outlet>

            </div>

        </div>
    );
};

export default DashboardLayout;