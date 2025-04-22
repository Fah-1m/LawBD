import React from 'react';
import imgbn from '/public/banner-img-1.png'


const Hero = () => {
    return (
        <div>
<div className="relative w-full shadow-sm rounded-xl overflow-hidden my-4">
  <img src={imgbn} alt="banner" className="w-full object-cover brightness-90" />
  
  <div className="absolute inset-0  bg-opacity-30 flex flex-col justify-center items-center text-white p-4 text-center">
    <h2 className="md:text-2xl text-sm pt-8 md:py-5 font-bold">It avoids subjective claims or<br></br> exaggeration that might raise red<br/> flags legally</h2>
    <p className='px-10 md: px-0'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
  </div>
</div>


        </div>
       
    );
};

export default Hero;