import React, { useEffect, useState } from 'react';
import Rechart from '../Component/Rechart';
import { getfav } from '../Component/Utils';
import Bookings from './Bookings';
import toast from 'react-hot-toast';
import Nobooking from '../Component/Nobooking';
import { NavLink } from 'react-router';

const Mybookings = () => {
   

  const [showdata, setShowdata]= useState([])

useEffect(()=>{

    const savedlawyer= getfav()
    setShowdata(savedlawyer)

},[])

const handleDelete= id =>{
    // remove(id)
    // setShowdata(remove())
    toast.error("Successfully Cancel Appointment");

    const updated = showdata.filter(item => item.id !== id); // Just remove one
    setShowdata(updated);
    localStorage.setItem("lawyer", JSON.stringify(updated)); 
}

 console.log(showdata)

 if(showdata.length<1) return  <Nobooking></Nobooking>
    return (
        <div>




{/* Rechart */}
<div className='my-8'>
<Rechart infodata={showdata} >  </Rechart>
</div>


{Array.isArray(showdata) && showdata.length > 0 ? (
  showdata.map(details => (
    <Bookings
      key={details.id}
      infodata={details}
      handleDelete={handleDelete}
    />
   
   

  ))
) : ''}



        </div>
    );
};

export default Mybookings;