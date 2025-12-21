import { Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router';

const VendorTicketCard = ({ ticket }) => {
    const { _id, ticketTitle, from, transporType, price, ticketQuantity, departureDateTime, Perks, ticketImage, status } = ticket || {}
    return (
        <div>
            <Card className="lg:max-w-sm"
                imgAlt=""
                imgSrc={ticketImage}>

                <div className='flex justify-between'>
                    <h2 className='text-md md:text-lg lg:text-xl font-bold'>{ticketTitle}</h2>
                    <h5 className='bg-green-200 px-2 md:px-3 py-1 text-xs md:text-sm rounded-full font-semibold'>{status}</h5>
                </div>

                <div>
                    <h5 className="text-md tracking-tight text-gray-900 dark:text-white">{from}</h5>

                    <div className='flex justify-between'>
                        <p className=''>Transpor Type:</p> <p>{transporType}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Price (price + Booking):</p> <p>{price}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p className=''>Ticket Quantity:</p> <p>{ticketQuantity}</p>
                    </div>

                </div>


                <div className=" flex items-center justify-between">
                    <p>Departure date/time: </p>
                    <p>{departureDateTime}</p>
                </div>
                <div className=" flex items-center justify-between">
                    <p>Perks</p>
                    <p>{Perks}</p>
                </div>



                <div className="flex justify-between">

                    <Link to={`/update-vendor-ticket/${_id}`}>
                        <button className="relative group text-sm inline-block py-2 px-7 cursor-pointer text-center text-gray-50 hover:text-gray-900 border bg-cyan-700 font-semibold rounded-full overflow-hidden transition duration-200">

                            <div
                                className="absolute top-0 right-full w-full h-full bg-white transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"
                            ></div>
                            <span className="relative">Update</span>
                        </button>
                    </Link>

                    <button className="relative group text-sm inline-block py-2 px-7 cursor-pointer text-center text-gray-50 hover:text-gray-900 border bg-cyan-700 font-semibold rounded-full overflow-hidden transition duration-200">

                        <div
                            className="absolute top-0 right-full w-full h-full bg-white transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"
                        ></div>
                        <span className="relative">Delete</span>
                    </button>
                </div>

                {/* <button className="relative group text-sm inline-block py-2 px-7 cursor-pointer text-center text-gray-50 hover:text-gray-900 border bg-cyan-700 font-semibold rounded-full overflow-hidden transition duration-200">

                    <div
                        className="absolute top-0 right-full w-full h-full bg-white transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"
                    ></div>
                    <span className="relative">Cancel Booking</span>
                </button> */}
            </Card>
        </div>
    );
};

export default VendorTicketCard;