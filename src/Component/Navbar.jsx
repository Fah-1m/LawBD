import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            
                            {/* 2. ADDED SLASHES AND FIXED CONTACT ROUTE */}
                            <li><NavLink className={({isActive})=>(isActive ? 'text-blue-500 underline' : '')} to={'/'}>Home</NavLink></li>
                            <li><NavLink className={({isActive})=>(isActive ? 'text-blue-500 underline' : '')} to={'/mybookings'}>Bookings</NavLink></li>
                            <li><NavLink className={({isActive})=>(isActive ? 'text-blue-500 underline' : '')} to={'/blogs'}>Blogs</NavLink></li>
                            <li><NavLink className={({isActive})=>(isActive ? 'text-blue-500 underline' : '')} to={'/contact'}>Contact Us</NavLink></li>

                        </ul>
                    </div>
                    <a className="btn btn-ghost md:text-xl text-sm"><img className='w-1/2 h-2/3 md:w-full md:h-full' src="/logo.png" alt="" /> Law.BD</a>
                </div>

                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        
                        {/* 3. ADDED SLASHES AND FIXED CONTACT ROUTE (for desktop) */}
                        <li><NavLink className={({isActive})=>(isActive ? 'text-blue-500 underline' : '')} to={'/'}>Home</NavLink></li>
                        <li><NavLink className={({isActive})=>(isActive ? 'text-blue-500 underline' : '')} to={'/mybookings'}>Bookings</NavLink></li>
                        <li><NavLink className={({isActive})=>(isActive ? 'text-blue-500 underline' : '')} to={'/blogs'}>Blogs</NavLink></li>
                        <li><NavLink className={({isActive})=>(isActive ? 'text-blue-500 underline' : '')} to={'/contact'}>Contact Us</NavLink></li>

                    </ul>
                </div>

                <div className="navbar-end">
                    {/* 4. CONVERTED THIS BUTTON TO A LINK */}
                    <NavLink to="/contact" className="rounded-3xl relative rounded md:px-5 md:py-2.5 p-1 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                        <span className="relative">Contact Now</span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;