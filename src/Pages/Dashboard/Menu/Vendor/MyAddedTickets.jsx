import { Card } from 'flowbite-react';
import React from 'react';
import VendorTicketCard from './VendorTicketCard';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
// import useAuth from '../../../../hooks/useAuth';
import LoaderSpinner from '../../../../component/Shared/Navbar/LoaderSpinner';


const MyAddedTickets = () => {
    // const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: tickets = [], isLoading, } = useQuery({
        queryKey: ['MyAddedTickets'],
        queryFn: async () => {
            const result = await axiosSecure.get('/tickets')
            return result.data
        }
    })

// console.log(tickets);

    if (isLoading) {
        return <LoaderSpinner></LoaderSpinner>
    }


    return (
        <div className='grow p-8 '>

            <div className="flex flex-wrap gap-5 items-center w-full max-md:max-w-full mb-4">
                <div className="flex flex-col self-stretch my-auto min-w-[240px]">
                    <div className="text-gray-800  text-2xl">Your Tickets {tickets.length}</div>
                </div>
            </div>

            {tickets && tickets.length > 0 ?

                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-3'>

                    {
                        tickets.map(ticket => <VendorTicketCard key={ticket._id} ticket={ticket}></VendorTicketCard>)
                    }

                    {/* <Card className="lg:max-w-sm "
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

                        <button className="relative group text-sm inline-block py-2 px-7 cursor-pointer text-center text-gray-50 hover:text-gray-900 border bg-cyan-700 font-semibold rounded-full overflow-hidden transition duration-200">

                            <div
                                className="absolute top-0 right-full w-full h-full bg-white transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"
                            ></div>
                            <span className="relative">Pay Now</span>
                        </button>


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
                </Card> */}

                </div> : null
            }



        </div>
    );
};

export default MyAddedTickets;