import { Card } from 'flowbite-react';
import React from 'react';

const MyBookedTickets = () => {
    return (
        <div className='grow p-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-3'>

            <Card className="lg:max-w-sm "
                imgAlt=""
                imgSrc="https://images.unsplash.com/photo-1582536621449-4638cf0bdbb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">

                <div className='flex justify-between'>
                    <h2 className='text-md md:text-lg lg:text-xl font-bold'>Bus Ticket</h2>
                    <h5 className='bg-green-200 px-2 md:px-3 py-1 text-xs md:text-sm rounded-full font-semibold'>Status: Pending</h5>
                </div>

                <div>
                    <h5 className="text-md tracking-tight text-gray-900 dark:text-white">
                        From: Rajshahi to: Coxbazar
                    </h5>
                    <div className='flex justify-between'>
                        <p className=''>Seats Quantity:</p> <p>2</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Total:</p> <p>(price * Booking)</p>
                    </div>
                </div>


                <div className=" flex items-center">
                    <p>Departure date/time: </p>
                    <p>15/12/25</p>
                </div>

                <div className="mb-5 flex items-center">
                    <p>A countdown will be shown</p>
                </div>


                <div className="flex">
                    {/* flex items-center justify-between */}
                    {/* <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span> */}

                    <button className="relative group text-sm inline-block py-2 px-7 cursor-pointer text-center text-gray-50 hover:text-gray-900 border bg-cyan-700 font-semibold rounded-full overflow-hidden transition duration-200">

                        <div
                            className="absolute top-0 right-full w-full h-full bg-white transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"
                        ></div>
                        <span className="relative">Pay Now</span>
                    </button>

                    {/* <button
                        className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                        
                    </button> */}

                    <button className="relative group text-sm inline-block py-2 px-7 cursor-pointer text-center text-gray-50 hover:text-gray-900 border bg-cyan-700 font-semibold rounded-full overflow-hidden transition duration-200">

                        <div
                            className="absolute top-0 right-full w-full h-full bg-white transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"
                        ></div>
                        <span className="relative">Book Now</span>
                    </button>
                </div>

                <button className="relative group text-sm inline-block py-2 px-7 cursor-pointer text-center text-gray-50 hover:text-gray-900 border bg-cyan-700 font-semibold rounded-full overflow-hidden transition duration-200">

                    <div
                        className="absolute top-0 right-full w-full h-full bg-white transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"
                    ></div>
                    <span className="relative">Cancel Booking</span>
                </button>
            </Card>

            <Card className="lg:max-w-sm "
                imgAlt=""
                imgSrc="https://images.unsplash.com/photo-1582536621449-4638cf0bdbb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">

                <div className='flex justify-between'>
                    <h2 className='text-md md:text-lg lg:text-xl font-bold'>Bus Ticket</h2>
                    <h5 className='bg-green-200 px-2 md:px-3 py-1 text-xs md:text-sm rounded-full font-semibold'>Status: Pending</h5>
                </div>

                <div>
                    <h5 className="text-md tracking-tight text-gray-900 dark:text-white">
                        From: Rajshahi to: Coxbazar
                    </h5>
                    <div className='flex justify-between'>
                        <p className=''>Seats Quantity:</p> <p>2</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Total:</p> <p>(price * Booking)</p>
                    </div>
                </div>


                <div className=" flex items-center">
                    <p>Departure date/time: </p>
                    <p>15/12/25</p>
                </div>

                <div className="mb-5 flex items-center">
                    <p>A countdown will be shown</p>
                </div>


                <div className="flex">
                    {/* flex items-center justify-between */}
                    {/* <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span> */}

                    <button className="relative group text-sm inline-block py-2 px-7 cursor-pointer text-center text-gray-50 hover:text-gray-900 border bg-cyan-700 font-semibold rounded-full overflow-hidden transition duration-200">

                        <div
                            className="absolute top-0 right-full w-full h-full bg-white transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"
                        ></div>
                        <span className="relative">Pay Now</span>
                    </button>

                    {/* <button
                        className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                        
                    </button> */}

                    <button className="relative group text-sm inline-block py-2 px-7 cursor-pointer text-center text-gray-50 hover:text-gray-900 border bg-cyan-700 font-semibold rounded-full overflow-hidden transition duration-200">

                        <div
                            className="absolute top-0 right-full w-full h-full bg-white transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"
                        ></div>
                        <span className="relative">Book Now</span>
                    </button>
                </div>

                <button className="relative group text-sm inline-block py-2 px-7 cursor-pointer text-center text-gray-50 hover:text-gray-900 border bg-cyan-700 font-semibold rounded-full overflow-hidden transition duration-200">

                    <div
                        className="absolute top-0 right-full w-full h-full bg-white transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"
                    ></div>
                    <span className="relative">Cancel Booking</span>
                </button>
            </Card>


            <Card className="lg:max-w-sm "
                imgAlt=""
                imgSrc="https://images.unsplash.com/photo-1582536621449-4638cf0bdbb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">

                <div className='flex justify-between'>
                    <h2 className='text-md md:text-lg lg:text-xl font-bold'>Bus Ticket</h2>
                    <h5 className='bg-green-200 px-2 md:px-3 py-1 text-xs md:text-sm rounded-full font-semibold'>Status: Pending</h5>
                </div>

                <div>
                    <h5 className="text-md tracking-tight text-gray-900 dark:text-white">
                        From: Rajshahi to: Coxbazar
                    </h5>
                    <div className='flex justify-between'>
                        <p className=''>Seats Quantity:</p> <p>2</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Total:</p> <p>(price * Booking)</p>
                    </div>
                </div>


                <div className=" flex items-center">
                    <p>Departure date/time: </p>
                    <p>15/12/25</p>
                </div>

                <div className="mb-5 flex items-center">
                    <p>A countdown will be shown</p>
                </div>


                <div className="flex">
                    {/* flex items-center justify-between */}
                    {/* <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span> */}

                    <button className="relative group text-sm inline-block py-2 px-7 cursor-pointer text-center text-gray-50 hover:text-gray-900 border bg-cyan-700 font-semibold rounded-full overflow-hidden transition duration-200">

                        <div
                            className="absolute top-0 right-full w-full h-full bg-white transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"
                        ></div>
                        <span className="relative">Pay Now</span>
                    </button>

                    {/* <button
                        className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                        
                    </button> */}

                    <button className="relative group text-sm inline-block py-2 px-7 cursor-pointer text-center text-gray-50 hover:text-gray-900 border bg-cyan-700 font-semibold rounded-full overflow-hidden transition duration-200">

                        <div
                            className="absolute top-0 right-full w-full h-full bg-white transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"
                        ></div>
                        <span className="relative">Book Now</span>
                    </button>
                </div>

                <button className="relative group text-sm inline-block py-2 px-7 cursor-pointer text-center text-gray-50 hover:text-gray-900 border bg-cyan-700 font-semibold rounded-full overflow-hidden transition duration-200">

                    <div
                        className="absolute top-0 right-full w-full h-full bg-white transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"
                    ></div>
                    <span className="relative">Cancel Booking</span>
                </button>
            </Card>


        </div>
    );
};

export default MyBookedTickets;