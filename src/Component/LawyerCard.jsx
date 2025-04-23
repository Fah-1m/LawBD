import React from 'react';
import { Link } from 'react-router';

const LawyerCard = ({infodata}) => {
    const {name,specialty,license,profileImage,availability,experience,weekdays,id}= infodata
    return (

        <div> 
       
        <div className="card card-side bg-base-100 shadow-sm md:px-10 p-2">
  <figure>
    <img className='md:w-24 md:h-32 w-16 h-20 object-cover rounded-md'
      src={profileImage}
      alt="Movie" />
  </figure>
  <div className="card-body w-2/3">
    <div className='flex md:gap-2 gap-1'>
    <button className='text-green-600 rounded-xl bg-green-200 md:px-2 px-1'>{availability}</button> 
    <button className='text-blue-600 rounded-xl bg-blue-200 md:px-2 px-1'>{experience}</button>
    </div>
   
    <h2 className="card-title">{name}</h2>
    <p>{specialty}</p> <hr></hr>
            <p>{license}</p> 

    <Link to={`/details/${id}`}>
    <button className="text-blue-600 border-1 rounded-2xl md:px-20 px-4 font-bold">view details</button>
    </Link>
  

 

    </div>
</div>
</div>
    );
};

export default LawyerCard;