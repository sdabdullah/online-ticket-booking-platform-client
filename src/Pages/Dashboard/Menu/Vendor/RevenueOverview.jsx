import React from 'react';
import { dataLine, dataBar } from './../../chartData'
import { Bar, Line } from 'react-chartjs-2';

const RevenueOverview = () => {
    return (
        <div className='p-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className='bg-white p-4 dark:bg-gray-800 rounded-lg shadow-md'>
                    <h3 className='text-lg font-semibold mb-4'>Sales Data</h3>
                    <Line data={dataLine} />
                </div>
                <div className='bg-white p-4 dark:bg-gray-800 rounded-lg shadow-md'>
                    <h3 className='text-lg font-semibold mb-4'>Products Data</h3>
                    <Bar data={dataBar} />
                </div>
            </div>
        </div>
    );
};

export default RevenueOverview;