import React from 'react';
import { NavLink, useLocation } from 'react-router';

const Nolawyer = () => {
    const location = useLocation();
    return (
        <div className='text-center py-12'>
            <h2 className='text-3xl font-bold my-4'>No Lawyer Found</h2>
            <p>No Lawyer found with this lidcence No.</p>
            <h2 className='font-semibold my-1'>{location.pathname}</h2>
            <NavLink to={"/"}><button className='my-5 bg-blue-600 text-white px-4 rounded-2xl p-2'>View All Lawyer</button></NavLink> 
        </div>
    );
};

export default Nolawyer;