import React from 'react';
import { BiSupport } from 'react-icons/bi';
import { FaBangladeshiTakaSign, FaLocationDot } from 'react-icons/fa6';
import { FcElectricity } from 'react-icons/fc';
import { MdAccessTime } from 'react-icons/md';
import { RiSecurePaymentFill } from 'react-icons/ri';

const WhyChoose = () => {
    return (
        <div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div className='bg-white dark:bg-gray-700 p-6 shadow-md hover:shadow-xl transition-shadow'>

                    <div className='mb-4'>
                        <FaLocationDot className='h-8 w-8 text-cyan-700' />
                    </div>
                    <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>Wide Coverage</h2>
                    <p className='text-gray-600 dark:text-gray-300'>Book tickets for destinations across BD</p>
                </div>

                <div className='bg-white dark:bg-gray-700 p-6 shadow-md hover:shadow-xl transition-shadow'>
                    <div className='mb-4'>
                        <MdAccessTime className='h-8 w-8 text-cyan-700' />
                    </div>
                    <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>24/7 Booking</h2>
                    <p className='text-gray-600 dark:text-gray-300'>Book anytime, anywhere with our platform</p>
                </div>

                <div className='bg-white dark:bg-gray-700 p-6 shadow-md hover:shadow-xl transition-shadow'>
                    <div className='mb-4'>
                        <FaBangladeshiTakaSign className='h-8 w-8 text-cyan-700'  />
                    </div>
                    <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>Best Prices</h2>
                    <p className='text-gray-600 dark:text-gray-300'>Competitive pricing with exclusive deals</p>
                </div>

                <div className='bg-white dark:bg-gray-700 p-6 shadow-md hover:shadow-xl transition-shadow'>
                    <div className='mb-4'>
                        <RiSecurePaymentFill className='h-8 w-8 text-cyan-700'  />
                    </div>
                    <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>Secure Payment</h2>
                    <p className='text-gray-600 dark:text-gray-300'>Safe and secure payment processing</p>
                </div>

                <div className='bg-white dark:bg-gray-700 p-6 shadow-md hover:shadow-xl transition-shadow'>
                    <div className='mb-4'>
                        <FcElectricity className='h-8 w-8 text-cyan-700' />
                    </div>
                    <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>Real-time Updates</h2>
                    <p className='text-gray-600 dark:text-gray-300'>Get instant notifications on your bookings</p>
                </div>

                <div className='bg-white dark:bg-gray-700 p-6 shadow-md hover:shadow-xl transition-shadow'>
                    <div className='mb-4'>
                        <BiSupport className='h-8 w-8 text-cyan-700' />
                    </div>
                    <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>24/7 Support</h2>
                    <p className='text-gray-600 dark:text-gray-300'>Round-the-clock customer support</p>
                </div>
            </div>



        </div>
    );
};

export default WhyChoose;