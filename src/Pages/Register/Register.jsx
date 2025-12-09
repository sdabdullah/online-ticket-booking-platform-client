import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { createUser } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm()

    

    const handleUserRegister = (data) => {

        const { name, photoURL, email, password } = data

        // const form = e.target;
        // const name = form.name.value;
        // const email = form.email.value;
        // const photoURL = form.photoURL.value;
        // const password = form.password.value;

        console.log(data);

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            })

    }



    return (
        <div className='py-10 bg-gray-50'>
            <section>
                <div
                    className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-8">
                    <div className="bg-white xl:mx-auto xl:w-full rounded-xl bg-clip-border shadow-md p-4 xl:max-w-sm 2xl:max-w-md">
                        <div className="mb-2 flex justify-center"></div>

                        <h2 className="text-center text-2xl font-bold leading-tight text-black">Register your account</h2>
                        <p className="mt-2 text-center text-sm text-gray-600">Create a free account</p>


                        <form onSubmit={handleSubmit(handleUserRegister)} className="mt-8">
                            <div className="space-y-5">
                                <div>
                                    <label className="text-base font-medium text-gray-900">Name</label>
                                    <div className="mt-2">
                                        <input type="text" {...register('name', { required: true })}
                                            placeholder="Name"
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" />
                                        {
                                            errors.name?.type === 'required' &&
                                            <p className='text-red-600 text-xs mt-1 font-semibold'>Name is required</p>
                                        }
                                    </div>
                                </div>

                                <div>
                                    <label className="text-base font-medium text-gray-900">Email address</label>
                                    <div className="mt-2">
                                        <input type="email" {...register('email', { required: true })}
                                            placeholder="Email"
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" />
                                        {
                                            errors.email?.type === 'required' &&
                                            <p className='text-red-600 text-xs mt-1 font-semibold'>Email is required</p>
                                        }
                                    </div>
                                </div>

                                <div>
                                    <label className="text-base font-medium text-gray-900">Photo URL</label>
                                    <div className="mt-2">
                                        <input type="url" {...register('photoURL', { required: true })}
                                            placeholder=" Photo URL"
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" />
                                        {/* {
                                            errors.photoURL?.type === 'required' &&
                                            <p className='text-red-600 text-xs mt-1 font-semibold'>photo URL is required</p>
                                        } */}
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label className="text-base font-medium text-gray-900">Password</label>
                                    </div>
                                    <div className="mt-2">
                                        <input type="password" {...register('password', {
                                            required: true,
                                            pattern: /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/,
                                        })}
                                            placeholder="Password"
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" />
                                        {
                                            errors.password?.type === 'required' &&
                                            <p className='text-red-600 text-xs mt-1 font-semibold'>enter at least 6 characters including One uppercase & One lowercase letter.</p>
                                        }
                                    </div>
                                </div>

                                <div>
                                    <button className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                        type="submit"> Register
                                    </button>
                                </div>

                                <Link to='/login'>
                                    <p className="text-center">Already have a account? <span className="underline font-semibold">login</span></p>
                                </Link>

                            </div>
                        </form>
                        <div className="mt-3 space-y-3">
                            <button
                                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                                type="button"
                            >
                                <span className="mr-2 inline-block">
                                    <svg version="1.1" width={20} id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve">
                                        <path style={{ fill: '#FBBB00' }} d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
      	c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
      	C103.821,274.792,107.225,292.797,113.47,309.408z" />
                                        <path style={{ fill: '#518EF8' }} d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
      	c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
      	c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z" />
                                        <path style={{ fill: '#28B446' }} d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
      	c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
      	c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z" />
                                        <path style={{ fill: '#F14336' }} d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
      	c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
      	C318.115,0,375.068,22.126,419.404,58.936z" />
                                    </svg>
                                </span>
                                Register with Google
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Register;