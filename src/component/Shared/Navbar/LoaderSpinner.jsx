import React from 'react';

const LoaderSpinner = () => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className="text-center">
                <div
                    className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-cyan-700 mx-auto"
                ></div>
                <h2 className="text-zinc-900 dark:text-white mt-4">Loading...</h2>
                <p className="text-zinc-600 dark:text-zinc-400">
                    Please Wait
                </p>
            </div>

        </div>
    );
};

export default LoaderSpinner;