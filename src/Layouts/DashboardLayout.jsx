import React from 'react';
import Sidebar from '../component/Dashboard/Sidebar';
import { Outlet } from 'react-router';

const DashboardLayout = () => {
    return (
        <div>
            <Sidebar></Sidebar>
            
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;