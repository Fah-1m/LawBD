import React, { useEffect, useState } from 'react';
import Rechart from '../Component/Rechart';
import { getfav, remove } from '../Component/Utils';
import LawyerCard from '../Component/LawyerCard';
import Bookings from './Bookings';

const Mybookings = () => {
   

  const [showdata, setShowdata]= useState([])

useEffect(()=>{

    const savedlawyer= getfav()
    setShowdata(savedlawyer)

},[])

const handleDelete= id =>{
    // remove(id)
    // setShowdata(remove())

    const updated = showdata.filter(item => item.id !== id); // Just remove one
    setShowdata(updated);
    localStorage.setItem("lawyer", JSON.stringify(updated)); 
}

 
    return (
        <div>
{/* Rechart */}
<Rechart></Rechart>


           <div>
            <h2 className='text-3xl font-bold my-6 text-center'>My Today Appointments</h2>
            <p className='text-center mb-6'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
           </div>

<div>
          
</div>

{Array.isArray(showdata) && showdata.length > 0 ? (
  showdata.map(details => (
    <Bookings
      key={details.id}
      infodata={details}
      handleDelete={handleDelete}
    />
  ))
) : (
  <p className="text-center text-gray-500 mt-4">No bookings found.</p>
)}

        </div>
    );
};

export default Mybookings;