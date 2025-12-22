import React from 'react';
import AdminProfile from '../Admin/AdminProfile';
import VendorProfile from '../Vendor/VendorProfile';

const UserProfile = () => {
    return (
        <div className='grow p-8'>
            UserProfile
            <AdminProfile></AdminProfile>
            <VendorProfile></VendorProfile>


            <div className="relative sm:w-md md:w-lg lg:w-xl mx-auto rounded-xl overflow-hidden flex flex-col items-center shadow-lg bg-white font-Roboto-light">
                <div className="h-24 w-full bg-cyan-700"></div>
                <div className="top-16 z-10 flex items-center flex-col gap-4 px-5 py-5">
                    <div className="-mt-20">
                        <img className='w-25 rounded-full border-2 border-white' src="https://scontent.fdac177-1.fna.fbcdn.net/v/t39.30808-6/431791220_2140807236256918_636841911573142717_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=rj1EWrVBhxYQ7kNvwH3Qy_9&_nc_oc=Adl7AKpW7wgmO6QR2v7DdDs41JJagcQXiXDT6P_LPSSwlHTPOmCdERcKQe0KcknQ2Cs&_nc_zt=23&_nc_ht=scontent.fdac177-1.fna&_nc_gid=_9Clv4MpkhoTZp4rbm6iew&oh=00_Afmh2Jc8nCznXXjauSOXYm2JNZAkCkIGqQRWGhQrq4v58A&oe=6947E571" alt="" />
                        <button className="border transition-all gradient text-[15px] px-7 py-1 mt-2 rounded-full flex items-center gap-1" >
                            Vendor
                        </button>
                    </div>

                    <div className="flex items-center flex-col">
                        <p className="font-bold">Abdullah</p>
                        <p className=" text-gray-500"> User Id: USER3872XG9</p>
                        <p className=" text-gray-500">Email: ab.faishal@gmail.com</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="bg-cyan-700 text-[15px] text-white px-5 py-2 rounded-full cursor-pointer">
                            Update Profile
                        </button>

                        <button className="bg-cyan-700 text-[15px] text-white px-5 py-2 rounded-full cursor-pointer">
                            Change Password
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;