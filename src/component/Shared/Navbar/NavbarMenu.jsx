import React from 'react';
// app/routes/home.tsx
import {
    Avatar,
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
import { NavLink } from 'react-router';


const NavbarMenu = () => {
    return (
        <div>
            <Navbar fluid rounded>
                <NavLink>
                    {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
                    <span className="self-center whitespace-nowrap text-2xl font-bold text-primary dark:text-white">TicketBari</span>
                </NavLink>
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                        }
                    >
                        <DropdownHeader>
                            <span className="block text-sm">Bonnie Green</span>
                            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                        </DropdownHeader>
                        <DropdownItem>Dashboard</DropdownItem>
                        <DropdownItem>Settings</DropdownItem>
                        <DropdownItem>Earnings</DropdownItem>
                        <DropdownDivider />
                        <DropdownItem>Sign out</DropdownItem>
                    </Dropdown>
                    <NavbarToggle />
                </div>

                <NavbarCollapse>

                    <NavLink to='/' >Home</NavLink>
                    <NavLink to='/all-tickets'>All Tickets</NavLink>
                    <NavLink to='/dashboard' >Dashboard </NavLink>
                    <NavLink to='/login'>Login</NavLink>
                    <NavLink to='/register'>Register</NavLink>

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