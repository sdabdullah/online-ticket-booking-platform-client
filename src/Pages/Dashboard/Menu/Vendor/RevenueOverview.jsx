import React from 'react';
import { dataLine, dataBar } from './../../chartData'
import { Bar, Line } from 'react-chartjs-2';

const RevenueOverview = () => {

    return (
        <div className='p-8'>

            <div className="flex flex-wrap gap-5 items-center w-full max-md:max-w-full mb-4">
                <div className="flex flex-col self-stretch my-auto min-w-[240px]">
                    <div className="text-gray-800  text-2xl">Revenue overview</div>
                </div>
            </div>

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