import React from 'react';
import { NavLink, useRouteError } from 'react-router';
import Navbar from '../Component/Navbar';

const Error = () => {
    const error = useRouteError();
    return (

        <div>
            <Navbar/>
            <div className='my-10'>
            <img className='w-full h-110' src="/public/404_page-not-found-1536x864.webp" alt="" />
            <h2>
            </h2>
            </div>
            <div className='text-center'>
            <NavLink to={"/"}><button className='text-center bg-green-500 text-white md:ml-1 px-10 rounded-2xl mt-2 mb-8 py-1'>Go to Home</button></NavLink>
            </div>
      
        </div>
    );
};

export default Error;