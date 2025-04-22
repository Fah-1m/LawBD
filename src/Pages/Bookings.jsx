import React from 'react';
import Mybookings from './Mybookings';
import { remove } from '../Component/Utils';
import { Link } from 'react-router';
import Rechart from '../Component/Rechart';
import { Bar } from 'recharts';

const Bookings = ({infodata, handleDelete}) => {

    const {name,specialty,fee,id}= infodata
console.log(infodata)


    return (
        <div> 

  
<div>
        <h2 className='text-3xl font-bold my-6 text-center'>My Today Appointments</h2>
      <p className='text-center mb-6'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
         </div>
     
<div className='border-1 rounded-2xl my-8 px-8 py-4'>
            <div className='flex justify-between'>

            <div>
            <h2>{name}</h2>
            <h3>{specialty}</h3>
          </div>
          <h2>Consultion Fee: {fee}</h2>
            </div>
            <Link to={""}>  <button onClick={()=> handleDelete(id)} className='text-red-500 border-red-400 rounded-2xl border-1 px-100 text-center ml-30 my-2'>Cancel Appointment</button></Link>
          
         
        </div>
        </div>


        
      
    );
};

export default Bookings;