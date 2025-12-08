import React from 'react';
import TicketCard from '../../component/ForHome/TicketCard';
import WhyChoose from '../../component/ForHome/WhyChoose';
import { Button } from "flowbite-react";

const Home = () => {
    return (
        <div>
            <div className='w-11/12 mx-auto'>
                <img className='h-90' src="https://images.unsplash.com/photo-1759313912855-0ea4bb3c0a2c?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />


            </div>


            {/* Advertisement/Featured Section */}
            <div className='py-16 bg-gray-50 dark:bg-gray-800'>
                <div className='w-11/12 mx-auto'>
                    <div className='text-center mb-12'>
                        <h2 className='text-4xl font-bold text-gray-900 dark:text-white mb-4'>Featured Tickets</h2>
                        <p className='text-gray-600 dark:text-gray-300'>Handpicked deals for your next journey</p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

                        <TicketCard></TicketCard>
                        <TicketCard></TicketCard>
                        <TicketCard></TicketCard>

                    </div>


                </div>
            </div>


            {/* Latest Tickets Section */}
            <div className='py-16'>
                <div className='w-11/12 mx-auto'>
                    <div className='text-center mb-12'>
                        <h2 className='text-4xl font-bold text-gray-900 dark:text-white mb-4'>Latest Tickets</h2>
                        <p className='text-gray-600 dark:text-gray-300'>Recently added tickets for your convenience</p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

                        <TicketCard></TicketCard>
                        <TicketCard></TicketCard>
                        <TicketCard></TicketCard>

                    </div>

                </div>
            </div>

            {/* Why Choose TicketBari Section */}
            <div className='py-16 bg-gray-50 dark:bg-gray-800'>
                <div className='w-11/12 mx-auto'>
                    <div className='text-center mb-12'>
                        <h2 className='text-4xl font-bold text-gray-900 dark:text-white mb-4'>Why Choose TicketBari?</h2>
                        <p className='text-gray-600 dark:text-gray-300'>Your trusted travel companion in Bangladesh</p>
                    </div>

                    <WhyChoose></WhyChoose>

                </div>
            </div>


            {/* Section */}
            <section className='py-16 bg-blue-600 dark:bg-blue-700 px-4'>
                <div className='text-center text-white'>
                    <h2 class="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
                    <p class="text-xl mb-8 text-blue-100">Book your tickets now and travel with confidence</p>
                    <button className='bg-white text-black px-6 py-3 rounded-lg'>Book Now</button>
                </div>
            </section>

        </div>
    );
};

export default Home;