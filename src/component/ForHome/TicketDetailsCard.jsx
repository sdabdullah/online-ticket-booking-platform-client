import React, { useState } from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import LoaderSpinner from '../Shared/Navbar/LoaderSpinner';
import BookingModal from './BookingModal';

const TicketDetailsCard = () => {

    const { id } = useParams();
    let [isOpen, setIsOpen] = useState(false)

    const axiosSecure = useAxiosSecure();

    const { data: ticket = {}, isLoading, refetch } = useQuery({
        queryKey: ['ticket', id],
        queryFn: async () => {
            const result = await axiosSecure.get(`/tickets/${id}`)
            // console.log(result.data);
            return result.data
        }
    })
    // console.log(ticket);
    const { ticketTitle, from, transporType, price, ticketQuantity, departureDateTime, Perks, ticketImage } = ticket || {}


    if (isLoading) {
        return <LoaderSpinner></LoaderSpinner>
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <div className='w-11/12 mx-auto py-15'>
            <div className="relative mx-auto flex w-3xl flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 -mt-6 h-110 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-linear-to-r from-cyan-500 to-cyan-600">
                    <img className='w-full h-full' src={ticketImage} />
                </div>
                <div className="p-6">
                    <div className='flex items-center justify-between'>
                        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {ticketTitle}
                        </h5>
                        <h3 className='text-xl font-medium'>Show countdown: 10:33:00</h3>
                    </div>
                    {/* <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
                    </p> */}

                    <div>
                        <div className='flex justify-between'>
                            <p>Location:</p> <p>{from}</p>
                        </div>
                        <div className=" flex items-center justify-between">
                            <p>Transport type: </p>
                            <p>{transporType}</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>Price:</p> <p>{price}</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>Ticket  Quantity:</p> <p>{ticketQuantity}</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>Departure date/time:</p> <p>{departureDateTime}</p>
                        </div>

                        <div className="mb-5 flex items-center justify-between">
                            <p>Perks:</p> <p>{Perks}</p>
                        </div>
                    </div>
                </div>

                <div className="p-6 pt-0">
                    <button onClick={() => setIsOpen(true)} label='Purchase'
                        className="relative w-full group text-sm inline-block py-2 px-7 cursor-pointer text-center text-gray-50 hover:text-gray-900 border bg-cyan-700 font-semibold rounded-full overflow-hidden transition duration-200">

                        <div
                            className="absolute top-0 right-full w-full h-full bg-white transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"
                        ></div>
                        <span className="relative">Book Now</span>
                    </button>

                    {/* <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-cyan-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                        Read More
                    </button> */}
                </div>
                <BookingModal ticket={ticket} closeModal={closeModal} isOpen={isOpen}></BookingModal>
            </div>
        </div>
    );
};

export default TicketDetailsCard;