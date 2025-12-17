import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import React from 'react';

const ManageTickets = () => {
    return (
        <div className="grow p-8">
            <div class="flex flex-wrap gap-5 items-center w-full max-md:max-w-full mb-4">
                <div class="flex flex-col self-stretch my-auto min-w-[240px]">
                    <div class="text-gray-800  text-2xl">Manage tickets</div>
                </div>
            </div>

            <div className="overflow-x-auto">
                <Table hoverable>
                    <TableHead>
                        <TableRow>
                            <TableHeadCell>User name/emai</TableHeadCell>
                            <TableHeadCell>Ticket title</TableHeadCell>
                            <TableHeadCell>Booking Quantity</TableHeadCell>
                            <TableHeadCell>Total price (unit * Booking) </TableHeadCell>
                            <TableHeadCell>
                                <span className="sr-only">Accept and Reject buttons</span>
                            </TableHeadCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className="divide-y">
                        <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                Abdullah
                            </TableCell>
                            <TableCell>But Ticket</TableCell>
                            <TableCell>10</TableCell>
                            <TableCell>500</TableCell>
                            <TableCell className="flex gap-2">
                                <button className="bg-cyan-700 text-[13px] text-white px-3 py-1 rounded-full cursor-pointer">
                                    Approve
                                </button>
                                <button className="bg-cyan-500 text-[13px] text-white px-3 py-1 rounded-full cursor-pointer">
                                    Reject
                                </button>
                            </TableCell>
                        </TableRow>
                        <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                Faishal
                            </TableCell>
                            <TableCell>But Ticket</TableCell>
                            <TableCell>20</TableCell>
                            <TableCell>300</TableCell>
                            <TableCell className="flex gap-2">
                                <button className="bg-cyan-700 text-[13px] text-white px-3 py-1 rounded-full cursor-pointer">
                                    Approve
                                </button>
                                <button className="bg-cyan-500 text-[13px] text-white px-3 py-1 rounded-full cursor-pointer">
                                    Reject
                                </button>
                            </TableCell>
                        </TableRow>
                        <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Ahmad</TableCell>
                            <TableCell>250</TableCell>
                            <TableCell>20/12/25</TableCell>
                            <TableCell>TXN3872XG9</TableCell>
                            <TableCell className="flex gap-2">
                                <button className="bg-cyan-700 text-[13px] text-white px-3 py-1 rounded-full cursor-pointer">
                                    Approve
                                </button>
                                <button className="bg-cyan-500 text-[13px] text-white px-3 py-1 rounded-full cursor-pointer">
                                    Reject
                                </button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>

        </div>
    );
};

export default ManageTickets;