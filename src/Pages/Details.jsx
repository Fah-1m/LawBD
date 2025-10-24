import React, { useEffect } from 'react';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router';
import { CiCircleAlert } from "react-icons/ci";
import { bookLawyer } from '../Component/Utils';
import toast, { Toaster } from 'react-hot-toast';



const Details = () => {
    


    const data = useLoaderData(); // full array
    const { id } = useParams();
    const navigate = useNavigate();
  
    const singleInfo = data.find(item => item.id === parseInt(id));
    
    
    const handleBookLawyer =()=>{
        
        // bookLawyer(singleinfo)
        bookLawyer(singleInfo)
    }

   
    useEffect(() => {
      if (isNaN(id) || !singleInfo) {
        navigate("/34rete");
      }
    }, [singleInfo, navigate]);
  
    if (!singleInfo) return null;

    return (

    //     <div>
    // <div className="p-6">
    //   <h2 className="text-3xl font-bold">{singleInfo.name}</h2>
    //   <p>{singleInfo.specialty}</p>
    // </div>
    //     </div>
      
        <div>
             

            <div className='text-center my-8 bg-base-200 p-16'>
                <h1 className='text-3xl font-bold my-5'>Lawyer’s Profile Details</h1>
                <p >A lawyer is a trained and licensed professional who represents clients in legal matters. Their role involves advising individuals, businesses, or organizations on their rights and responsibilities, drafting legal documents, and representing clients in court or legal negotiations.</p>
            </div>

              <div className="card card-side bg-base-100 shadow-sm md:px-10 p-2">
  <figure>
    <img className='md:w-24 md:h-32 w-16 h-20 object-cover rounded-md'
      src={singleInfo.profileImage}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <div className='flex md:gap-2 gap-1'>
    <button className='text-blue-600 rounded-xl bg-blue-200 px-2'>{singleInfo.experience}</button>
    </div>
   
    <h2 className="card-title">{singleInfo.name}</h2>
    <p>{singleInfo.specialty} <span className='ml-4 font-semibold'>{singleInfo.license}</span></p> 

    <div className='flex md:gap-3 gap-1 items-center'>
        <div><h2>Availablity</h2></div>
        <div className='flex'>
    {singleInfo.weekdays?.map((day, index) => (
        <div 
          key={index}
          className="bg-amber-100 text-red-600 md:px-4 md:py-2 rounded-lg mx-1"
        >
          {day}
        </div>
      ))}
    </div>

    </div>
 <div className='flex gap-4'>

    <h2>Consultation Fee: </h2>
<h3 className='text-green-700 font-bold'>Taka. {singleInfo.fee}</h3>

 </div>

    </div>
</div>

<div className='my-4 md:p-6'>

<h2 className='font-bold text-center md:text-2xl mb-4'>Book an Appointment</h2>

<div className='flex justify-between gap-1'>
<h2 className='font-bold text-xl'>Availablity</h2>
<h2 className='bg-green-100 text-green-700 rounded-2xl md:px-4 text-center md:font-semibold'>Lawyer  Available Today</h2>

</div>

<h2 className='bg-amber-100 text-amber-500 rounded-2xl px-6 py-2 mt-8 flex items-center gap-2'><CiCircleAlert size={25}/> Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</h2>

<Link to={'/mybookings'}> 
<button onClick={handleBookLawyer} className='font-semibold bg-green-600 md:px-115 text-center md:py-1 rounded-3xl md:text-xl text-white my-6 '>Book Appointment Now</button>
</Link>
</div>


        </div>
    );
};

export default Details;