import React from 'react';
// app/routes/home.tsx
import {
    Avatar,
    Button,
    Dropdown,
    DropdownDivider,
    DropdownHeader,
    DropdownItem,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
} from "flowbite-react";
import { NavLink, useNavigate } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import toast from 'react-hot-toast';


const NavbarMenu = () => {

    const { user, signOutUser } = useAuth();
    const navigate = useNavigate();

    const handleSignOutUser = () => {
        signOutUser()
            .then(() => {
                toast.success('Logout Success')
                navigate('/')
            })
            .catch((error) => {
                // console.log(error);
                toast.error('Somthing is wrong')
            })
    }

    return (
        <div>
            <Navbar fluid rounded>
                
                    {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
                    <span className="self-center whitespace-nowrap text-2xl font-bold text-primary dark:text-white">TicketBari</span>
                
                <div className="flex md:order-2">

                    {
                        user ?
                            <div className='flex items-center gap-3'>
                                <Dropdown arrowIcon={false} inline label={<Avatar alt={user?.displayName} img={user?.photoURL} rounded referrerPolicy='no-referrer'/>}>
                                    {/* <DropdownHeader>
                                        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                                    </DropdownHeader> */}

                                    <DropdownItem>My Profile</DropdownItem>

                                    <DropdownDivider />

                                    <DropdownItem onClick={handleSignOutUser}>Logout</DropdownItem>
                                </Dropdown>
                                <span className=" text-sm">{user?.displayName}</span>

                            </div>
                            :

                            <div className="invisible lg:visible space-x-2">

                                <NavLink to='/login'
                                    className="relative group inline-block py-2 px-7 cursor-pointer text-center text-gray-50 border bg-cyan-700 font-semibold rounded-full overflow-hidden transition duration-200"
                                    href="#"
                                >
                                    <div
                                        className="absolute top-0 right-full w-full h-full bg-cyan-600 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"
                                    ></div>
                                    <span className="relative">Login</span>
                                </NavLink>

                                <NavLink to='/register'
                                    className="relative group inline-block py-2 px-7 cursor-pointer text-center text-gray-50  border bg-cyan-700 font-semibold rounded-full overflow-hidden transition duration-200"
                                    href="#"
                                >
                                    <div
                                        className="absolute top-0 right-full w-full h-full bg-cyan-600 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"
                                    ></div>
                                    <span className="relative">Register</span>
                                </NavLink>

                                {/* <NavbarLink >Dashboard </NavbarLink> */}

                            </div>
                    }

                    <NavbarToggle />


                </div>

                <NavbarCollapse>

                    <NavLink className='rounded px-3 py-2' to='/' >Home</NavLink>
                    <NavLink className='rounded px-3 py-2' to='/all-tickets'>All Tickets</NavLink>
                    <NavLink className='rounded px-3 py-2' to='/dashboard' >Dashboard </NavLink>

                    <NavLink className='lg:hidden' to='/login'>Login</NavLink>
                    <NavLink className='lg:hidden' to='/register'>Register</NavLink>


                    {/* <NavbarLink >Dashboard </NavbarLink> */}
                    {/* <NavbarLink >All Tickets</NavbarLink> */}
                    {/* <NavbarLink ><NavLink>Pricing</NavLink></NavbarLink>
                    <NavbarLink ><NavLink>Contact</NavLink></NavbarLink> */}

                </NavbarCollapse>


            </Navbar>
        </div>
    );
};

export default NavbarMenu;