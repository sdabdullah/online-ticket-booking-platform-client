import React from 'react';
import { Button, Description, Dialog, DialogPanel, DialogTitle, Field, Fieldset, Input, Label, Legend } from '@headlessui/react'
// import clsx from 'clsx'
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const BookingModal = ({ closeModal, isOpen, ticket }) => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();


    const { _id, ticketTitle, from, transporType, price, departureDateTime, Perks, ticketImage, vendor } = ticket || {}

    const handleUserTicketBooking = (data) => {
        const { quantity } = data

        const bookingData = {
            ticketTitle,
            from,
            transporType,
            price: Number(price),
            // ticketQuantity,
            quantity: Number(quantity),
            departureDateTime,
            Perks,
            ticketImage,
            // user: user?.email,
            user: {
                image: user?.photoURL,
                name: user?.displayName,
                email: user?.email,
            },
            createdAt: new Date(),
            vendor,
            status: 'pending',
        }
        // console.log(userBookingData);

        axiosSecure.post('/user-booked-tickets', bookingData);
        toast.success('Your seat booked successfully');
    }
    return (
        <div>
            <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={closeModal}>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
                    <div className="flex min-h-full items-center justify-center p-4 shadow-md ">
                        <DialogPanel
                            transition
                            className="w-full max-w-md rounded-xl bg-white shadow-md border border-cyan-700 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
                        >

                            <form onSubmit={handleSubmit(handleUserTicketBooking)}>
                                <Fieldset className="space-y-6 rounded-xl bg-white/5 p-6 sm:p-10">
                                    <Legend className="text-base/7 font-semibold">Ticket quantity</Legend>
                                    <Field>
                                        <Label className="text-sm/6 font-medium">Please Enter Ticket Quantity</Label>


                                        {/* <Input
                                            className={clsx(
                                                'mt-3 block w-full rounded-lg border border-cyan-700 bg-white/5 px-3 py-1.5 text-sm/6',
                                                'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
                                            )}  />
                                        {
                                            errors.ticketQuantity?.type === 'required' &&
                                            <p className='text-red-600 text-xs mt-1 font-semibold'>Ticket Quantity is required</p>
                                        } */}

                                        <input type="text"
                                            className='mt-3 block w-full rounded-lg border border-cyan-700 bg-white/5 px-3 py-1.5 text-sm/6'
                                            {...register('quantity', { required: true })} />
                                        {
                                            errors.quantity?.type === 'required' &&
                                            <p className='text-red-600 text-xs mt-1 font-semibold'>Ticket Quantity is required</p>
                                        }
                                    </Field>
                                    <button
                                        className="relative w-full group text-sm inline-block py-2 px-7 cursor-pointer text-center text-gray-50 hover:text-gray-900 border bg-cyan-700 font-semibold rounded-full overflow-hidden transition duration-200">

                                        <div
                                            className="absolute top-0 right-full w-full h-full bg-white transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"
                                        ></div>
                                        <span className="relative">Submit Booking</span>
                                    </button>
                                </Fieldset>
                            </form>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

export default BookingModal;