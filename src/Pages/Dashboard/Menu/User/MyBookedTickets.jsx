import { useQuery } from '@tanstack/react-query';
import { Card } from 'flowbite-react';
import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import LoaderSpinner from '../../../../component/Shared/Navbar/LoaderSpinner';
import useAuth from '../../../../hooks/useAuth';

const MyBookedTickets = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()


    const { data: mybookedtickets = [], isLoading, } = useQuery({
        queryKey: ['MyBookedTickets', user?.email],
        queryFn: async () => {
            const result = await axiosSecure.get(`/user-booked-tickets/${user?.email}`)
            return result.data
        }
    })

    console.log(mybookedtickets);

    if (isLoading) {
        return <LoaderSpinner></LoaderSpinner>
    }
    
    return (
        <div className='grow p-8 '>

            <div className="flex flex-wrap gap-5 items-center w-full max-md:max-w-full mb-4">
                <div className="flex flex-col self-stretch my-auto min-w-[240px]">
                    <div className="text-gray-800  text-2xl">Your booked tickets {mybookedtickets.length}</div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-3'>

                {
                    mybookedtickets.map(bookedticket =>
                        <Card key={bookedticket._id} bookedticket={bookedticket} className="lg:max-w-sm"
                            imgAlt=""
                            imgSrc={bookedticket.ticketImage}>

                            <div className='flex justify-between'>
                                <h2 className='text-md md:text-lg lg:text-xl font-bold'>{bookedticket.ticketTitle}</h2>
                                <h5 className='bg-green-200 px-2 md:px-3 py-1 text-xs md:text-sm rounded-full font-semibold'>Status: {bookedticket.status}</h5>
                            </div>

                            <div>
                                <div className='flex justify-between'>
                                    <p className=''>Booking Quantity:</p> <p>{bookedticket.quantity}</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p>Total:</p> <p>{bookedticket.price}</p>
                                </div>
                                <h5 className="text-md tracking-tight text-gray-900 dark:text-white">
                                    From: {bookedticket.from}
                                </h5>
                            </div>


                            <div className=" flex items-center justify-between">
                                <p>Departure date/time: </p>
                                <p>{bookedticket.departureDateTime}</p>
                            </div>

                            <div className="mb-5 flex items-center">
                                <p>A countdown will be shown</p>
                            </div>


                            <div className="flex justify-between">
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
                                    <span className="relative">Cancel</span>
                                </button>
                            </div>

                        </Card>
                    )
                }



            </div>




        </div>
    );
};

export default MyBookedTickets;