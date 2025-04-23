import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../Component/Navbar';
import Footer from '../../Component/Footer';
import CountUp from 'react-countup';

// const Stats = () => {
//   return (
//     <div className="text-center my-8">
//       <h2 className="text-3xl font-bold">
//         <CountUp end={1000} duration={3} />+
//       </h2>
//       <p className="text-sm text-gray-600">Happy Clients</p>
//     </div>
//   );
// };

const Mainlayout = () => {
    return (
        <div>
<div className='px-4'>
            <Navbar/>
            <Outlet/>
            </div>
            <Footer/>
       
        </div>
        
    );
};

export default Mainlayout;