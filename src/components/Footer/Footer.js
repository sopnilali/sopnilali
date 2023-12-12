"use client"

import Link from 'next/link';
import React from 'react';
import { FaFacebookSquare, FaGithub, FaGithubAlt, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
    return (
        <footer className="footer items-center p-4 bg-neutral text-neutral-content">
  <aside className="items-center grid-flow-col">
   <div className='text-center mr-5'>
    <h2 >Abdul Adud</h2>
    <h2>Front End Developer</h2>
   </div>
    <p>Copyright © 2023 - All right reserved</p>
  </aside> 
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
  <Link href={'mailto: mdabduladud8@gmail.com'} className='text-2xl'><IoIosMail /></Link>
    <Link href={'https://www.facebook.com/cse.wadud'} className='text-2xl'><FaFacebookSquare />
    </Link>
    <Link href={'https://github.com/amiadud'} className='text-2xl'><FaGithub/></Link>
    <Link href={'https://www.linkedin.com/in/md-abdul-adud-13935a2a4/'} className='text-2xl'><FaLinkedin/></Link>

  </nav>
</footer>
    );
};

export default Footer;