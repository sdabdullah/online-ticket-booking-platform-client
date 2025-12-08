import React from 'react';
import Navbar from '../component/Shared/Navbar/NavbarMenu';
import { Outlet } from 'react-router';
import Footer from '../component/Shared/Footer/MainFooter';

const MainLayout = () => {
    return (
        <div>
            <section className=''>
                <header>
                    <Navbar></Navbar>
                </header>
            </section>
            
            <main className=''>
                <Outlet></Outlet>
            </main>

            <section>
                <Footer></Footer>
            </section>
        </div>
    );
};

export default MainLayout;