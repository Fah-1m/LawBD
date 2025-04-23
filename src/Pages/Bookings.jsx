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


     
<div className='border-1 rounded-2xl my-8 md:px-8 md:py-4 p-2'>
            <div className='flex justify-between'>

            <div>
            <h2 className='md:text-xl font-bold'>{name}</h2>
            <h3>{specialty}</h3>
          </div>
          <h2 className=''>Consultion Fee: {fee}</h2>
            </div>
            <div className='mx-auto text-center'>
            <Link to={""}>  <button onClick={()=> handleDelete(id)} className='text-red-500 border-red-400 rounded-2xl border-1 md:px-100 px-4 text-center mx-auto my-2'>Cancel Appointment</button></Link>
          
            </div>
           
         
        </div>
        </div>


        
      
    );
};

export default Bookings;