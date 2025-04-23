// import React, { useState } from 'react';
import Hero from '../Component/Hero';
import { useLoaderData } from 'react-router';
import LawyerContainer from '../Component/LawyerContainer';
import CountUp from 'react-countup';


const Home = () => {

    const data = useLoaderData();

    return (
        <div>
      


         <Hero></Hero>
         <LawyerContainer info={data}/>
         <div className='my-6'>
            <div className='text-center'>
            <h2 className='text-2xl font-bold my-3'>We Provide Best Law Services</h2>
            <p>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience. </p>

            <div className='grid grid-cols-4 my-5 gap-6'>

            <div className='bg-gray-100 border-1 rounded-xl p-4 '>
<img className='mx-auto' src="/success-doctor.png" alt="" />
        <h2 className='text-3xl font-bold my-1'><CountUp start={0} end={5900} duration={4} separator="," suffix="+"/ >     </h2>
<p>Total Lawyer</p>
            </div>
            <div className='bg-gray-100 border-1 rounded-xl p-4 '>
<img className='mx-auto' src="/success-review.png" alt="" />
        <h2 className='text-3xl font-bold my-1'><CountUp start={0} end={2905} duration={4} separator="," suffix="+"/ >     </h2>
<p>Total Reviews</p>
            </div>
            <div className='bg-gray-100 border-1 rounded-xl p-4 '>
<img className='mx-auto' src="/success-patients.png" alt="" />
        <h2 className='text-3xl font-bold my-1'><CountUp start={0} end={7250} duration={4} separator="," suffix="+"/ >     </h2>
<p>Cases Initiated</p>
            </div>
            <div className='bg-gray-100 border-1 rounded-xl p-4 '>
<img className='mx-auto' src="/success-staffs.png" alt="" />
        <h2 className='text-3xl font-bold my-1'><CountUp start={0} end={4900} duration={4} separator="," suffix="+"/ >     </h2>
<p>Total Stuffs</p>
            </div>
            

            </div>

            </div>
           

            </div>
            
        </div>
    );
};

export default Home;