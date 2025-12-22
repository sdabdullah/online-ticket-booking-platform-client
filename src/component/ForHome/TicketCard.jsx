import React from 'react';
import { Card } from "flowbite-react";
import { Link, NavLink } from 'react-router';

const TicketCard = ({ ticket }) => {

    const { _id, ticketTitle, transporType, price, ticketQuantity, Perks, ticketImage } = ticket || {}


    return (
        <div>
            <div className="relative my-4 flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-linear-to-r from-cyan-500 to-cyan-600">
                    <img src={ticketImage} alt="" />
                </div>
                <div className="p-6">
                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {ticketTitle}
                    </h5>

                    <div>
                        <div className='flex justify-between'>
                            <p>Price:</p> <p>{price}</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className=''>Quantity:</p> <p>{ticketQuantity}</p>
                        </div>
                    </div>


                    <div className=" flex items-center justify-between">
                        <p>Transport type: </p>
                        <p>{transporType}</p>
                    </div>

                    <div className="mb-5 flex items-center justify-between">
                        <p>Perks:</p> <p>{Perks}</p>
                    </div>
                </div>
                <div className="p-6 pt-0">
                    <Link to={`/ticket-details/${_id}`}>
                        <button
                            className="relative group text-sm inline-block w-full py-2 px-7 cursor-pointer text-center text-gray-50 hover:text-gray-900 border bg-cyan-700 font-semibold rounded-full overflow-hidden transition duration-200">

                            <div
                                className="absolute top-0 right-full w-full h-full bg-white transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"
                            ></div>
                            <span className="relative">See details</span>
                        </button>
                    </Link>


                    {/* <button data-ripple-light="true" type="button" className="select-none w-full rounded-lg bg-cyan-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                            Read More
                        </button> */}
                </div>
            </div>


            {/* <Card className="lg:max-w-sm "
                imgAlt=""
                imgSrc="https://images.unsplash.com/photo-1582536621449-4638cf0bdbb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">

                <div>
                    <h2 className='text-md md:text-lg lg:text-xl font-bold'>{ticketTitle}</h2>
                    <h5 className='bg-green-200 px-2 md:px-3 py-1 text-xs md:text-sm rounded-full font-semibold'>Status: Pending</h5>
                </div>

                <div>
                    <div className='flex justify-between'>
                        <p>Price:</p> <p>{price}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p className=''>Quantity:</p> <p>{ticketQuantity}</p>
                    </div>
                </div>


                <div className=" flex items-center justify-between">
                    <p>Transport type: </p>
                    <p>{transporType}</p>
                </div>

                <div className="mb-5 flex items-center justify-between">
                    <p>Perks:</p> <p>{Perks}</p>
                </div>


                <div className="flex">
                    flex items-center justify-between
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>



                    <button
                        className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                    </button>

                    <button className="relative group text-sm inline-block py-2 px-7 cursor-pointer text-center text-gray-50 hover:text-gray-900 border bg-cyan-700 font-semibold rounded-full overflow-hidden transition duration-200">

                        <div
                            className="absolute top-0 right-full w-full h-full bg-white transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"
                        ></div>
                        <span className="relative">Book Now</span>
                    </button>
                </div>

                <Link to={`/ticket-details/${_id}`}>
                    <button className="relative group text-sm inline-block py-2 px-7 cursor-pointer text-center text-gray-50 hover:text-gray-900 border bg-cyan-700 font-semibold rounded-full overflow-hidden transition duration-200">

                        <div
                            className="absolute top-0 right-full w-full h-full bg-white transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"
                        ></div>
                        <span className="relative">See details</span>
                    </button>
                </Link>

            </Card> */}

        </div>
    );
};

export default TicketCard;