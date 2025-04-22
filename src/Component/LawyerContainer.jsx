import React, { useEffect, useState } from 'react';
import LawyerCard from './LawyerCard';

const LawyerContainer = ({info}) => {

    const [showdata, setShowdata]= useState([])
    const [showall,setshowall]=useState(false)

    useEffect(() =>{
    if(showall){
    setShowdata(info.slice(0,6))
    }
    else
    setShowdata(info.slice(0,12))
      


    },[info,showall])

    return (
        <div>
               <div className='text-center p-16'>
                <h2 className='text-4xl font-bold'>Our Best Lawyers</h2>
                <p className='mt-4'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div className='grid grid-cols-3 gap-8 p-5'>
                {
                    showdata.map(details => <LawyerCard infodata={details}></LawyerCard>)
                }
            </div>
            <div className='text-center bg-green-600 text-white inline ml-150 rounded-xl px-4'>

            <button className='' onClick={()=> {
        
                setshowall(prev => !prev)
                
              if (showall)
                    window.scroll(0,800)

              else window.scroll(0,700)
            }
                // console.log(showall)
                } >{showall ? 'Show All Lawyer':'Show less'}</button>

            </div>
          
        </div>
    );
};

export default LawyerContainer;