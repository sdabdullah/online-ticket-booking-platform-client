import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

const RequestedBookings = () => {
    return (
        <div className='p-8'>
            <div className="overflow-x-auto">
                <Table hoverable>
                    <TableHead>
                        <TableRow>
                            <TableHeadCell>Ticket Title</TableHeadCell>
                            <TableHeadCell>Amount</TableHeadCell>
                            <TableHeadCell>Payment Date</TableHeadCell>
                            <TableHeadCell>Transaction ID</TableHeadCell>
                            <TableHeadCell>
                                <span className="sr-only">Edit</span>
                            </TableHeadCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className="divide-y">
                        <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                Bus Ticket
                            </TableCell>
                            <TableCell>250</TableCell>
                            <TableCell>20/12/25</TableCell>
                            <TableCell>TXN3872XG9</TableCell>
                            <TableCell>
                                <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                    Edit
                                </a>
                            </TableCell>
                        </TableRow>
                        <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                Bus Ticket
                            </TableCell>
                            <TableCell>250</TableCell>
                            <TableCell>20/12/25</TableCell>
                            <TableCell>TXN3872XG9</TableCell>
                            <TableCell>
                                <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                    Edit
                                </a>
                            </TableCell>
                        </TableRow>
                        <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Bus Ticket</TableCell>
                            <TableCell>250</TableCell>
                            <TableCell>20/12/25</TableCell>
                            <TableCell>TXN3872XG9</TableCell>
                            <TableCell>
                                <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                    Edit
                                </a>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default RequestedBookings;