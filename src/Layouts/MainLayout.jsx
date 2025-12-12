import React from 'react';
import Navbar from '../component/Shared/Navbar/NavbarMenu';
import { Outlet } from 'react-router';
import Footer from '../component/Shared/Footer/MainFooter';

const MainLayout = () => {
    return (
        <div>
            <section className='pb-17'>
                <header className='fixed top-0 left-0 right-0 z-50 bg-white shadow '>
                    <Navbar></Navbar>
                </header>
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