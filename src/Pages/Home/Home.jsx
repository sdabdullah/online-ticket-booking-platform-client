import React from 'react';
import TicketCard from '../../component/ForHome/TicketCard';
import WhyChoose from '../../component/ForHome/WhyChoose';
import { NavLink } from 'react-router';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import LoaderSpinner from '../../component/Shared/Navbar/LoaderSpinner';
import buBanner from '../../assets/banner.jpg'

const Home = () => {
    const axiosSecure = useAxiosSecure();

    const { data: tickets = [], isLoading, } = useQuery({
        queryKey: ['TicketInHome'],
        queryFn: async () => {
            const result = await axiosSecure.get('/tickets')
            // console.log(result.data);
            return result.data
        }
    })

    if (isLoading) {
        return <LoaderSpinner></LoaderSpinner>
    }

    return (
        <div>
            <div>
                <img className='w-full' src={buBanner} alt="" />
            </div>


            {/* Advertisement/Featured Section */}
            <div className='py-16 bg-gray-50 dark:bg-gray-800'>
                <div className='w-11/12 mx-auto'>
                    <div className='text-center mb-12'>
                        <h2 className='text-4xl font-bold text-gray-900 dark:text-white mb-4'>Featured Tickets</h2>
                        <p className='text-gray-600 dark:text-gray-300'>Handpicked deals for your next journey</p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

                        {
                            tickets.map(ticket => <TicketCard key={ticket._id} ticket={ticket}></TicketCard>)
                        }


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

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>

                        {
                            tickets.map(ticket => <TicketCard key={ticket._id} ticket={ticket}></TicketCard>)
                        }
                        {/* <TicketCard></TicketCard> */}

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
            <section className='py-16 bg-cyan-700 dark:bg-cyan-700 px-4'>
                <div className='text-center text-white'>
                    <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
                    <p className="text-xl mb-8 text-blue-100">Book your tickets now and travel with confidence</p>


                    {/* <NavLink to='/register'
                        className="relative group inline-block  py-2 px-7 text-center text-gray-50 hover:text-gray-900 bg-cyan-700 font-semibold rounded-full overflow-hidden transition duration-200"
                        href="#"
                    >
                        <div
                            className="absolute top-0 right-full w-full h-full bg-white transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"
                        ></div>
                        <span className="relative">Book Now</span>
                    </NavLink> */}

                    <NavLink to='/register'
                        className="relative group inline-block py-2 px-7 cursor-pointer text-center text-gray-50 hover:text-gray-900 border bg-cyan-700 font-semibold rounded-full overflow-hidden transition duration-200">
                        <div
                            className="absolute top-0 right-full w-full h-full bg-white transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"
                        ></div>
                        <span className="relative">Book Now</span>
                    </NavLink>

                </div>
            </section>

        </div>
    );
};

export default Home;