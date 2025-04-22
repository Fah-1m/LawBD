import React from 'react';
import { useRouteError } from 'react-router';
import Navbar from '../Component/Navbar';

const Error = () => {
    const error = useRouteError();
    return (

        <div>
            <Navbar/>
            <div className='my-10'>
            <img src="/public/404_page-not-found-1536x864.webp" alt="" />
            <h2>
            </h2>
            </div>
           
        </div>
    );
};

export default Error;