import React from 'react'
import { CgProfile } from 'react-icons/cg';
import { FaTachometerAlt, FaShoppingCart, FaUsers, FaUser, FaBox, FaCog, FaUsersCog } from 'react-icons/fa';
import { FaShop } from 'react-icons/fa6';
import { MdSpaceDashboard } from 'react-icons/md';
import { Link, NavLink } from 'react-router';

const Sidebar = () => {
	return (
		<div className="bg-gray-50 text-gray-900 h-screen px-4 fixed w-16 md:w-65 border-r border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white overflow-y-scroll">
			<NavLink to='/'>
				<h1 className='text-2xl font-bold hidden md:block mt-4 text-center italic'>TicketBari</h1>
			</NavLink>


			<ul className='flex flex-col mt-5 text-lg'>

				<NavLink to='/dashboard'>
					<li className='flex items-center py-2 px-2 md:space-x-4  hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
						<FaTachometerAlt />
						<span className='hidden md:inline'>Dashboard</span>
					</li>
				</NavLink>

				<NavLink to='/dashboard/user-profile'>
					<li className="flex items-center py-2 px-2 md:space-x-4  hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
						<CgProfile />
						<span className="hidden md:inline ">Profile</span>
					</li>
				</NavLink>

				<NavLink to='/dashboard/my-booked-tickets'>
					<li className="flex items-center py-2 px-2 md:space-x-4  hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
						<FaUsers />
						<span className="hidden md:inline ">My booked tickets</span>
					</li>
				</NavLink>

				<NavLink to='/dashboard/transaction-history'>
					<li className="flex items-center py-2 px-2 md:space-x-4  hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
						<FaUser />
						<span className="hidden md:inline ">Transaction history</span>
					</li>
				</NavLink>

				{/* Vendor NavLinks */}
				<NavLink to='/dashboard/add-ticket'>
					<li className="flex items-center py-2 px-2 md:space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
						<FaBox />
						<span className="hidden md:inline ">Add ticket</span>
					</li>
				</NavLink>

				<NavLink to='/dashboard/my-added-tickets'>
					<li className="flex items-center py-2 px-2 md:space-x-4  hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
						<FaCog />
						<span className="hidden md:inline ">My added tickets</span>
					</li>
				</NavLink>

				<NavLink to='/dashboard/requested-bookings'>
					<li className="flex items-center py-2 px-2 md:space-x-4  hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
						<FaCog />
						<span className="hidden md:inline ">Requested bookings</span>
					</li>
				</NavLink>

				<NavLink to='/dashboard/revenue-overview'>
					<li className="flex items-center py-2 px-2 md:space-x-4  hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
						<FaCog />
						<span className="hidden md:inline ">Revenue overview</span>
					</li>
				</NavLink>


				{/* Admin NavLinks */}
				<NavLink to='/dashboard/manage-tickets'>
					<li className="flex items-center py-2 px-2 md:space-x-4  hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
						<FaCog />
						<span className="hidden md:inline ">Manage tickets</span>
					</li>
				</NavLink>

				<NavLink to='/dashboard/manage-users'>
					<li className="flex items-center py-2 px-2 md:space-x-4  hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
						<FaCog />
						<span className="hidden md:inline ">Manage users</span>
					</li>
				</NavLink>

				<NavLink to='/dashboard/advertise-tickets'>
					<li className="flex items-center py-2 px-2 md:space-x-4  hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
						<FaCog />
						<span className="hidden md:inline ">Advertise tickets</span>
					</li>
				</NavLink>

			</ul>




			{/* <ul className='flex flex-col mt-5 text-xl'>
				<Link to='/dashboard'>
					<li className='flex items-center py-2 px-2 md:space-x-4  hover:rounded hover:cursor-pointer  hover:bg-blue-600 hover:text-white'>
						<FaTachometerAlt />
						<span className='hidden md:inline'>Dashboard</span>

					</li>
				</Link>
				<li className="flex items-center py-2 px-2 md:space-x-4  hover:rounded hover:cursor-pointer hover:text-white hover:bg-blue-600">
					<FaShoppingCart />
					<span className="hidden md:inline ">Orders</span>
				</li>
				<li className="flex items-center py-2 px-2 md:space-x-4  hover:rounded hover:cursor-pointer  hover:text-white hover:bg-blue-600">
					<FaUsers />
					<span className="hidden md:inline ">Customers</span>
				</li>
				<li className="flex items-center py-2 px-2 md:space-x-4  hover:rounded hover:cursor-pointer  hover:text-white hover:bg-blue-600">
					<FaUser />
					<span className="hidden md:inline ">Users</span>
				</li>
				<li className="flex items-center py-2 px-2 md:space-x-4  hover:rounded hover:cursor-pointer  hover:text-white hover:bg-blue-600">
					<FaBox />
					<span className="hidden md:inline ">Products</span>
				</li>
				<li className="flex items-center py-2 px-2 md:space-x-4  hover:rounded hover:cursor-pointer  hover:text-white hover:bg-blue-600">
					<FaCog />
					<span className="hidden md:inline ">Settings</span>
				</li>
			</ul> */}






		</div>
	)
}

export default Sidebar