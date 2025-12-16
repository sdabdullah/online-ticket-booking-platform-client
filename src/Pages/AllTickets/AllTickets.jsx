import { Card } from 'flowbite-react';
import React from 'react';

const AllTickets = () => {
    return (
        <div className='w-11/12 mx-auto py-15'>

            <div className='text-center mb-12'>
                <h2 className='text-4xl font-bold text-gray-900 dark:text-white mb-4'>All Tickets</h2>
                <p className='text-gray-600 dark:text-gray-300'>Handpicked deals for your next journey</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

                <Card className="lg:max-w-sm"
                    imgAlt=""
                    imgSrc="https://images.unsplash.com/photo-1582536621449-4638cf0bdbb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">

                    <div className='flex justify-between'>
                        <h2 className='text-md md:text-lg lg:text-xl font-bold'>Bus Ticket</h2>
                    </div>

                    <div>
                        <h5 className="text-md tracking-tight text-gray-900 dark:text-white">
                            From: Rajshahi to: Coxbazar
                        </h5>
                        <div className='flex justify-between'>
                            <p> Transport type</p> <p>Bus</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>Price:</p> <p>(price * Booking)</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>Ticket Quantity:</p> <p>100</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>Perks:</p> <p>AC, Breakfast</p>
                        </div>
                    </div>


                    <div className=" flex items-center">
                        <p>Departure date/time: </p>
                        <p>15/12/25</p>
                    </div>

                    <button className="relative group text-sm inline-block py-2 px-7 cursor-pointer text-center text-gray-50 hover:text-gray-900 border bg-cyan-700 font-semibold rounded-full overflow-hidden transition duration-200">

                        <div
                            className="absolute top-0 right-full w-full h-full bg-white transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"
                        ></div>
                        <span className="relative">See details</span>
                    </button>
                </Card>
                <Card className="lg:max-w-sm"
                    imgAlt=""
                    imgSrc="https://images.unsplash.com/photo-1582536621449-4638cf0bdbb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">

                    <div className='flex justify-between'>
                        <h2 className='text-md md:text-lg lg:text-xl font-bold'>Bus Ticket</h2>
                    </div>

                    <div>
                        <h5 className="text-md tracking-tight text-gray-900 dark:text-white">
                            From: Rajshahi to: Coxbazar
                        </h5>
                        <div className='flex justify-between'>
                            <p> Transport type</p> <p>Bus</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>Price:</p> <p>(price * Booking)</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>Ticket Quantity:</p> <p>100</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>Perks:</p> <p>AC, Breakfast</p>
                        </div>
                    </div>


                    <div className=" flex items-center">
                        <p>Departure date/time: </p>
                        <p>15/12/25</p>
                    </div>

                    <button className="relative group text-sm inline-block py-2 px-7 cursor-pointer text-center text-gray-50 hover:text-gray-900 border bg-cyan-700 font-semibold rounded-full overflow-hidden transition duration-200">

                        <div
                            className="absolute top-0 right-full w-full h-full bg-white transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"
                        ></div>
                        <span className="relative">See details</span>
                    </button>
                </Card>
                <Card className="lg:max-w-sm"
                    imgAlt=""
                    imgSrc="https://images.unsplash.com/photo-1582536621449-4638cf0bdbb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">

                    <div className='flex justify-between'>
                        <h2 className='text-md md:text-lg lg:text-xl font-bold'>Bus Ticket</h2>
                    </div>

                    <div>
                        <h5 className="text-md tracking-tight text-gray-900 dark:text-white">
                            From: Rajshahi to: Coxbazar
                        </h5>
                        <div className='flex justify-between'>
                            <p> Transport type</p> <p>Bus</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>Price:</p> <p>(price * Booking)</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>Ticket Quantity:</p> <p>100</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>Perks:</p> <p>AC, Breakfast</p>
                        </div>
                    </div>


                    <div className=" flex items-center">
                        <p>Departure date/time: </p>
                        <p>15/12/25</p>
                    </div>

                    <button className="relative group text-sm inline-block py-2 px-7 cursor-pointer text-center text-gray-50 hover:text-gray-900 border bg-cyan-700 font-semibold rounded-full overflow-hidden transition duration-200">

                        <div
                            className="absolute top-0 right-full w-full h-full bg-white transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"
                        ></div>
                        <span className="relative">See details</span>
                    </button>
                </Card>

            </div>
        </div>
    );
};

export default AllTickets;