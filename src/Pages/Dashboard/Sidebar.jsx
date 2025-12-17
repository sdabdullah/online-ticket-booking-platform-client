import React from 'react'
import { CgProfile } from 'react-icons/cg';
import { FaTachometerAlt, FaShoppingCart, FaUsers, FaUser, FaBox, FaCog, FaUsersCog } from 'react-icons/fa';
import { VscDiffAdded } from "react-icons/vsc";
import { LuTicketCheck, LuTicketX } from "react-icons/lu";
import { BsTicketDetailed } from "react-icons/bs";
import { GrTransaction } from "react-icons/gr";
import { TbBrandBooking } from "react-icons/tb";
import { GrOverview } from "react-icons/gr";
import { FcAdvertising } from "react-icons/fc";

import { MdSpaceDashboard } from 'react-icons/md';
import { NavLink } from 'react-router';

const Sidebar = () => {
	return (
		<div className="bg-gray-50 text-gray-900 h-screen px-4 fixed w-16 md:w-65 border-r border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white overflow-y-scroll">
			<NavLink to='/'>
				<h1 className='text-2xl font-bold hidden md:block mt-4 text-center italic'>TicketBari</h1>
			</NavLink>


			<ul className='flex flex-col mt-5 text-lg'>

				<NavLink to='/dashboard'>
					<li className='flex items-center py-2 px-2 md:space-x-4  hover:rounded hover:cursor-pointer hover:bg-cyan-700 hover:text-white'>
						<FaTachometerAlt />
						<span className='hidden md:inline'>Dashboard</span>
					</li>
				</NavLink>

				<NavLink to='/dashboard/user-profile'>
					<li className="flex items-center py-2 px-2 md:space-x-4  hover:rounded hover:cursor-pointer hover:bg-cyan-700 hover:text-white">
						<CgProfile />
						<span className="hidden md:inline ">Profile</span>
					</li>
				</NavLink>

				<NavLink to='/dashboard/my-booked-tickets'>
					<li className="flex items-center py-2 px-2 md:space-x-4  hover:rounded hover:cursor-pointer hover:bg-cyan-700 hover:text-white">
						<BsTicketDetailed />
						<span className="hidden md:inline ">My booked tickets</span>
					</li>
				</NavLink>

				<NavLink to='/dashboard/transaction-history'>
					<li className="flex items-center py-2 px-2 md:space-x-4  hover:rounded hover:cursor-pointer hover:bg-cyan-700 hover:text-white">
						<GrTransaction />
						<span className="hidden md:inline ">Transaction history</span>
					</li>
				</NavLink>

				{/* Vendor NavLinks */}
				<NavLink to='/dashboard/add-ticket'>
					<li className="flex items-center py-2 px-2 md:space-x-4 hover:rounded hover:cursor-pointer hover:bg-cyan-700 hover:text-white">
						<VscDiffAdded />
						<span className="hidden md:inline ">Add ticket</span>
					</li>
				</NavLink>

				<NavLink to='/dashboard/my-added-tickets'>
					<li className="flex items-center py-2 px-2 md:space-x-4  hover:rounded hover:cursor-pointer hover:bg-cyan-700 hover:text-white">
						<LuTicketCheck />
						<span className="hidden md:inline ">My added tickets</span>
					</li>
				</NavLink>

				<NavLink to='/dashboard/requested-bookings'>
					<li className="flex items-center py-2 px-2 md:space-x-4  hover:rounded hover:cursor-pointer hover:bg-cyan-700 hover:text-white">
						<TbBrandBooking />
						<span className="hidden md:inline ">Requested bookings</span>
					</li>
				</NavLink>

				<NavLink to='/dashboard/revenue-overview'>
					<li className="flex items-center py-2 px-2 md:space-x-4  hover:rounded hover:cursor-pointer hover:bg-cyan-700 hover:text-white">
						<GrOverview />
						<span className="hidden md:inline ">Revenue overview</span>
					</li>
				</NavLink>


				{/* Admin NavLinks */}
				<NavLink to='/dashboard/manage-tickets'>
					<li className="flex items-center py-2 px-2 md:space-x-4  hover:rounded hover:cursor-pointer hover:bg-cyan-700 hover:text-white">
						<LuTicketX />
						<span className="hidden md:inline ">Manage tickets</span>
					</li>
				</NavLink>

				<NavLink to='/dashboard/manage-users'>
					<li className="flex items-center py-2 px-2 md:space-x-4  hover:rounded hover:cursor-pointer hover:bg-cyan-700 hover:text-white">
						<FaUsersCog />
						<span className="hidden md:inline ">Manage users</span>
					</li>
				</NavLink>

				<NavLink to='/dashboard/advertise-tickets'>
					<li className="flex items-center py-2 px-2 md:space-x-4  hover:rounded hover:cursor-pointer hover:bg-cyan-700 hover:text-white">
						<FcAdvertising />
						<span className="hidden md:inline ">Advertise tickets</span>
					</li>
				</NavLink>
			</ul>

		</div>
	)
}

export default Sidebar