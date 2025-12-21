import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';
import { Checkbox, Label } from 'flowbite-react';

const UpdateVendorTicekt = () => {
    const { user } = useAuth()
    const { register, formState: { errors } } = useForm();
    // const { register, handleSubmit, formState: { errors } } = useForm();


    return (
        <div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex flex-wrap gap-5 items-center w-full max-md:max-w-full mb-4">
                    <div className="flex flex-col self-stretch my-auto min-w-[240px]">
                        <div className="text-gray-800  text-2xl">Update your ticket</div>
                    </div>
                </div>


                <form >

                    <div className="grid grid-cols-2 gap-6 mb-10">

                        <div id="input" className="relative">
                            <input type="text" id="floating_outlined"
                                className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                                placeholder="Ticket title" {...register('ticketTitle', { required: true })} />
                            {
                                errors.ticketTitle?.type === 'required' &&
                                <p className='text-red-600 text-xs mt-1 font-semibold'>Ticket title URL is required</p>
                            }

                            <label id="floating_outlined" className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                Ticket title
                            </label>
                        </div>

                        <div id="input" className="relative">
                            <input type="text" id="floating_outlined"
                                className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                                placeholder="From(Location), To(Location)" {...register('from', { required: true })} />

                            {
                                errors.from?.type === 'required' &&
                                <p className='text-red-600 text-xs mt-1 font-semibold'>Location is required</p>
                            }

                            <label id="floating_outlined" className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                From(Location), To(Location)
                            </label>
                        </div>

                        <div id="input" className="relative">
                            <input type="text" id="floating_outlined"
                                className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                                placeholder="Transport type" {...register('transporType', { required: true })} />

                            <label id="floating_outlined" className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                Transport type
                            </label>
                            {
                                errors.transporType?.type === 'required' &&
                                <p className='text-red-600 text-xs mt-1 font-semibold'>Transport type is required</p>
                            }
                        </div>

                        <div id="input" className="relative">
                            <input type="text" id="floating_outlined"
                                className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                                placeholder="Price(per unit)" {...register('price', { required: true })} />

                            {
                                errors.price?.type === 'required' &&
                                <p className='text-red-600 text-xs mt-1 font-semibold'>Price is required</p>
                            }

                            <label id="floating_outlined" className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1" >
                                Price (per unit)
                            </label>
                        </div>

                        <div id="input" className="relative">
                            <input type="text" id="floating_outlined"
                                className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                                placeholder=" Ticket quantity" {...register('ticketQuantity', { required: true })} />

                            {
                                errors.ticketQuantity?.type === 'required' &&
                                <p className='text-red-600 text-xs mt-1 font-semibold'>Ticket quantity is required</p>
                            }

                            <label id="floating_outlined" className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                Ticket quantity
                            </label>
                        </div>

                        <div id="input" className="relative">
                            <input type="text" id="floating_outlined"
                                className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                                placeholder="Departure date & timene" {...register('departureDateTime', { required: true })} />

                            {
                                errors.departureDateTime?.type === 'required' &&
                                <p className='text-red-600 text-xs mt-1 font-semibold'>Departure date & time is required</p>
                            }

                            <label id="floating_outlined" className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                Departure date & time
                            </label>
                        </div>

                        <div id="input" className="relative md:flex gap-5 border rounded-lg px-4 border-violet-200">
                            <div className='flex items-center gap-5 mt-3'>

                                <div className="flex items-center gap-2">
                                    <Checkbox id="promotion" value="Breakfast" {...register('Perks', { required: true })} />
                                    <Label htmlFor="promotion">Breakfast</Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Checkbox id="AC" value="AC" {...register('Perks', { required: true })} />
                                    <Label htmlFor="AC">AC</Label>
                                </div>

                                {
                                    errors.Perks?.type === 'required' &&
                                    <p className='text-red-600 text-xs mt-1 font-semibold'>Perks is required</p>
                                }
                            </div>

                            <label id="floating_outlined" className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                Perks (checkboxes)  (ex: AC, Breakfast etc)
                            </label>
                        </div>

                        <div id="input" className="relative">
                            <input type="file" id="floating_outlined"
                                className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                                placeholder="Image upload (imgbb)  " {...register('ticketImage', { required: true })} />

                            {
                                errors.ticketImage?.type === 'required' &&
                                <p className='text-red-600 text-xs mt-1 font-semibold'>Image upload Url is required</p>
                            }
                            <label id="floating_outlined" className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                Upload ticket Image
                            </label>
                        </div>

                        <div id="input" className="relative">
                            <input type="text" id="floating_outlined"

                                defaultValue={user?.displayName} readOnly

                                className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                                placeholder="Vendor name"
                            // value=""
                            />
                            <label id="floating_outlined" className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                Vendor name
                            </label>
                        </div>
                        <div id="input" className="relative">
                            <input type="email" id="floating_outlined"

                                defaultValue={user?.email} readOnly

                                className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                                placeholder="Vendor email"
                            // value=""
                            />
                            <label id="floating_outlined" className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                Vendor email
                            </label>
                        </div>
                    </div>

                    <div className="sm:flex sm:flex-row-reverse flex gap-4">
                        <button className="w-fit cursor-pointer rounded-lg text-sm px-5 py-2 focus:outline-none h-[50px] border bg-cyan-700 hover:bg-cyan-600 focus:bg-cyan-700 border-violet-500-violet- text-white focus:ring-4 focus:ring-violet-200 hover:ring-4 hover:ring-violet-100 transition-all duration-300">
                            <div className="flex gap-2 items-center">Update Ticket</div>
                        </button>

                        {/* <button to='/dashboard' className="w-fit cursor-pointer rounded-lg text-sm px-5 py-2 focus:outline-none h-[50px] border bg-transparent border-primary text-primary focus:ring-4 focus:ring-gray-100">
                                        Cancel
                                    </button> */}
                    </div>

                </form>
            </div>
        </div>
    );
};

export default UpdateVendorTicekt;