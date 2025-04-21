import React from 'react';
import { FaLinkedin, FaFacebook,FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
           <footer className="mt-8 footer footer-horizontal footer-center bg-black text-primary-content p-10">
  <aside className='flex gap-4'>
    <img src="/public/logo-footer.png" alt="" />
    <p className='text-2xl font-bold'>Law.BD</p>
  </aside>
  <ul className="menu menu-horizontal px-1 flex gap-4">
     
     <li>Home</li>
     <li>My-Bookings</li>
     <li>Blogs</li>
     <li>Contact Us</li>

 </ul>
  <nav>
    
    <div className="grid grid-flow-col gap-4">
     <a href="https://x.com/ARBijoy223"><FaTwitter size={25}/></a>
     <a href="https://www.facebook.com/"><FaFacebook size={25}/></a>
      <a href="https://www.linkedin.com/in/abdur-rahman-bijoy-76b821263/">
      <FaLinkedin size={25}/>
      </a>
    </div>
  </nav>
</footer>
        </div>
    );
};

export default Footer;