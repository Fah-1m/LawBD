import React from 'react';
import Hero from '../Component/Hero';
import { useLoaderData } from 'react-router';
import LawyerContainer from '../Component/LawyerContainer';

const Home = () => {
    const data = useLoaderData();
 
    return (
        <div>
         <Hero></Hero>
         <LawyerContainer info={data}/>
        </div>
    );
};

export default Home;