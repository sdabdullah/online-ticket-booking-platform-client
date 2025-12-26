import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import LoaderSpinner from '../../../../component/Shared/Navbar/LoaderSpinner';
import useAuth from '../../../../hooks/useAuth';

const RequestedBookings = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure();

    const { data: requestedtickets = [], isLoading, } = useQuery({
        queryKey: ['RequestedBookings', user?.email],
        queryFn: async () => {
            const result = await axiosSecure.get(`/reqested-user-booked-tickets/${user?.email}`)
            return result.data
        }
    })



    console.log(requestedtickets);

    if (isLoading) {
        return <LoaderSpinner></LoaderSpinner>
    }

    return (
        <div className='p-8'>

            <div className="flex flex-wrap gap-5 items-center w-full max-md:max-w-full mb-4">
                <div className="flex flex-col self-stretch my-auto min-w-[240px]">
                    <div className="text-gray-800  text-2xl">Requested bookings</div>
                </div>
            </div>

            <div className="overflow-x-auto">
                <Table hoverable>
                    <TableHead>
                        <TableRow>
                            <TableHeadCell>User name/emai</TableHeadCell>
                            <TableHeadCell>Ticket title</TableHeadCell>
                            <TableHeadCell>Booking Quantity</TableHeadCell>
                            <TableHeadCell>Total price (unit * Booking qt) </TableHeadCell>
                            <TableHeadCell>
                                <span className="sr-only">Accept and Reject buttons</span>
                            </TableHeadCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className="divide-y">
                        {
                            requestedtickets.map(requestedticket =>
                                <TableRow key={requestedticket._id} requestedticket={requestedticket} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {requestedticket.user.name}
                                    </TableCell>
                                    <TableCell>{requestedticket.ticketTitle}</TableCell>
                                    <TableCell>{requestedticket.quantity}</TableCell>
                                    <TableCell>{requestedticket.price}</TableCell>
                                    <TableCell className='flex gap-2'>
                                        <button className="bg-cyan-700 text-[13px] text-white px-3 py-1 rounded-full cursor-pointer">
                                            Accept
                                        </button>
                                        <button className="bg-cyan-500 text-[13px] text-white px-3 py-1 rounded-full cursor-pointer">
                                            Reject
                                        </button>
                                    </TableCell>
                                </TableRow>
                            )
                        }

                        {/* <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                Faishal
                            </TableCell>
                            <TableCell>But Ticket</TableCell>
                            <TableCell>20</TableCell>
                            <TableCell>300</TableCell>
                            <TableCell className='flex gap-2'>
                                <button className="bg-cyan-700 text-[13px] text-white px-3 py-1 rounded-full cursor-pointer">
                                    Accept
                                </button>
                                <button className="bg-cyan-500 text-[13px] text-white px-3 py-1 rounded-full cursor-pointer">
                                    Reject
                                </button>
                            </TableCell>
                        </TableRow> */}
                        {/* <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Ahmad</TableCell>
                            <TableCell>250</TableCell>
                            <TableCell>20/12/25</TableCell>
                            <TableCell>TXN3872XG9</TableCell>
                            <TableCell className='flex gap-2'>
                                <button className="bg-cyan-700 text-[13px] text-white px-3 py-1 rounded-full cursor-pointer">
                                    Accept
                                </button>
                                <button className="bg-cyan-500 text-[13px] text-white px-3 py-1 rounded-full cursor-pointer">
                                    Reject
                                </button>
                            </TableCell>
                        </TableRow> */}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default RequestedBookings;