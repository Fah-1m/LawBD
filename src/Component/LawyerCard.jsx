import React from 'react';
import { Link } from 'react-router';

const LawyerCard = ({infodata}) => {
    const {name,specialty,license,profileImage,availability,experience,weekdays,id}= infodata
    return (

        <div> 
       
        <div className="card card-side bg-base-100 shadow-sm">
  <figure>
    <img className='w-24 h-32 object-cover rounded-md'
      src={profileImage}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <div className='flex gap-2'>
    <button className='text-green-600 rounded-xl bg-green-200 px-2'>{availability}</button> 
    <button className='text-blue-600 rounded-xl bg-blue-200 px-2'>{experience}</button>
    </div>
   
    <h2 className="card-title">{name}</h2>
    <p>{specialty}</p>
            <p>{license}</p> 

    <Link to={`/details/${id}`}>
    <button className="text-blue-600 border-1 rounded-2xl px-20 font-bold">view details</button>
    </Link>
  

 

    </div>
</div>
</div>
    );
};

export default LawyerCard;