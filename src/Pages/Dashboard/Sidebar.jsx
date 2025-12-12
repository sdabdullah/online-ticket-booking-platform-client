import React from 'react'
import { FaTachometerAlt, FaShoppingCart, FaUsers, FaUser, FaBox, FaCog, FaUsersCog } from 'react-icons/fa';
import { FaShop } from 'react-icons/fa6';
import { MdSpaceDashboard } from 'react-icons/md';
import { Link } from 'react-router';

const Sidebar = () => {
	return (
		<div className="text-gray-900 h-screen fixed px-4 w-16 md:w-20 border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white">
			<h1 className='text-2xl font-bold hidden md:block mt-4 text-center italic'></h1>
			

			<ul className="w-64 flex flex-col gap-1 border-l border-gray-200 pl-1">
				
				<li className="group w-14 overflow-hidden rounded-lg border-l border-transparent bg-white transition-all duration-500 hover:w-64 hover:border-gray-200 hover:shadow-lg has-[:focus]:w-64 has-[:focus]:shadow-lg">
					<button className="peer flex w-full cursor-pointer items-center gap-2.5 px-3 py-2 text-left text-purple-800 transition-all active:scale-95">
						<div className="rounded-lg border-2 border-purple-300 bg-purple-100 p-1">
							<MdSpaceDashboard size={25} />
						</div>
						<div className="font-semibold">Dashboard</div>
					</button>
					<div className="grid grid-rows-[0fr] overflow-hidden transition-all duration-500 peer-focus:grid-rows-[1fr]">
						<div className="overflow-hidden">
							<ul className="divide-y divide-gray-200 p-4 pt-0">
								<li className="py-2">
									<div className="flex items-center justify-between">
										<button className="cursor-pointer font-semibold text-gray-800 hover:text-blue-600">
											Profile 
										</button>
										<div className="text-sm text-gray-500"></div>
									</div>
									<div className="text-xs text-gray-500">Admin Profile</div>
								</li>
								<li className="py-1">
									<div className="flex items-center justify-between">
										<button className="cursor-pointer font-semibold text-gray-800 hover:text-blue-600">
											Manage Tickets
										</button>
										<div className="text-sm text-gray-500"></div>
									</div>
									<div className="text-xs text-gray-500">Tickets Managment</div>
								</li>
								<li className="py-1">
									<div className="flex items-center justify-between">
										<button className="cursor-pointer font-semibold text-gray-800 hover:text-blue-600">
											Manage Users
										</button>
										<div className="text-sm text-gray-500"></div>
									</div>
									<div className="text-xs text-gray-500">Users Managment</div>
								</li>
								<li className="py-1">
									<div className="flex items-center justify-between">
										<button className="cursor-pointer font-semibold text-gray-800 hover:text-blue-600">
											Advertise Tickets
										</button>
										<div className="text-sm text-gray-500"></div>
									</div>
									<div className="text-xs text-gray-500">Tickets Advertising</div>
								</li>
							</ul>
						</div>
					</div>
				</li>


				<li className="group w-14 overflow-hidden rounded-lg border-l border-transparent bg-white transition-all duration-500 hover:w-64 hover:border-gray-200 hover:shadow-lg has-[:focus]:w-64 has-[:focus]:shadow-lg">
					<button className="peer flex w-full cursor-pointer items-center gap-2.5 px-3 py-2 text-left text-blue-800 transition-all active:scale-95">
						<div className="rounded-lg border-2 border-blue-300 bg-blue-100 p-1">
							<FaShop size={25} />
						</div>
						<div className="font-semibold">Vendor</div>
					</button>
					<div className="grid grid-rows-[0fr] overflow-hidden transition-all duration-500 peer-focus:grid-rows-[1fr]">
						<div className="overflow-hidden">
							<ul className="divide-y divide-gray-200 p-4 pt-0">
								<li className="py-2">
									<div className="flex items-center justify-between">
										<button className="peer cursor-pointer font-semibold text-gray-800 hover:text-blue-600">
											Profile
										</button>
										<div className="text-sm text-gray-500 transition-all peer-hover:translate-x-1">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
												<path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
											</svg>
										</div>
									</div>
									<div className="text-xs text-gray-500">Your Vending Profile</div>
								</li>
								<li className="py-2">
									<div className="flex items-center justify-between">
										<button className="peer cursor-pointer font-semibold text-gray-800 hover:text-blue-600">
											Ticket
										</button>
										<div className="text-sm text-gray-500 transition-all peer-hover:translate-x-1">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
												<path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
											</svg>
										</div>
									</div>
									<div className="text-xs text-gray-500">Add new Ticket</div>
								</li>
								<li className="py-2">
									<div className="flex items-center justify-between">
										<button className="peer cursor-pointer font-semibold text-gray-800 hover:text-blue-600">
											My Added Tickets
										</button>
										<div className="text-sm text-gray-500 transition-all peer-hover:translate-x-1">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
												<path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
											</svg>
										</div>
									</div>
									<div className="text-xs text-gray-500">View Your added tickets</div>
								</li>
								<li className="py-1">
									<div className="group/title flex items-center justify-between">
										<button className="peer cursor-pointer font-semibold text-gray-800 hover:text-blue-600">
											Requested Bookings
										</button>
										<div className="text-sm text-gray-500 transition-all peer-hover:translate-x-1">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
												<path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
											</svg>
										</div>
									</div>
									<div className="text-xs text-gray-500">View Requested Bookings</div>
								</li>
								<li className="py-1">
									<div className="group/title flex items-center justify-between">
										<button className="peer cursor-pointer font-semibold text-gray-800 hover:text-blue-600">
											Revenue Overview
										</button>
										<div className="text-sm text-gray-500 transition-all peer-hover:translate-x-1">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
												<path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
											</svg>
										</div>
									</div>
									<div className="text-xs text-gray-500">View Revenue Overview</div>
								</li>
							</ul>
						</div>
					</div>
				</li>


				<li className="group w-14 overflow-hidden rounded-lg border-l border-transparent bg-white transition-all duration-500 hover:w-64 hover:border-gray-200 hover:shadow-lg has-[:focus]:w-64 has-[:focus]:shadow-lg">
					<button className="peer flex w-full cursor-pointer items-center gap-2.5 px-3 py-2 text-left text-blue-800 transition-all active:scale-95">
						<div className="rounded-lg border-2 border-blue-300 bg-blue-100 p-1">
							<FaUser size={25} />
						</div>
						<div className="font-semibold">Users</div>
					</button>
					<div className="grid grid-rows-[0fr] overflow-hidden transition-all duration-500 peer-focus:grid-rows-[1fr]">
						<div className="overflow-hidden">
							<ul className="divide-y divide-gray-200 p-4 pt-0">
								<li className="py-2">
									<div className="flex items-center justify-between">
										<button className="peer cursor-pointer font-semibold text-gray-800 hover:text-blue-600">
											Profile
										</button>
										<div className="text-sm text-gray-500 transition-all peer-hover:translate-x-1">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
												<path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
											</svg>
										</div>
									</div>
									<div className="text-xs text-gray-500">Your Profile</div>
								</li>
								<li className="py-1">
									<div className="group/title flex items-center justify-between">
										<button className="peer cursor-pointer font-semibold text-gray-800 hover:text-blue-600">
											My Booked Tickets
										</button>
										<div className="text-sm text-gray-500 transition-all peer-hover:translate-x-1">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
												<path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
											</svg>
										</div>
									</div>
									<div className="text-xs text-gray-500">View your Booked Tickets</div>
								</li>
								<li className="py-1">
									<div className="group/title flex items-center justify-between">
										<button className="peer cursor-pointer font-semibold text-gray-800 hover:text-blue-600">
											Transaction History 
										</button>
										<div className="text-sm text-gray-500 transition-all peer-hover:translate-x-1">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
												<path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
											</svg>
										</div>
									</div>
									<div className="text-xs text-gray-500">View your Transaction History</div>
								</li>
							</ul>
						</div>
					</div>
				</li>


				<li className="group w-14 overflow-hidden rounded-lg border-l border-transparent bg-white transition-all duration-500 hover:w-64 hover:border-gray-200 hover:shadow-lg has-[:focus]:w-64 has-[:focus]:shadow-lg">
					<button className="peer flex w-full cursor-pointer items-center gap-2.5 px-3 py-2 text-left text-blue-800 transition-all active:scale-95">
						<div className="rounded-lg border-2 border-blue-300 bg-blue-100 p-1">
							<svg className="size-6" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" strokeLinejoin="round" strokeLinecap="round" />
								<path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" strokeLinejoin="round" strokeLinecap="round" />
							</svg>
						</div>
						<div className="font-semibold">Settings</div>
					</button>
					<div className="grid grid-rows-[0fr] overflow-hidden transition-all duration-500 peer-focus:grid-rows-[1fr]">
						<div className="overflow-hidden">
							<ul className="divide-y divide-gray-200 p-4 pt-0">
								<li className="py-2">
									<div className="flex items-center justify-between">
										<button className="peer cursor-pointer font-semibold text-gray-800 hover:text-blue-600">
											System Preferences
										</button>
										<div className="text-sm text-gray-500 transition-all peer-hover:translate-x-1">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
												<path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
											</svg>
										</div>
									</div>
									<div className="text-xs text-gray-500">Default Settings / Profile</div>
								</li>
								<li className="py-1">
									<div className="group/title flex items-center justify-between">
										<button className="peer cursor-pointer font-semibold text-gray-800 hover:text-blue-600">
											Theme
										</button>
										<div className="text-sm text-gray-500 transition-all peer-hover:translate-x-1">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
												<path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
											</svg>
										</div>
									</div>
									<div className="text-xs text-gray-500">Light / Dark Mode</div>
								</li>
							</ul>
						</div>
					</div>
				</li>


				<li className="group w-14 overflow-hidden rounded-lg border-l border-transparent bg-white transition-all duration-500 hover:w-64 hover:border-gray-200 hover:shadow-lg has-[:focus]:w-64 has-[:focus]:shadow-lg">
					<button className="peer flex w-full cursor-pointer items-center gap-2.5 px-3 py-2 text-left text-green-800 transition-all active:scale-95">
						<div className="rounded-lg border-2 border-green-300 bg-green-100 p-1">
							<svg className="size-6" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" strokeLinejoin="round" strokeLinecap="round" />
							</svg>
						</div>
						<div className="font-semibold">Chat</div>
					</button>
					<div className="grid grid-rows-[0fr] overflow-hidden transition-all duration-500 peer-focus:grid-rows-[1fr]">
						<div className="overflow-hidden">
							<ul className="border-t border-gray-200 p-4 pt-0.5">
								<li className="flex flex-col items-end">
									<div className="text-right text-xs">8:34 AM</div>
									<div className="w-40 rounded-lg bg-blue-600/70 px-2 py-1 text-right text-sm text-white">
										Hey TARS, what's your honesty parameter?
									</div>
								</li>
								<li className="flex flex-col items-start">
									<div className="text-right text-xs">8:37 AM</div>
									<div className="w-40 rounded-lg bg-gray-100 px-2 py-1 text-sm">
										90 percent.
									</div>
								</li>
							</ul>
							<div className="relative">
								<input className="h-8 w-full rounded-b-lg border border-gray-200 bg-gray-100 pl-2 text-sm" placeholder="Reply" type="text" />
								<button className="absolute bottom-0 right-2 top-0 my-auto size-fit cursor-pointer text-blue-600 hover:text-blue-700">
									<svg className="size-5" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" strokeLinejoin="round" strokeLinecap="round" />
									</svg>
								</button>
							</div>
						</div>
					</div>
				</li>
			</ul>

			

			{/* <ul className='flex flex-col mt-5 text-xl'>
				<Link to='/'>
					<li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer  hover:bg-blue-600 hover:text-white'>
						<FaTachometerAlt />

						<span className='hidden md:inline'>Dashboard</span>

					</li>
				</Link>
				<li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:text-white hover:bg-blue-600">
					<FaShoppingCart />
					<span className="hidden md:inline ">Orders</span>
				</li>
				<li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer  hover:text-white hover:bg-blue-600">
					<FaUsers />
					<span className="hidden md:inline ">Customers</span>
				</li>
				<li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer  hover:text-white hover:bg-blue-600">
					<FaUser />
					<span className="hidden md:inline ">Users</span>
				</li>
				<li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer  hover:text-white hover:bg-blue-600">
					<FaBox />
					<span className="hidden md:inline ">Products</span>
				</li>
				<li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer  hover:text-white hover:bg-blue-600">
					<FaCog />
					<span className="hidden md:inline ">Settings</span>
				</li>
			</ul> */}
		</div>
	)
}

export default Sidebar