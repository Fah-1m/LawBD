import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { NavLink } from 'react-router';

const Nobooking = () => {
    return (
  <div className='text-center'>
    <h2 className='text-3xl font-bold my-8'> You Have Not Booked Any Appointment Yet</h2>
    <p className='mb-8'>Please select any Lawyer to appoint them . Please Sele this <br></br>button to booked Lawyer</p>
   <NavLink to={"/"}><button className='my-5 bg-blue-600 text-white px-4 rounded-2xl p-2'>Book an Appointment</button></NavLink> 
  </div>
    );
};

export default Nobooking;