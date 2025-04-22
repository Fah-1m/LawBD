import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../Component/Navbar';
import Footer from '../../Component/Footer';

const Mainlayout = () => {
    return (
        <div className='px-10'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Mainlayout;