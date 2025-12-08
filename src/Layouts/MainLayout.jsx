import React from 'react';
import Navbar from '../component/Shared/Navbar/NavbarMenu';
import { Outlet } from 'react-router';
import Footer from '../component/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <section>
                <Navbar></Navbar>
            </section>
            <main>
                <Outlet></Outlet>
            </main>

            <section>
                <Footer></Footer>
            </section>
        </div>
    );
};

export default MainLayout;